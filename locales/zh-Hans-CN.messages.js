/**
 * Created by wyf on 2017/2/27.
 */
/*枚举国际化*/
const EnumsMessages = {
    /*accountType 账户类型*/
    "accountType.self":"自身账户",
    "accountType.belongOrganization":"所属组织账户",
    "accountType.rootOrganization":"根组织的账户",
    /*staffType 员工类型*/
    "staffType.admin":"管理员",
    "staffType.normal":"普通人员",
    /*可激活产品配置业务分类*/
    "businessClass.DTH":"DTH",
    "businessClass.DTT":"DTT",
    "businessClass.TV":"TV",
    /*客户下用户状态*/
    "subscriberStatus.invalid":"无效",
    "subscriberStatus.valid":"有效",
    "subscriberStatus.pause":"报停",
    "subscriberStatus.punishStop":"罚停",
    /*客户查询条件*/
    "querySubscribersType.smartCard":"智能卡号",
    "querySubscribersType.phone":"移动电话",
    /*额度销售类型*/
    "partnerBalanceSalesType.all":"全部",
    "partnerBalanceSalesType.electronicCardSale":"电子卡销售",
    "partnerBalanceSalesType.rechargeForCustomer":"直充",
};

const ModalAlert = {
    "common.modalAlert.onOkText":"确定"
};

const CheckCode = {
    "common.checkCode.input.placeHolder":"请输入验证码",
    "common.checkCode.input.checkCode":"校验码",
    "common.checkCode.input.checkCodeRule":"校验码不能为空",
    "common.checkCode.input.checkCodeError":"校验码错误",
};

const Login = {
    "common.login.title": "欢迎登录",
    "common.login.username.label": "用户名",
    "common.login.username.vtype": "用户名必填！",
    "common.login.password.label": "密码",
    "common.login.password.vtype": "密码必填！",
    "common.login.remember": "记住密码",
    "common.login.forgotPass": "忘记密码",
    "common.login.login": "登录"
};

const HomePage = {
    "homePage.menuList.dealer": "代理商管理",
    "homePage.menuList.dealerOrganization": "代理商组织管理",
    "homePage.menuList.subDealer": "下级代理商管理",
    "homePage.menuList.customer": "客户服务",
    "homePage.menuList.newSubscriberActive": "新用户激活",
    "homePage.menuList.customerService": "客户服务",
    "homePage.menuList.cardSale": "电子卡销售",
    "homePage.menuList.report": "查询统计",
    "homePage.menuList.balanceChange": "额度变更查询",
    "homePage.menuList.balanceSale": "额度销售查询",
    "homePage.menuList.activationSubscriber": "激活用户查询",
};

const UserInfo = {
    "common.userInfo.role": "角色",
    "common.userInfo.partnerAccountNumber": "账户",
    "common.userInfo.balance": "余额",
    "common.userInfo.balance.balanceTitle": "查看余额",
    "common.userInfo.partnerStaffName": "名称",
    "common.userInfo.partnerStaffCode": "编码",
    "common.userInfo.partnerName": "代理商名称",
    "common.userInfo.partnerCode": "代理商编码",
    "common.userInfo.modifyPassword": "修改登录密码",
    "common.userInfo.modifyPin": "修改支付密码",
    "common.userInfo.logout": "退出",
};

const ModifyPass = {
    "common.modifyPass.loginPass": "修改登录密码",
    "common.modifyPass.pinPass": "修改支付密码",
    "common.modifyPass.oldPass": "旧密码",
    "common.modifyPass.oldPassRequired": "旧密码不能为空",
    "common.modifyPass.newPass": "新密码",
    "common.modifyPass.notEqualToOld": "新密码不能与旧密码相同",
    "common.modifyPass.newPassRequired": "新密码不能为空",
    "common.modifyPass.newLoginPassLength": "新密码长度不能小于8位",
    "common.modifyPass.newPinPassLength": "新密码长度不能小于6位",
    "common.modifyPass.newPassRule": "新密码必须由数字和字母组成",
    "common.modifyPass.confirmPass": "确认密码",
    "common.modifyPass.confirmPassRequired": "确认密码不能为空",
    "common.modifyPass.notEqualToNew": "确认密码不等于新密码",
};

const Logout = {
    "common.homeHeader.logout.title":"提示",
    "common.homeHeader.logout.content":"确定退出登录？",
    "common.homeHeader.logout.okText":"确定",
    "common.homeHeader.logout.cancelText":"取消"
};

