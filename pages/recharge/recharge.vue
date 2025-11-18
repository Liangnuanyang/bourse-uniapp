<template>
	<view class="recharge-container">
		<guo-headerTitle :title="$t('user.rj')"></guo-headerTitle>

		<view class="recharge-content">
			<view class="address-section">
				<view class="tui-list">
					<view class="section-title">{{$t('withdraw-money.rjfs')}}</view>
					<view class="tui-listItem" @click="onClickOpen" style="background-color: #f6f7fb;">
						<view class="flex-item flex">
							<view class="title" v-if="formData.pay_type">
								{{payName}}
							</view>
							<view v-else>{{$t('withdraw-money.rjfs')}}</view>
						</view>
						<view class="flex flex-item">
							<uni-icons :type="typeShow ? 'down' : 'up'" size="20"
								style="color: rgb(96, 98, 102)"></uni-icons>
						</view>
					</view>

					<view v-if="payName=='ETH'|| payName=='BTC'" class="tui-listItem"
						style="background-color: #f4eadd;padding: 30rpx;margin-top: 40rpx;"
						@click="onClicktokefu()">
						<view class="flex-item flex">
							<view class="title" style="color: #fc6d22;">
								{{$t('recharge.tishi')}}
							</view>
						</view>
						<view class="flex flex-item">
							<uni-icons type="right" size="15" style="color: #fc6d22;"></uni-icons>

						</view>
					</view>
					<view v-if="!binded&&formData.pay_type&&payName!='ETH'&& payName!='BTC'" class="tui-listItem"
						style="background-color: #f4eadd;padding: 30rpx;margin-top: 40rpx;"
						@click="onClickDetail(formData.pay_type)">
						<view class="flex-item flex">
							<view class="title" style="color: #fc6d22;">
								{{$t('withdraw-money.nhwbd')}}{{typeList[formData.pay_type]}}
							</view>
						</view>
						<view class="flex flex-item">
							<uni-icons type="right" size="15" style="color: #fc6d22;"></uni-icons>

						</view>
					</view>
				</view>
				<!-- <view class="currency-tabs" v-if="">
					<view 
						class="tab-item" 
						:class="{ active: activeCurrency === 'USDT' }"
						@click="switchCurrency('USDT')"
					>
						USDT
					</view>
					<view 
						class="tab-item" 
						:class="{ active: activeCurrency === 'ETH' }"
						@click="switchCurrency('ETH')"
					>
						ETH
					</view>
				</view> -->
				<!-- 绑定过银行卡展示的-->
				<template v-if="formData.pay_type">
					<template v-if="formData.pay_type == '银行卡'">
						<uni-forms-item :label="$t('withdraw-money.xm')">
							<view class="tui-list">
								<view class="tui-listItem">
									<view class="flex-item flex">
										<view class="title">
											{{bankInfo.web_bank_user && this.$utils.replaceWithAsterisks(bankInfo.web_bank_user,1)}}
										</view>
									</view>
								</view>
							</view>
						</uni-forms-item>
						<!-- <uni-forms-item :label="$t('withdraw-money.gj')">
							<view class="tui-list">
								<view class="tui-listItem">
									<view class="flex-item flex">
										<view class="title">
											{{selectCashInfo.gj && this.$utils.replaceWithAsterisks(selectCashInfo.gj,1)}}
										</view>
									</view>
								</view>
							</view>
						</uni-forms-item> -->
						<!-- <uni-forms-item :label="$t('withdraw-money.khdz')">
							<view class="tui-list">
								<view class="tui-listItem">
									<view class="flex-item flex">
										<view class="title">
											{{selectCashInfo.bank_branch && this.$utils.replaceWithAsterisks(selectCashInfo.bank_branch,2)}}
										</view>
									</view>
								</view>
							</view>
						</uni-forms-item> -->
						<uni-forms-item :label="$t('withdraw-money.khh')">
							<view class="tui-list">
								<view class="tui-listItem">
									<view class="flex-item flex">
										<view class="title">
											{{bankInfo.web_bank_name}}
										</view>
									</view>
								</view>
							</view>
						</uni-forms-item>
						<uni-forms-item :label="$t('withdraw-money.kh')">
							<view class="tui-list">
								<view class="tui-listItem">
									<view class="flex-item flex">
										<view class="title">
											{{bankInfo.web_bank_number && getUsdt_back}}
										</view>
									</view>
								</view>
							</view>
						</uni-forms-item>
					</template>
					<!-- trc和erc的 -->

				</template>
				<template v-if="formData.pay_type == 'USDT'">
					<view class="address-info">
						<view class="address-title">{{payName}} {{$t('recharge.dz')}}</view>
						<view class="address-value" @click="copyAddress(usdtAddress)">
							{{ usdtAddress }}
							<text class="copy-text">{{$t('recharge.fz')}}</text>
						</view>
						<tki-qrcode ref="qrcodeUSDT" :val="usdtAddress" :size="size" :background="background"
							:foreground="foreground" :pdground="pdground" :onval="onval" :loadMake="loadMake"
							:icon="icon" :iconSize="iconSize" :loadingText="loadingText" @result="qrCode" />
					</view>

					<!-- <view class="address-info" v-if="activeCurrency === 'ETH'">
						<view class="address-title">ERC20 {{$t('recharge.dz')}}</view>
						<view class="address-value" @click="copyAddress(ethAddress)">
							{{ ethAddress }}
							<text class="copy-text">{{$t('recharge.fz')}}</text>
						</view>
						<tki-qrcode ref="qrcodeETH" :val="ethAddress" :size="size" :background="background"
							:foreground="foreground" :pdground="pdground" :onval="onval" :loadMake="loadMake" :icon="icon"
							:iconSize="iconSize" :loadingText="loadingText" @result="qrCode" />
					</view> -->
				</template>

			</view>

			<view class="form-section" v-if="payName!='ETH'&&payName!='BTC'">
				<view class="section-title">{{$t('recharge.tjcz')}}</view>
				<view class="form-item">
					<view class="form-label">{{$t('recharge.czje')}}</view>
					<input class="form-input" type="digit" :placeholder="$t('recharge.srje')"
						v-model="rechargeAmount" />
				</view>

				<view class="form-item">
					<view class="form-label">{{$t('recharge.scpz')}}</view>
					<view class="upload-container">
						<view class="upload-box" @click="chooseImage" v-if="!uploadedImage">
							<view class="upload-icon">+</view>
							<text class="upload-text">{{$t('recharge.sctp')}}</text>
						</view>
						<view class="preview-box" v-else>
							<image class="preview-image" :src="uploadedImage" mode="aspectFill" @click="previewImg">
							</image>
							<view class="reupload-btn" @click="chooseImage">
								<text>{{$t('recharge.cxsctp')}}</text>
							</view>
						</view>
					</view>
				</view>

				<button class="submit-btn" @click="submitRecharge">{{$t('recharge.tj')}}</button>
			</view>

			<view class="notice-section">
				<view class="section-title">{{$t('recharge.czsm')}}</view>
				<view class="notice-content">
					<view class="notice-item">1. {{$t('recharge.sm1')}}</view>
					<view class="notice-item">2. {{$t('recharge.sm2')}}</view>
					<view class="notice-item">3. {{$t('recharge.sm3')}}</view>
					<view class="notice-item">4. {{$t('recharge.sm4')}}</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" @maskClick="maskClick">
			<view class="tui-popupContent">
				<view class="flex flex-between flex-item p-26">
					<view class="title">
						{{$t('withdraw-money.rjfs')}}
					</view>
					<view class="cancle" @click="onClickCancle">
						{{$t('withdraw-money.qx')}}
					</view>
				</view>
				<view class="tui-content">
					<view class="tui-contentItem" v-for="(item,index) in typeList" :key="index"
						@click="onClickCurrentIndex(item,index)" :class="[{'tui-activite':payName==item.pay_name}]">
						{{item.pay_name}}
					</view>

				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	import updateFile from "@/utils/upload.js"
	import {
		recharge_apply,
		recharge_config
	} from "@/api/user.js"
	export default {
		components: {
			tkiQrcode
		},
		data() {
			return {
				activeCurrency: 'USDT',
				usdtAddress: 'TJ1Rgf58wZ8h9S4dsN5qD5VdV7K8DdW5Qm',
				ethAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
				size: 300,
				borderRadius: 4,
				iconSize: 45,
				background: '#ffffff',
				foreground: '#000000',
				pdground: '#000000',
				loadMake: true,
				icon: '',
				onval: true, //监听val变化
				loadingText: '',
				rechargeAmount: '', // 充值金额
				uploadedImage: '', // 上传的凭证图片
				uploading: false, // 上传状态
				formData: {
					money: '',
					pay_type: '',
					reg_img: '',
				},
				payName: '',
				payIndex: -1,
				typeShow: true,
				typeList: [],
				binded: false,
				// typeList: {
				// 	'bank_card': this.$t('withdraw-money.yhk'),
				// 	'usdt-trc20': 'USDT-TRC20',
				// 	'usdt-erc20': 'USDT-ERC20',
				// },
				bankInfo: {}
			}
		},
		onLoad() {

		},
		onShow() {
			this.recharge_config()
		},
		computed: {
			btnDisabled() {
				const {
					formData
				} = this
				if (!this.binded) {
					return true
				}
				console.log(formData)
				try {
					Object.entries(formData).forEach(([key, val]) => {
						if (!val && key !== 'usdt_url') {
							throw this.$t('withdraw-money.ykz')
						}
					})
				} catch (e) {
					return true
				}
				return false
			},
			getUsdt_back() {
				if (!this.bankInfo.web_bank_number) return ''
				if (this.bankInfo.web_bank_number.length <= 4)
					return this.bankInfo.web_bank_number + '**********' + this.bankInfo.web_bank_number
				else
					return this.bankInfo.web_bank_number.substring(0, 4) + '**********' + this.bankInfo.web_bank_number
						.slice(-4)
			}
		},
		methods: {
			onClicktokefu(){
				uni.switchTab({
					url: '/pages/kefu/kefu'
				})
			},
			onClickDetail(type) {
				uni.navigateTo({
					url: '/pages/account/account-detail?pay_type=' + type
				})
			},
			maskClick() {
				this.typeShow = true
			},
			onClickCancle() {
				this.$refs.popup.close()
			},
			onClickOpen() {
				this.$refs.popup.open()
				this.typeShow = false
			},
			onClickCurrentIndex(item, index) {
				// this.getUserIndex()
				this.payName = item.pay_name
				this.binded = item.isbind
				if (item.pay_name == 'BTC') {
					this.formData.pay_type = 'BTC'
				} else if (item.pay_name == 'ETH') {
					this.formData.pay_type = 'ETH'
				} else {
					this.formData.pay_type = item.pay_name == this.$t('withdraw-money.yhk') ? '银行卡' : 'USDT';

				}
				this.$refs.popup.close()
				this.typeShow = true
				this.payIndex = index
				this.usdtAddress = item.address
			},
			recharge_config() {
				recharge_config().then(({
					data
				}) => {
					console.log('------中-----', data)
					this.typeList = []
					const bank = data.bank
					if (data.bank.web_bank_number) {
						bank.isbind = true
					} else {
						bank.isbind = false
					}
					bank.pay_type = this.$t('withdraw-money.yhk')
					bank.pay_name = this.$t('withdraw-money.yhk')
					this.bankInfo = bank
					this.typeList.push(bank)
					if (data.usdt) {
						Object.keys(data.usdt).forEach(key => {

							this.typeList.push({
								pay_type: 'USDT',
								pay_name: key,
								isbind: data.usdt[key],
								address: data.usdt[key]
							});
						});
					}
					this.typeList.push({
						pay_type: 'ETH',
						pay_name: 'ETH'
					})
					this.typeList.push({
						pay_type: 'BTC',
						pay_name: 'BTC'
					})
					console.log('=----------', this.typeList)
				})
			},
			switchCurrency(currency) {
				this.activeCurrency = currency;
			},
			copyAddress(address) {
				uni.setClipboardData({
					data: address,
					success: () => {
						uni.showToast({
							title: this.$t('recharge.fzcg'),
							icon: 'success'
						});
					}
				});
			},
			qrCode(res) {
				// console.log('二维码生成结果', res);
			},
			previewImg() {
				uni.previewImage({
					urls: [this.uploadedImage]
				})
			},
			// 选择图片
			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						this.uploadedImage = res.tempFilePaths[0];
					}
				});
			},
			// 提交充值信息
			async submitRecharge() {
				if (!this.formData.pay_type) {
					uni.showToast({
						title: '请选择入金方式！',
						icon: 'none'
					});
					return;
				}
				// 验证输入
				if (!this.rechargeAmount) {
					uni.showToast({
						title: this.$t('recharge.qsrje'),
						icon: 'none'
					});
					return;
				}

				if (!this.uploadedImage) {
					uni.showToast({
						title: this.$t('recharge.qscpz'),
						icon: 'none'
					});
					return;
				}

				// 显示加载提示
				uni.showLoading({
					title: this.$t('recharge.tjz')
				});

				try {
					// 上传凭证图片
					const uploadResult = await updateFile(this.uploadedImage);

					if (uploadResult.status === 1) {
						// 模拟提交充值信息到服务器
						// 这里应该调用实际的API接口
						this.formData.money = this.rechargeAmount
						this.formData.reg_img = uploadResult.data.content_all
						recharge_apply(this.formData).then(({
							data
						}) => {
							uni.hideLoading();

							// 重置表单
							this.rechargeAmount = '';
							this.uploadedImage = '';
							uni.showToast({
								title: this.$t('recharge.tjcg'),
								icon: 'success'
							});
						})



					} else {
						throw new Error(uploadResult.massage || this.$t('recharge.scsb'));
					}
				} catch (error) {
					uni.hideLoading();
					uni.showToast({
						title: error.message || this.$t('recharge.tjsb'),
						icon: 'none'
					});
				}
			}
		}
	}
