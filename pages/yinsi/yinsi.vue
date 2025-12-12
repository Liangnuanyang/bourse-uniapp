<template>
	<view class="">
		<guo-headerTitle :title="$t('yinsi')"></guo-headerTitle>
		<view v-if="LangName!='English'" class="text-des-color text-md text-align-justify tui-header" style="line-height: 24px;">
			<p>在此特别提醒您（用户）在注册成为用户之前，请认真阅读本《隐私协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。本协议约定
				我司与用户之间关于软件或服务的权利义务。“用户”是指注册、登录、使用本服务的个人。本协议可由本公司随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在本公司产品中查阅最新版协议条款。在修改协议条款后，如果用户不接受修改后的条款，请立即停止使用本公司提供的服务，用户继续使用服务将被视为接受修改后的协议。
			</p>
			<p>第一 数据恢复信息的保密</p>
			<p>您在使用本公司提供的数据恢复产品或服务时，用户须允许本公司使用该硬件设备包括但限于硬盘中的任何信息用于数据恢复，我司保证该信息的保密性，数据恢复之后，不论用户是否拷贝数据，我司都不留下该设备中任何数据的备份。
			</p>
			<p>第二 个人信息的收集</p>
			<p>请您知悉，本公司收集您的以下个人信息是出于满足为您提供服务的需要以及改善产品和服务的目的，本公司十分重视对您隐私的保护。在本公司收集您的信息时，将严格遵守“合法、正当、必要”的原则。且您知悉，若您不提供本公司为您提供服务所需的相关信息，您的使用体验和效果可能因此而受到影响。考虑到本公司提供服务的相关性，您已同意，本公司将会收集您使用产品和服务时输入的或者以其他方式提供给我们的信息：
			</p>
			<p>1 移动设备型号、设备名称、唯一标识符、浏览器类型、系统语言、操作系统版本、应用程序版本、WIFI网络环境、日志信息。</p>
			<p>2 在您注册或激活登录账户时，将收集您的个人注册信息，包括手机号、用户名、密码、用户头像、昵称。</p>
			<p>3 服务过程中，我们会记录您的地理位置信息。</p>
			<p>上述信息的收集在法律法规准许的前提下，本公司有权做任何变动，恕不另行通知。</p>
			<p>第三 数据信息的管理</p>
			<p>1 本公司在中华人民共和国境内收集和产生的用户个人信息存储在中华人民共和国境内的服务器上。若确需向境外传输您的个人信息，将在事前获得您的授权，且按照有关法律法规政策的要求进行跨境数据传输，并对您的个人信息履行保密义务。
			</p>
			<p>2 对您的信息存储于本公司服务器期间，本公司将全力维护信息的安全，并有效确保信息的合理使用。</p>
			<p>3 未经过您的事先同意，我们不会将您的信息向第三方进行公开或转让，除非以下情形：</p>
			<p>（1） 事先获得您明确的同意或授权；</p>
			<p>（2） 与国家安全、国防安全有关的；</p>
			<p>（3） 与公共安全、公共卫生、重大公共利益有关的；</p>
			<p>（4） 与犯罪侦查、起诉、审判和判决执行等有关的；</p>
			<p>（5） 所收集的个人信息是您自行向社会公众公开的；</p>
			<p>（6） 从合法公开披露的信息中收集您的个人信息，如合法的新闻报道，政府信息公开等渠道；</p>
			<p>（7） 与本公司的关联方、合作伙伴及第三方服务供应商共享，但仅基于基本信息的共享；</p>
			<p>（8） 法律法规规定的其他情形。</p>
			<p>第四 个人隐私的保护</p>
			<p>1、如果本公司发现或收到他人举报或投诉用户违反本隐私协议或违反使用协议约定的，本公司有权不经通知随时对相关内容，包括但不限于用户资料、发贴记录进行审查、删除，并视情节轻重对违规账号处以包括但不限于警告、账号封禁
				、设备封禁 、功能封禁 的处罚，且通知用户处理结果。</p>
			<p>2、因违反用户协议被封禁的用户，可以自行与本公司联系。其中，被实施功能封禁的用户会在封禁期届满后自动恢复被封禁功能。被封禁用户可提交申诉，本公司将对申诉进行审查，并自行合理判断决定是否变更处罚措施。</p>
			<p>3、用户理解并同意，本公司有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应承担由此而产生的一切法律责任。
			</p>
			<p>4、用户理解并同意，因用户违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当赔偿本公司与合作公司、关联公司，并使之免受损害。</p>
			<p>第五 用户发布信息须知</p>
			<p>使用本公司提供的产品或服务过程当中，可能涉及用户自身信息的发布，在此约定：</p>
			<p>用户不得制作、上传、复制、发布、传播如下法律、法规和政策禁止的内容：</p>
			<p>(1) 反对宪法所确定的基本原则的；</p>
			<p>(2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p>
			<p>(3) 损害国家荣誉和利益的；</p>
			<p>(4) 煊动民族仇恨、民族歧视，破坏民族团结的；</p>
			<p>(5) 破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
			<p>(6) 散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
			<p>(7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
			<p>(8) 侮辱或者诽谤他人，侵害他人合法权益的；</p>
			<p>(9) 含有法律、行政法规禁止的其他内容的信息。</p>
			<p>用户亦不得制作、上传、复制、发布、传播如下干扰“服务”正常运营，以及侵犯其他用户或第三方合法权益的内容：</p>
			<p>(1) 含有明示性或性暗示的；</p>
			<p>(2) 含有辱骂、恐吓、威胁内容的；</p>
			<p>(3) 含有骚扰、垃圾广告、恶意信息、诱骗信息的；</p>
			<p>(4) 涉及他人隐私、个人信息或资料的；</p>
			<p>(5) 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；</p>
			<p>(6) 含有其他干扰本服务正常运营和侵犯其他用户或第三方合法权益内容的信息。</p>
			<p>第六 其他须知</p>
			<p>1、本公司郑重提醒用户注意本协议中免除责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险。未成年人应在法定监护人的陪同下阅读本协议。</p>
			<p>2、本协议的效力、解释及纠纷的解决，适用于中华人民共和国大陆法律。若用户和本公司之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户同意将纠纷或争议提交本公司住所地有管辖权的人民法院管辖。</p>
			<p>3、本协议的任何条款无论因何种原因无效或不具可执行性，其余条款仍有效，对双方具有约束力。</p>
			<p>4、 用户须确认拥有需要恢复数据的设备和数据的所有权；或确保经过设备或数据所有者本人授权；否则我司有权随时终止数据恢复服务，并保留追究该用户法律责任的权力；</p>
			<p>本《隐私协议》版权由本公司所有，并保留一切对本《隐私协议》解释的权利。</p>
			<p>如您与我司就本《隐私协议》内容或其执行发生任何争议，双方应进行友好协商；协商不成时，任何一方均可向我司住所地有管辖权的人民法院提起诉讼。</p>
			<p>本《隐私协议》的各项条款具有可分割性，如果某一条款被适用法律认定为无效，则其他条款不受影响，应继续有效并执行。</p>
			<p>至此，您肯定已经详细阅读并已理解本《隐私协议》，并同意严格遵守各条款和条件。</p>
			<p><br></p>
		</view>
		<view v-else class="text-des-color text-md text-align-justify tui-header" style="line-height: 24px;">
			<p>Hereby we especially remind you (the User) to carefully read this Privacy Agreement (hereinafter referred to as the "Agreement") before registering as a user, to ensure that you fully understand all the terms of this Agreement. Please read it carefully and choose to accept or reject this Agreement. Your acts of registration, login, use, etc. shall be deemed as acceptance of this Agreement, and you agree to be bound by all terms of this Agreement. This Agreement stipulates the rights and obligations between our company and users regarding software or services. "User" refers to individuals who register, log in and use this service. This Agreement may be updated by our company at any time. Once the updated agreement terms are published, they shall supersede the original agreement terms without further notice. Users can check the latest version of the agreement terms in our company's products. After modifying the agreement terms, if users do not accept the modified terms, please stop using the services provided by our company immediately. Continued use of the services will be deemed as acceptance of the modified agreement.</p>
			<p>Article 1 Confidentiality of Data Recovery Information</p>
			<p>When you use the data recovery products or services provided by our company, users must allow our company to use any information on the hardware device, including but not limited to hard disk information, for data recovery. Our company guarantees the confidentiality of this information. After data recovery, regardless of whether the user copies the data, our company will not leave any data backup on the device.</p>
			<p>Article 2 Collection of Personal Information</p>
			<p>Please be aware that our company collects the following personal information for the purpose of meeting your service needs and improving products and services. Our company attaches great importance to protecting your privacy. When collecting your information, our company will strictly abide by the principle of "legality, legitimacy, and necessity." You should also be aware that if you do not provide the relevant information required for our company to provide services, your user experience and effectiveness may be affected. Considering the relevance of services provided by our company, you have agreed that our company will collect information you input or otherwise provide to us when using products and services:</p>
			<p>1. Mobile device model, device name, unique identifier, browser type, system language, operating system version, application version, WIFI network environment, log information.</p>
			<p>2. When you register or activate your account, we will collect your personal registration information, including phone number, username, password, user avatar, nickname.</p>
			<p>3. During the service process, we will record your geographical location information.</p>
			<p>Under the premise permitted by laws and regulations, our company has the right to make any changes to the collection of the above information without further notice.</p>
			<p>Article 3 Management of Data Information</p>
			<p>1. The personal information of users collected and generated by our company within the territory of the People's Republic of China is stored on servers within the territory of the People's Republic of China. If it is necessary to transmit your personal information overseas, we will obtain your authorization in advance and conduct cross-border data transmission in accordance with the requirements of relevant laws, regulations and policies, and fulfill our confidentiality obligations for your personal information.</p>
			<p>2. During the period when your information is stored on our company's servers, our company will fully maintain the security of the information and effectively ensure the reasonable use of the information.</p>
			<p>3. Without your prior consent, we will not disclose or transfer your information to third parties, except in the following circumstances:</p>
			<p>(1) Prior express consent or authorization from you;</p>
			<p>(2) Related to national security and defense security;</p>
			<p>(3) Related to public security, public health, and major public interests;</p>
			<p>(4) Related to criminal investigation, prosecution, trial and judgment execution;</p>
			<p>(5) The collected personal information is publicly disclosed by you to the public;</p>
			<p>(6) Collect your personal information from legally disclosed information, such as legal news reports and government information disclosure channels;</p>
			<p>(7) Shared with affiliates, partners and third-party service providers of our company, but only based on basic information sharing;</p>
			<p>(8) Other circumstances stipulated by laws and regulations.</p>
			<p>Article 4 Protection of Personal Privacy</p>
			<p>1. If our company discovers or receives reports or complaints from others that users violate this privacy agreement or violate the usage agreement, our company has the right to review and delete relevant content at any time without notice, including but not limited to user information and posting records, and impose penalties on violation accounts according to the severity of the situation, including but not limited to warnings, account blocking, device blocking, and function blocking, and notify users of the processing results.</p>
			<p>2. Users whose user agreements have been blocked can contact our company directly. Among them, users who have been subject to function blocking will automatically restore the blocked functions after the blocking period expires. Blocked users can submit appeals. Our company will review the appeals and make reasonable judgments to decide whether to change the penalty measures.</p>
			<p>3. Users understand and agree that our company has the right to reasonably judge and punish behaviors that violate relevant laws and regulations or this agreement, take appropriate legal actions against any illegal or disciplinary users, and save relevant information and report to relevant departments in accordance with laws and regulations. Users shall bear all legal responsibilities arising therefrom.</p>
			<p>4. Users understand and agree that if any third party claims any compensation, claim or loss due to users violating this agreement, including reasonable attorney fees, users shall compensate our company and partner companies, affiliated companies, and indemnify them from damage.</p>
			<p>Article 5 User Posting Information Notice</p>
			<p>During the use of products or services provided by our company, it may involve the release of users' own information. Herein it is agreed:</p>
			<p>Users shall not produce, upload, copy, publish or disseminate the following content prohibited by laws, regulations and policies:</p>
			<p>(1) Opposing the basic principles established by the Constitution;</p>
			<p>(2) Endangering national security, disclosing state secrets, subverting state power, and undermining national unity;</p>
			<p>(3) Damaging the honor and interests of the country;</p>
			<p>(4) Inciting ethnic hatred, ethnic discrimination, and undermining ethnic unity;</p>
			<p>(5) Undermining the state's religious policy and promoting cults and feudal superstitions;</p>
			<p>(6) Spreading rumors, disrupting social order, and undermining social stability;</p>
			<p>(7) Disseminating obscenity, pornography, gambling, violence, murder, terror or inciting crime;</p>
			<p>(8) Insulting or slandering others and infringing upon the legitimate rights and interests of others;</p>
			<p>(9) Information containing other content prohibited by laws and administrative regulations.</p>
			<p>Users shall also not produce, upload, copy, publish or disseminate content that interferes with the normal operation of the "service" and infringes upon the legitimate rights and interests of other users or third parties:</p>
			<p>(1) Containing explicit or sexual implications;</p>
			<p>(2) Containing abusive, threatening or intimidating content;</p>
			<p>(3) Containing harassment, spam, malicious information, or deceptive information;</p>
			<p>(4) Involving the privacy, personal information or data of others;</p>
			<p>(5) Infringing upon the legitimate rights of others, such as reputation rights, portrait rights, intellectual property rights, and trade secrets;</p>
			<p>(6) Containing other information that interferes with the normal operation of this service and infringes upon the legitimate rights and interests of other users or third parties.</p>
			<p>Article 6 Other Notices</p>
			<p>1. Our company solemnly reminds users to pay attention to the clauses in this Agreement that exempt liability and restrict user rights. Please read them carefully and consider the risks independently. Minors should read this Agreement under the accompaniment of their legal guardians.</p>
			<p>2. The validity, interpretation and resolution of disputes of this Agreement shall be governed by the laws of the mainland of the People's Republic of China. If any dispute or controversy occurs between users and our company, it should first be resolved through friendly consultation. If consultation fails, users agree to submit the dispute or controversy to the people's court with jurisdiction at our company's domicile.</p>
			<p>3. Regardless of the reason for which any clause of this Agreement is invalid or unenforceable, the remaining clauses shall remain valid and binding on both parties.</p>
			<p>4. Users must confirm that they own the equipment and data that need to be recovered, or ensure that they have been authorized by the owner of the equipment or data. Otherwise, our company has the right to terminate the data recovery service at any time and reserve the right to pursue the user's legal responsibility.</p>
			<p>The copyright of this Privacy Agreement belongs to our company, and we reserve all rights to interpret this Privacy Agreement.</p>
			<p>If you have any dispute with our company regarding the content or implementation of this Privacy Agreement, both parties shall conduct friendly consultations. If the consultation fails, either party may file a lawsuit with the people's court with jurisdiction at our company's domicile.</p>
			<p>All clauses of this Privacy Agreement are severable. If any clause is determined to be invalid by applicable law, the other clauses shall not be affected and shall continue to be valid and enforced.</p>
			<p>By now, you must have read and understood this Privacy Agreement in detail and agree to strictly abide by all terms and conditions.</p>
			<p><br></p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                  LangName: uni.getStorageSync('LangName')
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