const DealerOrganization = {
    "dealerOrganization.dealerOrganization.dealer":"代理商管理",
    "dealerOrganization.dealerOrganization.title":"代理商组织管理",
};

const OrganizationInfo = {
    "dealer.dealerOrganization.organizationInfo.title":"组织信息",
    "dealer.dealerOrganization.organizationInfo.addButton":"新增",
    "dealer.dealerOrganization.organizationInfo.modifyButton":"修改",
    "dealer.dealerOrganization.organizationInfo.rechargeButton":"充值",
    "dealer.dealerOrganization.organizationInfo.code":"组织编码",
    "dealer.dealerOrganization.organizationInfo.name":"组织名称",
    "dealer.dealerOrganization.organizationInfo.balance":"账户余额",
    "dealer.dealerOrganization.organizationInfo.parentName":"上级组织",
};

const OrganizationTreeGrid = {
    "dealer.dealerOrganization.organizationTreeGrid.name":"名称",
    "dealer.dealerOrganization.organizationTreeGrid.code":"编码",
    "dealer.dealerOrganization.organizationTreeGrid.balance":"账户余额",
};

const OrganizationModal = {
    "dealer.dealerOrganization.organizationModal.create":"新增组织",
    "dealer.dealerOrganization.organizationModal.modify":"修改组织",
    "dealer.dealerOrganization.organizationModal.parentName":"上级组织",
    "dealer.dealerOrganization.organizationModal.name":"组织名称",
    "dealer.dealerOrganization.organizationModal.nameRule":"组织名称不能为空",
    "dealer.dealerOrganization.organizationModal.code":"组织编码",
    "dealer.dealerOrganization.organizationModal.remark":"备注",
};

const OrganizationStock  ={
    "dealer.dealerOrganization.organizationStock.title":"仓库信息",
    "dealer.dealerOrganization.organizationStock.modifyButton":"修改",
    "dealer.dealerOrganization.organizationStock.transferButton":"调拨"
};

const OrganizationStockList = {
    "dealer.dealerOrganization.organizationStock.stockList.resourceSpecClassName":"资源规格分类名称",
    "dealer.dealerOrganization.organizationStock.stockList.resourceNumber":"当前组织数量",
    "dealer.dealerOrganization.organizationStock.stockList.totalResourceNumber":"代理商总库存量",
};

const OrganizationStockModal = {
    "dealer.dealerOrganization.organizationStock.stockModal.title":"修改仓库",
    "dealer.dealerOrganization.organizationStock.stockModal.currentOrganization":"当前组织",
    "dealer.dealerOrganization.organizationStock.stockModal.resourceSpecClassName":"资源规格分类名称",
    "dealer.dealerOrganization.organizationStock.stockModal.resourceNumber":"原库存量",
    "dealer.dealerOrganization.organizationStock.stockModal.currentResourceNumber":"现有库存量",
    "dealer.dealerOrganization.organizationStock.stockModal.changeNumber":"调整数量",
    "dealer.dealerOrganization.organizationStock.stockModal.successTitle":"成功提示",
    "dealer.dealerOrganization.organizationStock.stockModal.successContent":"修改成功！",
};

const OrganizationTransferModal = {
    "dealer.dealerOrganization.organizationStock.transferModal.title":"仓库调拨",
    "dealer.dealerOrganization.organizationStock.transferModal.sourceOrganization":"源组织",
    "dealer.dealerOrganization.organizationStock.transferModal.organizationName":"目标组织",
    "dealer.dealerOrganization.organizationStock.transferModal.resourceSpecClassName":"资源规格分类名称",
    "dealer.dealerOrganization.organizationStock.transferModal.resourceNumber":"源库存量",
    "dealer.dealerOrganization.organizationStock.transferModal.targetResourceNumber":"目标库存量",
    "dealer.dealerOrganization.organizationStock.transferModal.changeNumber":"调拨数量",
    "dealer.dealerOrganization.organizationStock.transferModal.changeNumberRule":"调拨数量不能大于源库存量",
    "dealer.dealerOrganization.organizationStock.transferModal.successTitle":"成功提示",
    "dealer.dealerOrganization.organizationStock.transferModal.successContent":"调拨成功！",
};

const OrganizationStaff = {
    "dealer.dealerOrganization.organizationStaff.title":"员工信息",
    "dealer.dealerOrganization.organizationStaff.addButton":"新增",
    "dealer.dealerOrganization.organizationStaff.modifyButton":"修改",
    "dealer.dealerOrganization.organizationStaff.rechargeButton":"充值",
    "exist.the.same.name.sameMobilePhone":"联系电话已经被占用！",
};

