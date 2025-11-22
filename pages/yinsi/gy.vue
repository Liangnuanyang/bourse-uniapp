<template>
	<view class="">
		<guo-headerTitle :title="$t('home.gywm')"></guo-headerTitle>
		<view v-if="langName!='English'" class="text-des-color text-md text-align-justify tui-header" style="line-height: 24px;">
			<p
				style="padding: 0px; margin-top: 0px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102); font-family: ">
				中国储备粮管理集团有限公司
			</p>
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102);">
				国务院国资委管理的中央企业
				中国储备粮管理集团有限公司（简称“中储粮集团公司”），是经国务院批准组建的涉及国家安全和国民经济命脉的国有大型重要骨干企业
				[7]。中储粮集团公司受国务院委托，负责中央储备粮棉油的经营管理，并接受国家委托执行粮棉油购销调存等调控任务。公司实行自主经营、自负盈亏，确保国有资产保值增值。 [7]邓亦武担任法定代表人及董事长。
				2000年，党中央、国务院作出重大决策，建立中央储备粮垂直管理体系。 [46]2000年5月18日，中国储备粮管理总公司正式成立，具体负责中央储备粮的经营管理，实行政企分开、费用包干、自主经营、自负盈亏
				[8]。2001年，国务院对中储粮总公司提出“三个严格”“两个确保”的管理要求 [8]。中储粮总公司按照国务院要求，自2005年开始成为粮食最低收购价政策的执行主体，维护种粮农民利益和粮食市场稳定
				[8]。2008年，该企业成立中储粮油脂公司 [8]。2012年，中储粮总公司成立董事会，由现行总经理“一把手负责制”改为董事会体制 [8]。2015年，公司在所有政策性粮食收购领域全面应用“一卡通”系统
				[8]。2017年底，中国储备粮管理总公司正式更名为中国储备粮管理集团有限公司 [8]。成为57家在京中央企业中第一家完成总部改制的企业 。 
			</p>
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102); ">
				 中储粮（雄安）粮油交易中心有限公司（以下简称交易中心）于2023年10月注册成立，是中储粮集团公司积极响应党中央关于雄安新区建设和京津冀协同发展战略专门组建的专业化全资子公司，注册资本1亿元。  
			</p>
			<p style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102);">
				中储粮集团公司是经国务院批准组建的涉及国家安全和国民经济命脉的国有大型重要骨干企业，具体负责中央储备粮棉油的经营管理，同时接受国家委托执行粮棉油购销调存等调控任务。集团公司紧紧围绕“确保中央储备粮数量真实、质量良好，确保国家急需时调得动、用得上”的职责使命，始终胸怀粮食安全这一“国之大者”，坚决贯彻落实党中央、国务院决策部署，加强党的领导，完善治理体系，强化科技创新，弘扬信实文化，传承“宁流千滴汗，不坏一粒粮”的储粮报国精神，有效发挥了保障粮食安全“压舱石”、服务调控“主力军”、保供稳链“顶梁柱”作用，为中国式现代化建设提供坚实粮食储备安全保障。
			</p>
			<p style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102); ">
				交易中心牢牢把握集团公司新时代“四个坚持”新要求，聚焦“服从国家调控、服务轮换购销、服务广大客户”职能定位，以服务国家储备粮油轮换购销为核心，以建设创新、绿色、畅通的粮油生态圈为己任，以建成智慧、协调、共享的农粮产业数智交易服务平台为目标，用诚信赢得信任，用笃实培育果实，用“信实”精神共同谱写美好愿景，助力保障国家粮食安全和农粮产业供应链安全。
			</p>
		</view>
		<view v-else class="text-des-color text-md text-align-justify tui-header" style="line-height: 24px;">
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102);">
				China Grain Reserves Group Ltd.
			</p>
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102);">
				A Central State-Owned Enterprise under the State-owned Assets Supervision and Administration Commission (SASAC) of the State Council
			</p>
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102); ">
				China Grain Reserves Group Ltd. (hereinafter referred to as “CGRG” or the “Group”), is a major state-owned backbone enterprise of strategic importance to national security and the lifeline of the national economy. It was established with the approval of the State Council. Entrusted by the State Council, the Group is responsible for the operation and management of central grain, cotton, and oil reserves, and carries out state-assigned regulatory tasks including procurement, sales, stock rotation, and storage adjustments of grain, cotton, and oil. The Group operates independently and assumes sole responsibility for its own profits and losses, ensuring the preservation and appreciation of state-owned assets.
				Mr. Deng Yiwu serves as the legal representative and Chairman of the Board.
			</p>
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102);">
				In 2000, the CPC Central Committee and the State Council made a major decision to establish a vertically managed central grain reserve system. On May 18, 2000, China Grain Reserves Corporation was officially established, responsible for the centralized operation and management of central grain reserves, implementing the separation of government and enterprise functions, fixed-cost management, independent operation, and independent financial responsibility.
				In 2001, the State Council set forth the management requirements of “three stricts” and “two guarantees” for the Corporation. Following these requirements, the Corporation became the main executor of the minimum purchase price policy for grain in 2005, safeguarding the interests of grain-growing farmers and maintaining grain market stability.
			</p>
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102);">
				In 2008, the Group established China Grain Reserves Oils & Fats Company.
				In 2012, the Group introduced a board governance system, replacing the previous general manager responsibility system.
				In 2015, the Group implemented the “One-Card System” across all policy-based grain procurement operations.
				At the end of 2017, China Grain Reserves Corporation was officially renamed China Grain Reserves Group Ltd., becoming the first of the 57 central enterprises headquartered in Beijing to complete headquarters restructuring.
			</p>
			
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102); font-family: ">
				China Grain Reserves (Xiong’an) Grain and Oil Trading Center Co., Ltd. (hereinafter referred to as the “Trading Center”) was established in October 2023. It is a specialized wholly-owned subsidiary of China Grain Reserves Group Ltd., formed in response to the CPC Central Committee’s strategic directives on the construction of Xiong’an New Area and the coordinated development of the Beijing-Tianjin-Hebei region. The company has a registered capital of RMB 100 million.
				
				CGRG is a major state-owned backbone enterprise established with the approval of the State Council, responsible for operating and managing central grain, cotton, and oil reserves, and entrusted by the state to perform regulatory tasks such as procurement, sales, and stock rotation. The Group remains firmly committed to its core mission of ensuring “accurate reserve quantities, reliable quality, and the ability to dispatch reserves whenever the state needs them.” With national food security as its paramount priority, the Group resolutely implements the decisions of the CPC Central Committee and the State Council, strengthens Party leadership, improves governance, enhances technological innovation, promotes a culture of integrity and reliability, and carries forward the spirit of “sweating a thousand drops rather than letting a single grain spoil.” It has effectively fulfilled its role as the “ballast stone” of national food security, the “main force” in regulatory operations, and the “pillar” in supply assurance and stable industrial chains, providing strong support for China’s modernization through secure grain reserves.
			</p>
			<p
				style="padding: 0px; margin-top: 10px; margin-bottom: 0px; text-align: justify; color: rgb(102, 102, 102); font-family: ">
				The Trading Center fully adheres to the Group’s “Four Adherences” for the new era and focuses on its functional positioning of “serving national regulation, supporting reserve stock rotation, and serving broad customer needs.” Centering on services for national grain and oil reserve rotation, the Trading Center is committed to building an innovative, green, and efficient grain and oil ecosystem. Its goal is to establish an intelligent, coordinated, and shared digital trading service platform for the agricultural and grain industries. With integrity building trust and diligence bearing fruit, the Trading Center embraces the Group’s spirit of “faith and reliability,” striving to realize a shared vision while contributing to national food security and the resilience of agricultural and grain supply chains.
			</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                langName: uni.getStorageSync('LangName')
			};
		}
	}
</script>

<style lang="less">
	.tui-header {
		padding: 0 30rpx;
	}

	.text-des-color {
		font-size: 14px;
		color: #a8a9ac;
		line-height: 24px;
		text-align: justify;
	}
</style>