<template>
	<div class="kline-container">
		<div id="klineCanvas" class="kline-chart"></div>
	</div>
</template>

<script>
	import dayjs from 'dayjs'
	export default {
		name: "KlineChart",

		props: {
			klineData: {
				type: Array,
				default: () => []
			}
		},

		data() {
			return {
				chart: null,
				options: {},
				lastTimestamp: null // 用来判断是“新增 K 线”还是“更新最后一根”
			};
		},

		watch: {
			klineData: {
				handler(newVal) {
					if (!newVal || !newVal.length) return;
					this.updateChart(newVal);
				},
				deep: false
			}
		},

		mounted() {
			this.$echarts.env.touchEventsSupported = true;
			this.$echarts.env.wxa = false;
			this.$echarts.env.canvasSupported = false;
			this.$echarts.env.svgSupported = true;
			this.$echarts.env.domSupported = true;
			this.$nextTick(() => {
				this.waitForDom().then(() => {
					this.initChart();
				});
			});
		},

		methods: {
			waitForDom() {
				return new Promise(resolve => {
					const timer = setInterval(() => {
						const el = document.getElementById("klineCanvas");
						if (el && el.clientWidth && el.clientHeight) {
							clearInterval(timer);
							resolve();
						}
					}, 30);
				});
			},
			initChart() {
				if (this.chart) return;

				const dom = document.getElementById("klineCanvas");
				this.chart = this.$echarts.init(dom);
				const upColor = '#00da3c';
				const downColor = '#ec0000'
				const option = {
					animation: true,
					grid: [{
							left: '0%',
							right: '15%',
							height: '50%',
							top: '8%'
						},
						{
							left: '0%',
							right: '15%',
							top: '66%',
							height: '6%'
						}
					],
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross'
						},
						textStyle: {
							color: '#333'
						},
						className: 'klineTooltip',
						position: function(pos, params, el, elRect, size) {
							var obj = {
								top: 10
							};
							obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
							return obj;
						},
						formatter: function(params) {
							const themeColor = params[5].value[3] > 0 ? upColor : downColor
							const param = params[0];
							return `
						<ul style="border-color:${themeColor}">
							<li> 
								<div class="dot" style="background-color:${themeColor}"></div>
								 <span>${param.name}</span> 
							</li>
							<li>
								 <div class="dot" style="background-color:${themeColor}"></div> 
								 <span>open <span>${param.data[0]}</span></span>
							</li>
							<li> 
								<div class="dot" style="background-color:${themeColor}"></div>
								 <span>close <span>${param.data[1]}</span></span> 
							</li>
							<li> 
								<div class="dot" style="background-color:${themeColor}"></div> 
								<span>lowest <span>${param.data[2]}</span></span>
							</li>
							<li> 
								<div class="dot" style="background-color:${themeColor}"></div>
								 <span>highest <span>${param.data[3]}</span></span> 
							</li>
						</ul>
						`
						},
						extraCssText: 'width: 170px'
					},
					axisPointer: {
						link: {
							xAxisIndex: 'all'
						},
						label: {
							backgroundColor: '#777'
						}
					},
					toolbox: {
						show: false

					},

					visualMap: {
						show: false,
						seriesIndex: 5,
						dimension: 2,
						pieces: [{
							value: 1,
							color: downColor
						}, {
							value: -1,
							color: upColor
						}]
					},
					xAxis: [{
							type: 'category',
							data: [],
							scale: true,
							boundaryGap: false,
							axisTick: {
								show: true
							},
							axisLine: {
								onZero: false
							},
							splitLine: {
								show: false
							},
							splitNumber: 20,
							min: 'dataMin',
							max: 'dataMax',
							axisPointer: {
								z: 100
							}
						},
						{
							type: 'category',
							gridIndex: 1,
							data: [],
							scale: true,
							boundaryGap: false,
							axisLine: {
								onZero: false
							},
							axisTick: {
								show: false
							},
							splitLine: {
								show: false
							},
							axisLabel: {
								show: false
							},
							splitNumber: 20,
							min: 'dataMin',
							max: 'dataMax',
							axisPointer: {
								type: 'shadow',
								label: {
									show: false
								},
								triggerTooltip: true,
								handle: {
									show: true,
									margin: 30,
									color: '#B80C00'
								}
							}

						}
					],
					yAxis: [{
							scale: true,
							position: 'right',
							// splitArea: {
							// 	show: true
							// }
							// axisTick: {
							// 	show: true
							// }
						},
						{
							scale: true,
							gridIndex: 1,
							splitNumber: 2,
							axisLabel: {
								show: false
							},
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							splitLine: {
								show: false
							}
						}
					],
					dataZoom: [{
							type: 'slider',
							xAxisIndex: [0, 1],
							realtime: false,
							start: 70,
							end: 100,
							top: 10,
							height: 16,
							handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
							handleSize: '120%'
						},
						{
							type: 'inside',
							xAxisIndex: [0, 1],
							start: 70,
							end: 100,
							top: 30,
							height: 16
						}
					],
					series: [{
							name: 'kline',
							type: 'candlestick',
							data: [],
							itemStyle: {
								normal: {
									color: upColor,
									color0: downColor,
									borderColor: null,
									borderColor0: null
								}
							},
							markLine: {
								symbol: "none", //去掉警戒线最后面的箭头
								label: {
									backgroundColor: '#75c566',
									padding: [4, 6, 2, 6],
									borderRadius: 4,
									color: '#fff',
									position: "insideEndTop", //将警示值放在哪个位置，三个值"start","middle","end"  开始  中点 结束
								},
								lineStyle: {
									color: '#75c566',
								},
								data: [{
									silent: false, //鼠标悬停事件  true没有，false有
									yAxis: '', // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
								}, ],
							},
						},
						{
							name: 'MA5',
							type: 'line',
							data: [],
							smooth: true,
							lineStyle: {
								normal: {
									opacity: 0
								}
							},
							itemStyle: {
								normal: {
									opacity: 0
								}
							},
						},
						{
							name: 'MA10',
							type: 'line',
							data: [],
							smooth: true,
							lineStyle: {
								normal: {
									opacity: 0
								}
							},
							itemStyle: {
								normal: {
									opacity: 0
								}
							},
						},
						{
							name: 'MA20',
							type: 'line',
							data: [],
							smooth: true,
							lineStyle: {
								normal: {
									opacity: 0
								}
							},
							itemStyle: {
								normal: {
									opacity: 0
								}
							},
						},
						{
							name: 'MA30',
							type: 'line',
							data: [],
							smooth: true,
							lineStyle: {
								normal: {
									opacity: 0
								}
							},
							itemStyle: {
								normal: {
									opacity: 0
								}
							},
						},
						{
							name: 'Volume',
							type: 'bar',
							xAxisIndex: 1,
							yAxisIndex: 1,
							data: [],
						}
					]
				};
				this.options = option
				this.chart.setOption(option, false);
			},

			updateChart(rawData) {
				if (!this.chart) return;

				// 处理数据
				const {
					categoryData,
					values,
					volumes
				} = this.formatData(rawData);
				const lastTime = categoryData[categoryData.length - 1];
			
				// 判断是否仅更新最后一根
				const onlyUpdateLast =
					this.lastTimestamp === lastTime &&
					this.chart &&
					this.chart.getOption().series[0].data.length === values.length;

				this.lastTimestamp = lastTime;

				let updateOption = {};

				// 情况 A：只更新最后一根（性能最优）
				if (onlyUpdateLast) {
					const lastIndex = values.length - 1;

					updateOption = {
						series: [{
								data: this.replaceLast(this.chart.getOption().series[0].data, values[lastIndex]),
								markLine: {
									symbol: "none", //去掉警戒线最后面的箭头
									label: {
										backgroundColor: '#75c566',
										padding: [4, 6, 2, 6],
										borderRadius: 4,
										color: '#fff',
										position: "insideEndTop", //将警示值放在哪个位置，三个值"start","middle","end"  开始  中点 结束
									},
									lineStyle: {
										color: '#75c566',
									},
									data: [{
										silent: false, //鼠标悬停事件  true没有，false有
										yAxis: '', // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
									}, ],
								},
							},
							{
								data: this.updateMA(5, values)
							},
							{
								data: this.updateMA(10, values)
							},
							{
								data: this.updateMA(20, values)
							},
							{
								data: this.updateMA(30, values)
							},
							{
								data: this.replaceLast(this.chart.getOption().series[5].data, volumes[lastIndex])
							}
						]
					};
				}

				// 情况 B：全量更新（第一回加载，或新增一根 candle）
				else {
					updateOption = {
						xAxis: [{
								data: categoryData
							},
							{
								data: categoryData
							}
						],
						series: [{
								data: values,
								markLine: {
									symbol: "none", //去掉警戒线最后面的箭头
									label: {
										backgroundColor: '#75c566',
										padding: [4, 6, 2, 6],
										borderRadius: 4,
										color: '#fff',
										position: "insideEndTop", //将警示值放在哪个位置，三个值"start","middle","end"  开始  中点 结束
									},
									lineStyle: {
										color: '#75c566',
									},
									data: [{
										silent: false, //鼠标悬停事件  true没有，false有
										yAxis: '', // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
									}, ],
								},
							},
							{
								data: this.calcMA(5, values)
							},
							{
								data: this.calcMA(10, values)
							},
							{
								data: this.calcMA(20, values)
							},
							{
								data: this.calcMA(30, values)
							},
							{
								data: volumes
							}
						]
					};
				}
                 updateOption.series[0].markLine.data[0].yAxis = values[
                 	values.length - 1
                 ][1] + ""; 
				this.chart.setOption(updateOption, false, true);
			},

			// ---------------- 工具函数 ----------------

			formatData(rawData) {
				let categoryData = [];
				let values = [];
				let volumes = [];

				rawData.forEach((item, index) => {
					categoryData.push(dayjs(Number(item.time)).format('MM-DD HH:mm:ss'));
					values.push([
						Number(item.open),
						Number(item.close),
						Number(item.low),
						Number(item.high)
					]);
					volumes.push([
						index,
						Number(item.volume),
						Number(item.open) > Number(item.close) ? 1 : -1
					]);
				});

				return {
					categoryData,
					values,
					volumes
				};
			},

			calcMA(dayCount, data) {
				let result = [];
				for (let i = 0; i < data.length; i++) {
					if (i < dayCount - 1) {
						result.push("-");
						continue;
					}
					let sum = 0;
					for (let j = 0; j < dayCount; j++) {
						sum += data[i - j][1]; // 收盘价
					}
					result.push((sum / dayCount).toFixed(2));
				}
				return result;
			},

			updateMA(dayCount, data) {
				const maAll = this.calcMA(dayCount, data);
				return [...maAll]; // 全部返回，但仅在 onlyUpdateLast 下更新 DOM 很快
			},

			replaceLast(arr, newVal) {
				const clone = [...arr];
				clone[clone.length - 1] = newVal;
				return clone;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.kline-container {
		width: 100%;
		height: 100%;
	}

	/* .kline-chart {
		width: 100%;
		height: 100%;
	} */
	.kline-chart {
		width: 100%;
		height: 468px;
	}
	
	::v-deep .klineTooltip {
		box-shadow: none !important;
		background-color: transparent !important;
		padding: 0 !important;
	
		&>ul {
			border-radius: 6px;
			padding: 10px;
			border: 1px solid transparent;
			background-color: #fff;
	
			&>li {
				display: flex;
				align-items: center;
	
				.dot {
					border-radius: 50%;
					width: 5px;
					height: 5px;
					margin-right: 10px;
				}
	
				&:first-child {
					.dot {
						width: 10px;
						height: 10px;
					}
				}
	
				&>span {
					display: flex;
					flex: 1;
	
					&>span {
						margin-left: auto;
					}
				}
			}
		}
	}
</style>