const OrganizationStaffList = {
    "dealer.dealerOrganization.organizationStaff.staffList.code":"编码",
    "dealer.dealerOrganization.organizationStaff.staffList.name":"名称",
    "dealer.dealerOrganization.organizationStaff.staffList.type":"角色",
    "dealer.dealerOrganization.organizationStaff.staffList.mobilePhone":"电话",
    "dealer.dealerOrganization.organizationStaff.staffList.usedAccount":"账户",
    "dealer.dealerOrganization.organizationStaff.staffList.balance":"账户余额",
};

const StaffModal = {
    "dealer.dealerOrganization.organizationStaff.staffModal.create":"新增员工",
    "dealer.dealerOrganization.organizationStaff.staffModal.modify":"修改员工",
    "dealer.dealerOrganization.organizationStaff.staffModal.partnerOrganizationName":"所属组织",
    "dealer.dealerOrganization.organizationStaff.staffModal.codeMessage":"系统自动生成",
    "dealer.dealerOrganization.organizationStaff.staffModal.code":"员工编码",
    "dealer.dealerOrganization.organizationStaff.staffModal.name":"员工名称",
    "dealer.dealerOrganization.organizationStaff.staffModal.nameRule":"员工名称不能为空",
    "dealer.dealerOrganization.organizationStaff.staffModal.mobilePhone":"联系电话",
    "dealer.dealerOrganization.organizationStaff.staffModal.mobilePhoneRequired":"联系电话不能为空",
    "dealer.dealerOrganization.organizationStaff.staffModal.mobilePhoneMinLen":"联系电话长度不能小于",
    "dealer.dealerOrganization.organizationStaff.staffModal.mobileNumberRule":"联系电话不合法",
    "dealer.dealerOrganization.organizationStaff.staffModal.usedAccountType":"员工账户",
    "dealer.dealerOrganization.organizationStaff.staffModal.usedAccountTypeRule":"员工账户不能为空",
    "dealer.dealerOrganization.organizationStaff.staffModal.mem":"备注",
};

const RechargeModal = {
    "dealer.dealerOrganization.rechargeModal.organization":"组织充值",
    "dealer.dealerOrganization.rechargeModal.subDealer":"下级代理商充值",
    "dealer.dealerOrganization.rechargeModal.staff":"员工充值",
    "dealer.dealerOrganization.rechargeModal.rechargeOutKey":"转出账户",
    "dealer.dealerOrganization.rechargeModal.rechargeOutBalance":"转出账户余额",
    "dealer.dealerOrganization.rechargeModal.rechargeInName":"转入账户",
    "dealer.dealerOrganization.rechargeModal.rechargeInBalance":"转入账户余额",
    "dealer.dealerOrganization.rechargeModal.money":"转账金额",
    "dealer.dealerOrganization.rechargeModal.moneyRule":"转账金额不能为空",
    "dealer.dealerOrganization.rechargeModal.moneyMustThanZero":"转账金额必须大于0",
    "dealer.dealerOrganization.rechargeModal.moneyThanOutBalance":"转账金额不能大于转出账户余额",
    "dealer.dealerOrganization.rechargeModal.pin":"支付密码",
    "dealer.dealerOrganization.rechargeModal.pinRule":"支付密码不能为空",
};

const SubDealer = {
    "subDealer.subDealer.dealer":"代理商管理",
    "subDealer.subDealer.title":"下级代理商管理",
};

const SubDealers = {
    "dealer.subDealer.subDealers.title":"下级代理商信息",
    "dealer.subDealer.subDealers.rechargeButton":"充值",
};

const SubDealerList = {
    "dealer.subDealer.subDealers.subDealerList.partnerCode":"编码",
    "dealer.subDealer.subDealers.subDealerList.partnerName":"名称",
    "dealer.subDealer.subDealers.subDealerList.partnerSaleAddressName":"销售区域",
    "dealer.subDealer.subDealers.subDealerList.balance":"账号余额",
    "dealer.subDealer.subDealers.subDealerList.linkman":"联系人",
    "dealer.subDealer.subDealers.subDealerList.mobile":"联系电话",
    "dealer.subDealer.subDealers.subDealerList.address":"地址"
};

const SubDealerStock = {
    "dealer.subDealer.subDealerStock.title":"仓库信息",
    "dealer.subDealer.subDealerStock.saleButton":"销售",
    "dealer.subDealer.subDealerStock.returnButton":"退货"
};