</script>

<style lang="less">
	.recharge-container {
		background-color: #f6f7fb;
		min-height: 100vh;

		.recharge-content {
			padding: 30rpx;

			.address-section {
				background-color: #fff;
				border-radius: 16rpx;
				padding: 30rpx;
				margin-bottom: 30rpx;

				.section-title {
					font-size: 32rpx;
					font-weight: 500;
					color: #222;
					margin-bottom: 30rpx;
				}

				.currency-tabs {
					display: flex;
					margin-bottom: 40rpx;
					border-bottom: 1px solid #f0f0f0;

					.tab-item {
						flex: 1;
						text-align: center;
						padding: 20rpx 0;
						font-size: 28rpx;
						color: #a8a9ac;
						position: relative;

						&.active {
							color: #1150c2;
							font-weight: 500;

							&::after {
								content: '';
								position: absolute;
								bottom: 0;
								left: 50%;
								transform: translateX(-50%);
								width: 60rpx;
								height: 6rpx;
								background-color: #1150c2;
								border-radius: 3rpx;
							}
						}
					}
				}

				.address-info {
					.address-title {
						font-size: 28rpx;
						color: #a8a9ac;
						margin-bottom: 20rpx;
					}

					.address-value {
						font-size: 24rpx;
						color: #222;
						background-color: #f6f7fb;
						padding: 20rpx;
						border-radius: 12rpx;
						margin-bottom: 30rpx;
						word-break: break-all;
						line-height: 1.5;
						position: relative;

						.copy-text {
							color: #1150c2;
							margin-left: 10rpx;
						}
					}

					.tki-qrcode {
						display: flex;
						justify-content: center;
					}
				}
			}

			.form-section {
				background-color: #fff;
				border-radius: 16rpx;
				padding: 30rpx;
				margin-bottom: 30rpx;

				.section-title {
					font-size: 32rpx;
					font-weight: 500;
					color: #222;
					margin-bottom: 30rpx;
				}

				.form-item {
					margin-bottom: 30rpx;

					.form-label {
						font-size: 28rpx;
						color: #222;
						margin-bottom: 20rpx;
					}

					.form-input {
						height: 80rpx;
						background-color: #f6f7fb;
						border-radius: 12rpx;
						padding: 0 20rpx;
						font-size: 28rpx;
					}

					.upload-container {
						.upload-box {
							height: 250rpx;
							background-color: #f6f7fb;
							border-radius: 12rpx;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;

							.upload-icon {
								width: 150rpx;
								height: 150rpx;
								line-height: 150rpx;
								border: 2rpx dashed #ccc;
								text-align: center;
								color: #ccc;
								font-size: 60rpx;
							}

							.upload-text {
								font-size: 28rpx;
								color: #a8a9ac;
								margin-top: 10rpx;
							}
						}

						.preview-box {
							position: relative;

							.preview-image {
								width: 100%;
								height: 300rpx;
								border-radius: 12rpx;
							}

							.reupload-btn {
								position: absolute;
								bottom: 20rpx;
								left: 50%;
								transform: translateX(-50%);
								background-color: rgba(0, 0, 0, 0.6);
								color: #fff;
								padding: 10rpx 20rpx;
								border-radius: 30rpx;
								font-size: 24rpx;
							}
						}
					}
				}

				.submit-btn {
					background-color: #1150c2;
					color: #fff;
					border: none;
					border-radius: 12rpx;
					height: 80rpx;
					font-size: 32rpx;
					font-weight: 500;
				}
			}

			.notice-section {
				background-color: #fff;
				border-radius: 16rpx;
				padding: 30rpx;

				.section-title {
					font-size: 32rpx;
					font-weight: 500;
					color: #222;
					margin-bottom: 30rpx;
				}

				.notice-content {
					.notice-item {
						font-size: 24rpx;
						color: #a8a9ac;
						margin-bottom: 20rpx;
						line-height: 1.6;

						&:last-child {
							margin-bottom: 0;
						}
					}
				}
			}
		}
	}

	.tui-list {
		display: flex;
		flex-direction: column;
		width: 100%;

		.tui-listItem {
			width: 100%;
			font-size: 30rpx;
			background-color: #fff;
			border-radius: 13px;
			padding: 30rpx;
			box-sizing: border-box;
			display: flex;

			display: flex;

			align-items: center;
			justify-content: space-between;

			.language {
				color: #a8a9ac;
				font-size: 30rpx;
				padding-right: 20rpx;
			}

			.tui-rightIcon {
				width: 6px;
				height: 11px;
			}

			.title {
				font-size: 30rpx;
				color: #222;
			}

			.logo {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
		}
	}

	.tui-popupContent {
		border-radius: 24px 24px 0 0;
		padding: 48rpx 0 0;
		background-color: #fff;

		.p-26 {
			padding: 0 32rpx;
		}

		.tui-content {
			margin-top: 40rpx;
			padding-bottom: 100rpx;

			.tui-contentItem {
				height: 100rpx;
				font-size: 28rpx;
				color: #222;
				display: flex;
				align-items: center;
				padding: 0 32rpx;
			}
		}

		.title {
			font-size: 32rpx;
			font-weight: 800;
			color: #222;
		}

		.cancle {
			color: #a8a9ac;
			font-size: 28rpx;
		}
	}

	.uni-forms-item {
		margin-bottom: 0 !important;
		margin-left: 30rpx;
	}
</style>