const SubDealerStockList = {
    "dealer.subDealer.subDealerStock.stockList.resourceSpecClassName":"资源规格分类名称",
    "dealer.subDealer.subDealerStock.stockList.totalResourceNumber":"代理商总库存量",
};

const SubDealerSaleModal = {
    "dealer.subDealer.subDealerStock.saleModal.title":"仓库销售",
    "dealer.subDealer.subDealerStock.saleModal.sourceOrganization":"源组织",
    "dealer.subDealer.subDealerStock.saleModal.destinationOrganizationName":"目标组织",
    "dealer.subDealer.subDealerStock.saleModal.resourceSpecClassName":"资源规格分类名称",
    "dealer.subDealer.subDealerStock.saleModal.resourceNumber":"源库存量",
    "dealer.subDealer.subDealerStock.saleModal.targetResourceNumber":"目标库存量",
    "dealer.subDealer.subDealerStock.saleModal.changeNumber":"销售数量",
    "dealer.subDealer.subDealerStock.saleModal.changeNumberRule":"销售数量不能大于源库存量",
    "dealer.subDealer.subDealerStock.saleModal.successTitle":"成功提示",
    "dealer.subDealer.subDealerStock.saleModal.successContent":"销售成功！",
};

const SubDealerReturnModal = {
    "dealer.subDealer.subDealerStock.returnModal.title":"仓库退还",
    "dealer.subDealer.subDealerStock.returnModal.sourceOrganization":"源组织",
    "dealer.subDealer.subDealerStock.returnModal.destinationOrganizationName":"目标组织",
    "dealer.subDealer.subDealerStock.returnModal.resourceSpecClassName":"资源规格分类名称",
    "dealer.subDealer.subDealerStock.returnModal.resourceNumber":"源库存量",
    "dealer.subDealer.subDealerStock.returnModal.targetResourceNumber":"目标库存量",
    "dealer.subDealer.subDealerStock.returnModal.changeNumber":"退还数量",
    "dealer.subDealer.subDealerStock.returnModal.changeNumberRule":"退还数量不能大于源库存量",
    "dealer.subDealer.subDealerStock.returnModal.successTitle":"成功提示",
    "dealer.subDealer.subDealerStock.returnModal.successContent":"退还成功！",
};

const NewSubscriberActive = {
    "newSubscriberActive.newSubscriberActive.customer":"客户服务",
    "newSubscriberActive.newSubscriberActive.title":"新用户激活",
};

const NewSubscriberActiveForm = {
    "customer.newSubscriberActive.newSubscriberActiveForm.title":"激活信息",
    "customer.newSubscriberActive.newSubscriberActiveForm.businessClass":"业务分类",
    "customer.newSubscriberActive.newSubscriberActiveForm.businessClassRule":"业务分类不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.smartCardCode":"智能卡号",
    "customer.newSubscriberActive.newSubscriberActiveForm.smartCardCodeRule":"智能卡号不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.smartCardCodeLenRule":"智能卡号应输入11位数字字符串",
    "customer.newSubscriberActive.newSubscriberActiveForm.stbCode":"机顶盒号",
    "customer.newSubscriberActive.newSubscriberActiveForm.stbCodeRule":"机顶盒号不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.stbCodeLenRule":"机顶盒号应输入17位数字字符串",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerName":"姓名",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerNameRule":"姓名不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerFirstName":"姓",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerFirstNameRule":"姓不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerLastName":"名",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerLastNameRule":"名不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.mobileNumber":"联系电话",
    "customer.newSubscriberActive.newSubscriberActiveForm.mobileNumberRule":"联系电话不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.email":"电子邮箱",
    "customer.newSubscriberActive.newSubscriberActiveForm.emailRule":"电子邮箱不合法",
    "customer.newSubscriberActive.newSubscriberActiveForm.address":"地址",
    "customer.newSubscriberActive.newSubscriberActiveForm.addressIdRule":"地址不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.code":"产品包",
    "customer.newSubscriberActive.newSubscriberActiveForm.codeRule":"产品包不能为空",
    "customer.newSubscriberActive.newSubscriberActiveForm.errorCodeTitle":"错误提示",
    "customer.newSubscriberActive.newSubscriberActiveForm.smartCardCodeError":"智能卡号不存在",
    "customer.newSubscriberActive.newSubscriberActiveForm.stbCodeError":"机顶盒号不存在",
    "customer.newSubscriberActive.newSubscriberActiveForm.successTitle":"成功提示",
    "customer.newSubscriberActive.newSubscriberActiveForm.successContent":"激活成功！",
};

const CustomerService = {
    "customerService.customerService.customer":"客户服务",
    "customerService.customerService.title":"客户服务",
    "customerService.customerService.nullSubscribersTitle":"提示信息",
    "customerService.customerService.nullSubscribersContent":"没有找到符合条件的用户",
};

const CustomerServiceSearchForm = {
    "customer.customerService.customerServiceSearchForm.title":"查询条件",
    "customer.customerService.customerServiceSearchForm.smartCardCode":"智能卡号",
    "customer.customerService.customerServiceSearchForm.mobilePhone":"移动电话",
    "customer.customerService.customerServiceSearchForm.queryValueRule":"查询条件不能为空",
    "customer.customerService.customerServiceSearchForm.queryButton":"查询",
};

const SubscriberSelectModal = {
    "customer.customerService.modal.SubscriberSelectModal.title":"选择用户",
    "customer.customerService.modal.SubscriberSelectModal.serviceCode":"智能卡号",
    "customer.customerService.modal.SubscriberSelectModal.subscriberStatus":"状态",
    "customer.customerService.modal.SubscriberSelectModal.activateDate":"激活日期",
    "customer.customerService.modal.SubscriberSelectModal.infoTitle":"提示信息",
    "customer.customerService.modal.SubscriberSelectModal.infoContent":"请选择一个用户！",
};

const ServiceInfo = {
    "customer.customerService.serviceInfo.title":"服务信息",
    "customer.customerService.serviceInfo.rechargeButton":"充值",
    "customer.customerService.serviceInfo.changeBouquetButton":"更换包",
    "customer.customerService.serviceInfo.changeCardButton":"更换卡",
    "customer.customerService.serviceInfo.refreshAuthButton":"刷新授权",
    "customer.customerService.serviceInfo.serviceCode":"智能卡号",
    "customer.customerService.serviceInfo.subscriberStatus":"状态",
    "customer.customerService.serviceInfo.balance":"余额",
    "customer.customerService.serviceInfo.estimatedStopDate":"预计停断日期",
    "customer.customerService.serviceInfo.stbType":"机顶盒类型",
    "customer.customerService.serviceInfo.stbCode":"机顶盒号",
    "customer.customerService.serviceInfo.displayName":"基本销售品",
    "customer.customerService.serviceInfo.subsidiaryOfferDisplayName":"附属销售品",
};

const CustomerServiceRechargeModal = {
    "customer.customerService.modal.rechargeModal.title":"充值",
    "customer.customerService.modal.rechargeModal.rechargeType":"充值类型",
    "customer.customerService.modal.rechargeModal.rechargeTypeRule":"充值类型不能为空",
    "customer.customerService.modal.rechargeModal.currentBouquet":"当前包",
    "customer.customerService.modal.rechargeModal.businessClass":"业务分类",
    "customer.customerService.modal.rechargeModal.businessClassRule":"业务分类不能为空",
    "customer.customerService.modal.rechargeModal.productCode":"新产品包",
    "customer.customerService.modal.rechargeModal.productCodeRule":"新产品包不能为空",
    "customer.customerService.modal.rechargeModal.pin":"支付密码",
    "customer.customerService.modal.rechargeModal.pinRule":"支付密码不能为空",
    "customer.customerService.modal.rechargeModal.checkCode":"校验码",
    "customer.customerService.modal.rechargeModal.checkCodeRule":"校验码不能为空",
    "customer.customerService.modal.rechargeModal.changeBouquetBox":"更换包",
    "customer.customerService.modal.rechargeModal.duration":"充值月数",
    "customer.customerService.modal.rechargeModal.durationRule":"充值月数不能为空",
    "customer.customerService.modal.rechargeModal.durationItem.one":"一个月",
    "customer.customerService.modal.rechargeModal.durationItem.three":"三个月",
    "customer.customerService.modal.rechargeModal.durationItem.six":"六个月",
    "customer.customerService.modal.rechargeModal.durationItem.twelve":"十二个月",
    "customer.customerService.modal.rechargeModal.durationItem.other":"个月",
    "customer.customerService.modal.rechargeModal.money":"充值金额",
    "customer.customerService.modal.rechargeModal.successTitle":"成功提示",
    "customer.customerService.modal.rechargeModal.successContent":"充值成功！",
};

const ChangeBouquetModal = {
    "customer.customerService.modal.changeBouquetModal.title":"换包",
    "customer.customerService.modal.changeBouquetModal.currentBouquet":"当前包",
    "customer.customerService.modal.changeBouquetModal.businessClass":"业务分类",
    "customer.customerService.modal.changeBouquetModal.businessClassRule":"业务分类不能为空",
    "customer.customerService.modal.changeBouquetModal.productCode":"新产品包",
    "customer.customerService.modal.changeBouquetModal.productCodeRule":"新产品包不能为空",
    "customer.customerService.modal.changeBouquetModal.successTitle":"成功提示",
    "customer.customerService.modal.changeBouquetModal.successContent":"换包成功！",
};

const ChangeCardModal = {
    "customer.customerService.modal.changeCardModal.title":"物理产品更换",
    "customer.customerService.modal.changeCardModal.smartCardCheckBox":"智能卡更换",
    "customer.customerService.modal.changeCardModal.stbCheckBox":"机顶盒更换",
    "customer.customerService.modal.changeCardModal.newCode":"资源编码",
    "customer.customerService.modal.changeCardModal.newCodeRule":"资源编码不能为空",
    "customer.customerService.modal.changeCardModal.resourceStatus":"旧资源状态",
    "customer.customerService.modal.changeCardModal.resourceStatusRule":"旧资源状态不能为空",
    "customer.customerService.modal.changeCardModal.checkCode":"校验码",
    "customer.customerService.modal.changeCardModal.checkCodeRule":"校验码不能为空",
    "customer.customerService.modal.changeCardModal.successTitle":"成功提示",
    "customer.customerService.modal.changeCardModal.successContent":"物理产品更换成功！",
};

const RefreshAuthModal = {
    "customer.customerService.modal.refreshAuthModal.title":"刷新授权",
    "customer.customerService.modal.refreshAuthModal.reason":"刷新原因",
    "customer.customerService.modal.refreshAuthModal.reasonRule":"刷新原因不能为空",
    "customer.customerService.modal.refreshAuthModal.checkCode":"校验码",
    "customer.customerService.modal.refreshAuthModal.checkCodeRule":"校验码不能为空",
    "customer.customerService.modal.refreshAuthModal.successTitle":"成功提示",
    "customer.customerService.modal.refreshAuthModal.successContent":"刷新授权成功！",
};

const CustomerInfo = {
    "customer.customerService.customerInfo.title":"客户信息",
    "customer.customerService.customerInfo.firstName":"姓",
    "customer.customerService.customerInfo.lastName":"名",
    "customer.customerService.customerInfo.mobile":"联系电话",
    "customer.customerService.customerInfo.email":"电子邮箱",
    "customer.customerService.customerInfo.saleAreaName":"运营区域",
    "customer.customerService.customerInfo.fullAddress":"地址",
    "customer.customerService.customerInfo.modifyButton":"修改",
};

const CustomerModal = {
    "customer.customerService.modal.customerModal.title":"编辑客户信息",
    "customer.customerService.modal.customerModal.firstName":"姓",
    "customer.customerService.modal.customerModal.firstNameRule":"姓不能为空",
    "customer.customerService.modal.customerModal.lastName":"名",
    "customer.customerService.modal.customerModal.lastNameRule":"名不能为空",
    "customer.customerService.modal.customerModal.mobile":"联系电话",
    "customer.customerService.modal.customerModal.mobileRule":"联系电话不能为空",
    "customer.customerService.modal.customerModal.email":"电子邮箱",
    "customer.customerService.modal.customerModal.emailRule":"电子邮箱不合法",
    "customer.customerService.modal.customerModal.address":"地址",
    "customer.customerService.modal.customerModal.addressRule":"地址不能为空",
    "customer.customerService.modal.customerModal.successTitle":"成功提示",
    "customer.customerService.modal.customerModal.successContent":"修改成功！",
};

const BalanceChange = {
    "balanceChange.balanceChange.report":"查询统计",
    "balanceChange.balanceChange.title":"额度变更查询",
    "balanceChange.balanceChange.exportSuccess":"数据导出成功",
};

const BalanceChangeSearchForm = {
    "report.balanceChange.balanceChangeSearchForm.title":"查询条件",
    "report.balanceChange.balanceChangeSearchForm.partnerName":"代理商",
    "report.balanceChange.balanceChangeSearchForm.partnerNameRule":"代理商不能为空",
    "report.balanceChange.balanceChangeSearchForm.partnerAccountName":"账户",
    "report.balanceChange.balanceChangeSearchForm.partnerAccountNameRule":"账户不能为空",
    "report.balanceChange.balanceChangeSearchForm.date":"日期",
    "report.balanceChange.balanceChangeSearchForm.dateRule":"日期不能为空",
    "report.balanceChange.balanceChangeSearchForm.dateItem.today":"今天",
    "report.balanceChange.balanceChangeSearchForm.dateItem.latestWeek":"上周",
    "report.balanceChange.balanceChangeSearchForm.dateItem.latestMonth":"上月",
    "report.balanceChange.balanceChangeSearchForm.dateItem.other":"其他",
    "report.balanceChange.balanceChangeSearchForm.queryButton":"查询",
    "report.balanceChange.balanceChangeSearchForm.resetButton":"重置",
};

const BalanceChangeQueryResult = {
    "report.balanceChange.BalanceChangeQueryResult.title":"查询结果",
    "report.balanceChange.BalanceChangeQueryResult.intoOutTab":"额度转入和转出记录",
    "report.balanceChange.BalanceChangeQueryResult.salesTab":"额度销售记录",
    "report.balanceChange.BalanceChangeQueryResult.exportButton":"导出",
};

const BalanceChangeList = {
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.createInstant":"日期",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.amount":"金额",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.lastAmount":"账户余额",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.fromAccountName":"源账户",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.toAccountName":"目标账户",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.createCode":"操作员",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.totalNumber":"总数量",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.totalAmount":"总金额",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.intoNumber":"转入数量",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.intoAmount":"转入金额",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.outNumber":"转出数量",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.outAmount":"转出金额",
};

const BalanceSaleList = {
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.createInstant":"日期",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.money":"金额",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.cardValue":"单价",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.number":"数量",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.mobile":"联系电话",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.smartCard":"智能卡号",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.type":"销售类型",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.createCode":"销售员",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.totalNumber":"总数量",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.totalAmount":"总金额",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.remoteTopUpNumber":"直冲数量",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.remoteTopUpAmount":"直冲金额",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.voucherCardNumber":"电子卡销售数量",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.voucherCardAmount":"电子卡销售金额",

    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.createInstant":"日期",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.money":"金额",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.cardValue":"单价",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.number":"数量",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.mobile":"联系电话",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.smartCard":"智能卡号",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.type":"销售类型",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.createCode":"销售员",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.totalNumber":"总数量",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.totalAmount":"总金额",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.remoteTopUpNumber":"直冲数量",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.remoteTopUpAmount":"直冲金额",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.voucherCardNumber":"电子卡销售数量",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.voucherCardAmount":"电子卡销售金额",
};

const ActivationSubscriber = {
    "activationSubscriber.activationSubscriber.report":"查询统计",
    "activationSubscriber.activationSubscriber.title":"激活用户查询",
    "activationSubscriber.activationSubscriber.exportSuccess":"数据导出成功",
};

const ActivationSubscriberSearchForm = {
    "report.activationSubscriber.activationSubscriberSearchForm.title":"查询条件",
    "report.activationSubscriber.activationSubscriberSearchForm.saler":"销售员",
    "report.activationSubscriber.activationSubscriberSearchForm.salerRule":"销售员不能为空",
    "report.activationSubscriber.activationSubscriberSearchForm.date":"日期",
    "report.activationSubscriber.activationSubscriberSearchForm.dateRule":"日期不能为空",
    "report.activationSubscriber.activationSubscriberSearchForm.dateItem.today":"今天",
    "report.activationSubscriber.activationSubscriberSearchForm.dateItem.latestWeek":"上周",
    "report.activationSubscriber.activationSubscriberSearchForm.dateItem.latestMonth":"上月",
    "report.activationSubscriber.activationSubscriberSearchForm.dateItem.other":"其他",
    "report.activationSubscriber.activationSubscriberSearchForm.bouquet":"产品包",
    "report.activationSubscriber.activationSubscriberSearchForm.smartCardCode":"智能卡",
    "report.activationSubscriber.activationSubscriberSearchForm.stbCode":"机顶盒",
    "report.activationSubscriber.activationSubscriberSearchForm.queryButton":"查询",
    "report.activationSubscriber.activationSubscriberSearchForm.resetButton":"重置",
};

const ActivationSubscriberList = {
    "report.activationSubscriber.activationSubscriberQueryResult.title":"查询结果",
    "report.activationSubscriber.activationSubscriberQueryResult.exportButton":"导出",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.createInstant":"日期",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.smartCardCode":"智能卡号",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.stbCode":"机顶盒号",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.customerName":"客户",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.mobile":"联系电话",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.bouquet":"产品包",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.createCode":"销售员",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.totalNumber":"总条数",
};

const BalanceSaleSearchForm = {
    "report.balanceSale.balanceSaleSearchForm.title":"查询条件",
    "report.balanceSale.balanceSaleSearchForm.saleTypeAll":"所有",
    "report.balanceSale.balanceSaleSearchForm.saleTypeRemoteTopUp":"直接充值",
    "report.balanceSale.balanceSaleSearchForm.saleTypeVoucherCard":"充值卡充值",
    "report.balanceSale.balanceSaleSearchForm.lowerDealer":"下级代理商",
    "report.balanceSale.balanceSaleSearchForm.dealerType":"代理商类型",
    "report.balanceSale.balanceSaleSearchForm.saler":"销售员",
    "report.balanceSale.balanceSaleSearchForm.saleType":"销售类型",
    "report.balanceSale.balanceSaleSearchForm.salerRule":"销售员不能为空",
    "report.balanceSale.balanceSaleSearchForm.date":"日期",
    "report.balanceSale.balanceSaleSearchForm.dateRule":"日期不能为空",
    "report.balanceSale.balanceSaleSearchForm.dateItem.today":"今天",
    "report.balanceSale.balanceSaleSearchForm.dateItem.latestWeek":"上周",
    "report.balanceSale.balanceSaleSearchForm.dateItem.latestMonth":"上月",
    "report.balanceSale.balanceSaleSearchForm.dateItem.other":"其他",
    "report.balanceSale.balanceSaleSearchForm.bouquet":"产品包",
    "report.balanceSale.balanceSaleSearchForm.smartCardCode":"智能卡",
    "report.balanceSale.balanceSaleSearchForm.mobile":"手机",
    "report.balanceSale.balanceSaleSearchForm.queryButton":"查询",
    "report.balanceSale.balanceSaleSearchForm.resetButton":"重置",
    "report.balanceSale.balanceSaleSearchForm.partnerName":"代理商",
    "report.balanceSale.balanceSaleSearchForm.partnerNameRule":"代理商不能为空"
};

const BalanceSaleQueryResult = {
    "report.balanceSale.balanceSaleQueryResult.title":"查询结果",
    "report.balanceSale.balanceSaleQueryResult.exportButton":"导出",
    "report.balanceSale.balanceSaleQueryResult.resendMessage":"重发短信",
};

const BalanceSaleRoutes = {
    "balanceSale.balanceSale.report":"查询统计",
    "balanceSale.balanceSale.title":"额度销售查询",
    "balanceSale.balanceSale.exportSuccess":"数据导出成功",
    "balanceSale.balanceSale.sendSuccess":"短信发送成功",
};


module.exports = Object.assign(
    {},
    EnumsMessages,
    ModalAlert,
    CheckCode,
    Login,
    HomePage,
    UserInfo,
    ModifyPass,
    Logout,
    /*代理商组织*/
    DealerOrganization,
    OrganizationInfo,
    OrganizationTreeGrid,
    OrganizationModal,
    OrganizationStock,
    OrganizationStockList,
    OrganizationStockModal,
    OrganizationTransferModal,
    OrganizationStaff,
    OrganizationStaffList,
    StaffModal,
    RechargeModal,
    /*下级代理商管理*/
    SubDealer,
    SubDealers,
    SubDealerList,
    SubDealerStock,
    SubDealerStockList,
    SubDealerSaleModal,
    SubDealerReturnModal,
    /*新用户激活*/
    NewSubscriberActive,
    NewSubscriberActiveForm,
    /*客户服务*/
    CustomerService,
    CustomerServiceSearchForm,
    SubscriberSelectModal,
    ServiceInfo,
    CustomerServiceRechargeModal,
    ChangeBouquetModal,
    ChangeCardModal,
    CustomerInfo,
    CustomerModal,
    RefreshAuthModal,
    /*额度变更查询*/
    BalanceChange,
    BalanceChangeSearchForm,
    BalanceChangeQueryResult,
    BalanceChangeList,
    BalanceSaleList,
    /*激活用户查询*/
    ActivationSubscriber,
    ActivationSubscriberSearchForm,
    ActivationSubscriberList,
    /*额度销售查询*/
    BalanceSaleSearchForm,
    BalanceSaleQueryResult,
    BalanceSaleRoutes

);
