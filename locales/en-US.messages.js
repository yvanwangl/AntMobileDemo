/**
 * Created by wyf on 2017/2/27.
 */
/*枚举国际化*/
const EnumsMessages = {
    /*accountType 账户类型*/
    "accountType.self": "Self",
    "accountType.belongOrganization": "Belong Organization",
    "accountType.rootOrganization": "Root Organization",
    /*staffType 员工类型*/
    "staffType.admin": "Admin",
    "staffType.normal": "Normal",
    /*可激活产品配置业务分类*/
    "businessClass.DTH": "DTH",
    "businessClass.DTT": "DTT",
    "businessClass.TV": "TV",
    /*客户下用户状态*/
    "subscriberStatus.invalid": "Invalid",
    "subscriberStatus.valid": "Valid",
    "subscriberStatus.pause": "Pause",
    "subscriberStatus.punishStop": "Punish Stop",
    /*客户查询条件*/
    "querySubscribersType.smartCard": "Smart Card",
    "querySubscribersType.phone": "Phone",
    /*额度销售类型*/
    "partnerBalanceSalesType.all":"All",
    "partnerBalanceSalesType.electronicCardSale":"Electronic Card Sale",
    "partnerBalanceSalesType.rechargeForCustomer":"Recharge For Customer",
};

const ModalAlert = {
    "common.modalAlert.onOkText": "Confirm"
};

const CheckCode = {
    "common.checkCode.input.placeHolder":"Please Input Check Code",
    "common.checkCode.input.checkCode":"Check Code",
    "common.checkCode.input.checkCodeRule":"Check Code Is Required",
    "common.checkCode.input.checkCodeError":"Check Code Is Error",
};

const Login = {
    "common.login.title.welcome": "Welcome to",
    "common.login.title.startimes": "StarTimes Mobile BOSS",
    "common.login.username.label": "Operator Code / Mobile Number",
    "common.login.username.vtype": "Operator Code / Mobile Number Is Required",
    "common.login.password.label": "Password",
    "common.login.password.vtype": "Password Is Required",
    "common.login.forgotPass": "Forgot Password",
    "common.login.login": "Login"
};

const HomePage = {
    "homePage.menuList.dealer": "Dealer",
    "homePage.menuList.dealerOrganization": "Dealer Organization",
    "homePage.menuList.subDealer": "Sub Dealer",
    "homePage.menuList.customer": "Customer",
    "homePage.menuList.newSubscriberActive": "Subscriber Active",
    "homePage.menuList.customerService": "Customer Service",
    "homePage.menuList.cardSale": "Card Sale",
    "homePage.menuList.report": "Report",
    "homePage.menuList.balanceChange": "Balance Change",
    "homePage.menuList.balanceSale": "Balance Sale",
    "homePage.menuList.activationSubscriber": "Activation Subscriber",
};

const UserInfo = {
    "common.userInfo.role": "Role",
    "common.userInfo.partnerAccountNumber": "Partner Account Number",
    "common.userInfo.balance": "Balance",
    "common.userInfo.balance.balanceTitle": "My Balance",
    "common.userInfo.partnerStaffName": "Name",
    "common.userInfo.partnerStaffCode": "Code",
    "common.userInfo.partnerName": "Partner Name",
    "common.userInfo.partnerCode": "Partner Code",
    "common.userInfo.modifyPassword": "Modify Password",
    "common.userInfo.modifyPin": "Modify Pin",
    "common.userInfo.logout": "Logout",
};

const ModifyPass = {
    "common.modifyPass.loginPass": "Modify Login Password",
    "common.modifyPass.pinPass": "Modify Pin Password",
    "common.modifyPass.oldPass": "Old Password",
    "common.modifyPass.oldPassRequired": "Old Password Is Required",
    "common.modifyPass.newPass": "New Password",
    "common.modifyPass.notEqualToOld": "New Password Can Not Same With Old Password",
    "common.modifyPass.newPassRequired": "New Password Is Required",
    "common.modifyPass.newLoginPassLength": "Password Length Should Be Not Less Than 8",
    "common.modifyPass.newPinPassLength": "Password Length Should Be Not Less Than 6",
    "common.modifyPass.newPassRule": "The New Password Must Contain Numbers And Letters",
    "common.modifyPass.confirmPass": "Confirm Password",
    "common.modifyPass.confirmPassRequired": "Confirm Password Is Required",
    "common.modifyPass.notEqualToNew": "New Password Must Be Same With Old Password",
};

const Logout = {
    "common.homeHeader.logout.title": "Message Alert",
    "common.homeHeader.logout.content": "Confirm To Logout?",
    "common.homeHeader.logout.okText": "Confirm",
    "common.homeHeader.logout.cancelText": "Cancel"
};

const DealerOrganization = {
    "dealerOrganization.dealerOrganization.dealer": "Dealer Organization",
    "dealerOrganization.dealerOrganization.title": "Dealer Organization Management",
};

const OrganizationInfo = {
    "dealer.dealerOrganization.organizationInfo.title": "Organization Info",
    "dealer.dealerOrganization.organizationInfo.addButton": "Add",
    "dealer.dealerOrganization.organizationInfo.modifyButton": "Modify",
    "dealer.dealerOrganization.organizationInfo.rechargeButton": "Recharge",
    "dealer.dealerOrganization.organizationInfo.code": "Organization Code",
    "dealer.dealerOrganization.organizationInfo.name": "Organization Name",
    "dealer.dealerOrganization.organizationInfo.balance": "Balance",
    "dealer.dealerOrganization.organizationInfo.parentName": "Parent Organization",
};

const OrganizationTreeGrid = {
    "dealer.dealerOrganization.organizationTreeGrid.name": "Organization Name",
    "dealer.dealerOrganization.organizationTreeGrid.code": "Organization Code",
    "dealer.dealerOrganization.organizationTreeGrid.balance": "Balance",
};

const OrganizationModal = {
    "dealer.dealerOrganization.organizationModal.create": "Add",
    "dealer.dealerOrganization.organizationModal.modify": "Modify",
    "dealer.dealerOrganization.organizationModal.parentName": "Parent Organization",
    "dealer.dealerOrganization.organizationModal.name": "Name",
    "dealer.dealerOrganization.organizationModal.nameRule": "Organization Name Is Required",
    "dealer.dealerOrganization.organizationModal.code": "Code",
    "dealer.dealerOrganization.organizationModal.remark": "Remark",
};

const OrganizationStock = {
    "dealer.dealerOrganization.organizationStock.title": "Stock Info",
    "dealer.dealerOrganization.organizationStock.modifyButton": "Modify",
    "dealer.dealerOrganization.organizationStock.transferButton": "Transfer"
};

const OrganizationStockList = {
    "dealer.dealerOrganization.organizationStock.stockList.resourceSpecClassName": "Resource Spec Class Name",
    "dealer.dealerOrganization.organizationStock.stockList.resourceNumber": "Resource Number",
    "dealer.dealerOrganization.organizationStock.stockList.totalResourceNumber": "Total Resource Number",
};

const OrganizationStockModal = {
    "dealer.dealerOrganization.organizationStock.stockModal.title": "Modify Stock",
    "dealer.dealerOrganization.organizationStock.stockModal.currentOrganization": "Current Organization",
    "dealer.dealerOrganization.organizationStock.stockModal.resourceSpecClassName": "Resource Spec Class Name",
    "dealer.dealerOrganization.organizationStock.stockModal.resourceNumber": "Resource Number",
    "dealer.dealerOrganization.organizationStock.stockModal.currentResourceNumber": "Current Number",
    "dealer.dealerOrganization.organizationStock.stockModal.changeNumber": "Change Number",
    "dealer.dealerOrganization.organizationStock.stockModal.successTitle":"Success Message",
    "dealer.dealerOrganization.organizationStock.stockModal.successContent":"Modify Success!",
};

const OrganizationTransferModal = {
    "dealer.dealerOrganization.organizationStock.transferModal.title": "Transfer Stock",
    "dealer.dealerOrganization.organizationStock.transferModal.sourceOrganization": "From",
    "dealer.dealerOrganization.organizationStock.transferModal.organizationName": "To",
    "dealer.dealerOrganization.organizationStock.transferModal.resourceSpecClassName": "Resource Spec Class Name",
    "dealer.dealerOrganization.organizationStock.transferModal.resourceNumber": "Source Number",
    "dealer.dealerOrganization.organizationStock.transferModal.targetResourceNumber": "Target Number",
    "dealer.dealerOrganization.organizationStock.transferModal.changeNumber": "Transfer Number",
    "dealer.dealerOrganization.organizationStock.transferModal.changeNumberRule": "Transfer Number Can Not More Than Source Number",
    "dealer.dealerOrganization.organizationStock.transferModal.successTitle":"Success Message",
    "dealer.dealerOrganization.organizationStock.transferModal.successContent":"Transfer Success!",
};

const OrganizationStaff = {
    "dealer.dealerOrganization.organizationStaff.title": "Organization Staff Info",
    "dealer.dealerOrganization.organizationStaff.addButton": "Add",
    "dealer.dealerOrganization.organizationStaff.modifyButton": "Modify",
    "dealer.dealerOrganization.organizationStaff.rechargeButton": "Recharge",
    "exist.the.same.name.sameMobilePhone": "The Mobile Phone Has Been Used",
};

const OrganizationStaffList = {
    "dealer.dealerOrganization.organizationStaff.staffList.code": "Code",
    "dealer.dealerOrganization.organizationStaff.staffList.name": "Name",
    "dealer.dealerOrganization.organizationStaff.staffList.type": "Type",
    "dealer.dealerOrganization.organizationStaff.staffList.mobilePhone": "Mobile Phone",
    "dealer.dealerOrganization.organizationStaff.staffList.usedAccount": "Account",
    "dealer.dealerOrganization.organizationStaff.staffList.balance": "Balance",
};

const StaffModal = {
    "dealer.dealerOrganization.organizationStaff.staffModal.create": "Add",
    "dealer.dealerOrganization.organizationStaff.staffModal.modify": "Modify ",
    "dealer.dealerOrganization.organizationStaff.staffModal.partnerOrganizationName": "Organization",
    "dealer.dealerOrganization.organizationStaff.staffModal.codeMessage": "The System Is Automatically Generated",
    "dealer.dealerOrganization.organizationStaff.staffModal.code": "Code",
    "dealer.dealerOrganization.organizationStaff.staffModal.name": "Name",
    "dealer.dealerOrganization.organizationStaff.staffModal.nameRule": "Name Is Required",
    "dealer.dealerOrganization.organizationStaff.staffModal.mobilePhone": "Mobile Phone",
    "dealer.dealerOrganization.organizationStaff.staffModal.mobilePhoneRequired": "Mobile Phone Is Required",
    "dealer.dealerOrganization.organizationStaff.staffModal.mobilePhoneMinLen":"The Length Of The Mobile Phone Can Not Be Less Than",
    "dealer.dealerOrganization.organizationStaff.staffModal.mobileNumberRule":"Mobile Phone Is Not Legal",
    "dealer.dealerOrganization.organizationStaff.staffModal.usedAccountType": "Used Account Type",
    "dealer.dealerOrganization.organizationStaff.staffModal.usedAccountTypeRule": "Used Account Type Is Required",
    "dealer.dealerOrganization.organizationStaff.staffModal.mem": "Remark",
};

const RechargeModal = {
    "dealer.dealerOrganization.rechargeModal.organization": "Organization Recharge",
    "dealer.dealerOrganization.rechargeModal.subDealer": "SubDealer Recharge",
    "dealer.dealerOrganization.rechargeModal.staff": "Staff Recharge",
    "dealer.dealerOrganization.rechargeModal.rechargeOutKey": "Out Account",
    "dealer.dealerOrganization.rechargeModal.rechargeOutBalance": "Out Account Balance",
    "dealer.dealerOrganization.rechargeModal.rechargeInName": "In Account",
    "dealer.dealerOrganization.rechargeModal.rechargeInBalance": "In Account Balance",
    "dealer.dealerOrganization.rechargeModal.money": "Money",
    "dealer.dealerOrganization.rechargeModal.moneyRule": "Money Is Required",
    "dealer.dealerOrganization.rechargeModal.moneyMustThanZero": "Money Must Be Greater Than 0",
    "dealer.dealerOrganization.rechargeModal.moneyThanOutBalance": "Money Can Not More Than Out Account Balance",
    "dealer.dealerOrganization.rechargeModal.pin": "Pay Pin",
    "dealer.dealerOrganization.rechargeModal.pinRule": "Pay Pin Is Required",
};

const SubDealer = {
    "subDealer.subDealer.dealer": "Dealer",
    "subDealer.subDealer.title": "Sub Dealer Management",
};

const SubDealers = {
    "dealer.subDealer.subDealers.title": "Sub Dealer Info",
    "dealer.subDealer.subDealers.rechargeButton": "Recharge",
};

const SubDealerList = {
    "dealer.subDealer.subDealers.subDealerList.partnerCode": "Partner Code",
    "dealer.subDealer.subDealers.subDealerList.partnerName": "Partner Name",
    "dealer.subDealer.subDealers.subDealerList.partnerSaleAddressName": "Partner Sale Address",
    "dealer.subDealer.subDealers.subDealerList.balance": "Balance",
    "dealer.subDealer.subDealers.subDealerList.linkman": "Linkman",
    "dealer.subDealer.subDealers.subDealerList.mobile": "Mobile",
    "dealer.subDealer.subDealers.subDealerList.address": "Address"
};

const SubDealerStock = {
    "dealer.subDealer.subDealerStock.title": "Stock Info",
    "dealer.subDealer.subDealerStock.saleButton": "Sale",
    "dealer.subDealer.subDealerStock.returnButton": "Return"
};

const SubDealerStockList = {
    "dealer.subDealer.subDealerStock.stockList.resourceSpecClassName": "Resource Spec Class Name",
    "dealer.subDealer.subDealerStock.stockList.totalResourceNumber": "Total Resource Number",
};

const SubDealerSaleModal = {
    "dealer.subDealer.subDealerStock.saleModal.title": "Sale",
    "dealer.subDealer.subDealerStock.saleModal.sourceOrganization": "From",
    "dealer.subDealer.subDealerStock.saleModal.destinationOrganizationName": "To",
    "dealer.subDealer.subDealerStock.saleModal.resourceSpecClassName": "Resource Spec Class Name",
    "dealer.subDealer.subDealerStock.saleModal.resourceNumber": "Source Number",
    "dealer.subDealer.subDealerStock.saleModal.targetResourceNumber": "Target Number",
    "dealer.subDealer.subDealerStock.saleModal.changeNumber": "Sale Number",
    "dealer.subDealer.subDealerStock.saleModal.changeNumberRule": "Sale Number Can Not More Than Sale Number",
    "dealer.subDealer.subDealerStock.saleModal.successTitle":"Success Message",
    "dealer.subDealer.subDealerStock.saleModal.successContent":"Sale Success!",
};

const SubDealerReturnModal = {
    "dealer.subDealer.subDealerStock.returnModal.title": "Return",
    "dealer.subDealer.subDealerStock.returnModal.sourceOrganization": "From",
    "dealer.subDealer.subDealerStock.returnModal.destinationOrganizationName": "To",
    "dealer.subDealer.subDealerStock.returnModal.resourceSpecClassName": "Resource Spec Class Name",
    "dealer.subDealer.subDealerStock.returnModal.resourceNumber": "Source Number",
    "dealer.subDealer.subDealerStock.returnModal.targetResourceNumber": "Target Number",
    "dealer.subDealer.subDealerStock.returnModal.changeNumber": "Return Number",
    "dealer.subDealer.subDealerStock.returnModal.changeNumberRule": "Return Number Can Not More Than Sale Number",
    "dealer.subDealer.subDealerStock.returnModal.successTitle":"Success Message",
    "dealer.subDealer.subDealerStock.returnModal.successContent":"Return Success!",
};

const NewSubscriberActive = {
    "newSubscriberActive.newSubscriberActive.customer": "Customer",
    "newSubscriberActive.newSubscriberActive.title": "Subscriber Active",
};

const NewSubscriberActiveForm = {
    "customer.newSubscriberActive.newSubscriberActiveForm.title": "Activation Info",
    "customer.newSubscriberActive.newSubscriberActiveForm.businessClass": "Business Class",
    "customer.newSubscriberActive.newSubscriberActiveForm.businessClassRule": "Business Class Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.smartCardCode": "Smart Card Code",
    "customer.newSubscriberActive.newSubscriberActiveForm.smartCardCodeRule": "Smart Card Code Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.smartCardCodeLenRule": "Smart Card Code Should Be entered 11-digit Numeric String",
    "customer.newSubscriberActive.newSubscriberActiveForm.stbCode": "STB Code",
    "customer.newSubscriberActive.newSubscriberActiveForm.stbCodeRule": "STB Code Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.stbCodeLenRule": "STB Code Should Be entered 17-digit Numeric String",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerName": "Name",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerNameRule": "Name Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerFirstName": "First Name",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerFirstNameRule": "First Name Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerLastName": "Last Name",
    "customer.newSubscriberActive.newSubscriberActiveForm.customerLastNameRule": "Last Name Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.mobileNumber": "Mobile Phone",
    "customer.newSubscriberActive.newSubscriberActiveForm.mobileNumberRule": "Mobile Phone Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.email": "Email",
    "customer.newSubscriberActive.newSubscriberActiveForm.emailRule": "Email Is Not Legal",
    "customer.newSubscriberActive.newSubscriberActiveForm.address": "Address",
    "customer.newSubscriberActive.newSubscriberActiveForm.addressIdRule": "Address Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.code": "Bouquet",
    "customer.newSubscriberActive.newSubscriberActiveForm.codeRule": "Bouquet Is Required",
    "customer.newSubscriberActive.newSubscriberActiveForm.errorCodeTitle": "Error Message",
    "customer.newSubscriberActive.newSubscriberActiveForm.smartCardCodeError": "Smart Card Code Does Not Exist",
    "customer.newSubscriberActive.newSubscriberActiveForm.stbCodeError": "STB Code Does Not Exist",
    "customer.newSubscriberActive.newSubscriberActiveForm.successTitle":"Success Message",
    "customer.newSubscriberActive.newSubscriberActiveForm.successContent":"Active Success!",
};

const CustomerService = {
    "customerService.customerService.customer": "Customer",
    "customerService.customerService.title": "Customer Service",
    "customerService.customerService.nullSubscribersTitle": "Message Alert",
    "customerService.customerService.nullSubscribersContent": "No Eligible Subscribers Found",
};

const CustomerServiceSearchForm = {
    "customer.customerService.customerServiceSearchForm.title": "Query Condition",
    "customer.customerService.customerServiceSearchForm.smartCardCode": "Smart Card Code",
    "customer.customerService.customerServiceSearchForm.mobilePhone": "Mobile Phone",
    "customer.customerService.customerServiceSearchForm.queryValueRule": "Query Value Is Required",
    "customer.customerService.customerServiceSearchForm.queryButton": "Query",
};

const SubscriberSelectModal = {
    "customer.customerService.modal.SubscriberSelectModal.title": "Please Select Subscriber",
    "customer.customerService.modal.SubscriberSelectModal.serviceCode": "Smart Card Code",
    "customer.customerService.modal.SubscriberSelectModal.subscriberStatus": "Subscriber Status",
    "customer.customerService.modal.SubscriberSelectModal.activateDate": "Activate Instance",
    "customer.customerService.modal.SubscriberSelectModal.infoTitle":"Info Message",
    "customer.customerService.modal.SubscriberSelectModal.infoContent":"Please Select A Subscriber!",
};

const ServiceInfo = {
    "customer.customerService.serviceInfo.title": "Service",
    "customer.customerService.serviceInfo.rechargeButton": "Recharge",
    "customer.customerService.serviceInfo.changeBouquetButton": "Change Bouquet",
    "customer.customerService.serviceInfo.changeCardButton": "Change Card/STB",
    "customer.customerService.serviceInfo.refreshAuthButton": "Refresh Authorization",
    "customer.customerService.serviceInfo.serviceCode": "Smart Card",
    "customer.customerService.serviceInfo.subscriberStatus": "Status",
    "customer.customerService.serviceInfo.balance": "Balance",
    "customer.customerService.serviceInfo.estimatedStopDate": "Stop Time",
    "customer.customerService.serviceInfo.stbType": "Decorder Type",
    "customer.customerService.serviceInfo.stbCode": "STB Number",
    "customer.customerService.serviceInfo.displayName": "Main Bouquet",
    "customer.customerService.serviceInfo.subsidiaryOfferDisplayName": "Other Bouquet",
};

const CustomerServiceRechargeModal = {
    "customer.customerService.modal.rechargeModal.title": "Recharge",
    "customer.customerService.modal.rechargeModal.rechargeType": "Recharge Type",
    "customer.customerService.modal.rechargeModal.rechargeTypeRule": "Recharge Type Is Required",
    "customer.customerService.modal.rechargeModal.currentBouquet": "Current Bouquet",
    "customer.customerService.modal.rechargeModal.businessClass": "Business Class",
    "customer.customerService.modal.rechargeModal.businessClassRule": "Business Class Is Required",
    "customer.customerService.modal.rechargeModal.productCode": "Bouquet",
    "customer.customerService.modal.rechargeModal.productCodeRule": "Bouquet Is Required",
    "customer.customerService.modal.rechargeModal.pin": "Pay Pin",
    "customer.customerService.modal.rechargeModal.pinRule": "Pay Pin Is Required",
    "customer.customerService.modal.rechargeModal.checkCode": "Check Code",
    "customer.customerService.modal.rechargeModal.checkCodeRule": "Check Code Is Required",
    "customer.customerService.modal.rechargeModal.changeBouquetBox": "Change Bouquet",
    "customer.customerService.modal.rechargeModal.duration":"Duration",
    "customer.customerService.modal.rechargeModal.durationRule":"Duration Is Required",
    "customer.customerService.modal.rechargeModal.durationItem.one":"One Month",
    "customer.customerService.modal.rechargeModal.durationItem.three":"Tree Months",
    "customer.customerService.modal.rechargeModal.durationItem.six":"Six Months",
    "customer.customerService.modal.rechargeModal.durationItem.twelve":"Twelve Months",
    "customer.customerService.modal.rechargeModal.durationItem.other":"Months",
    "customer.customerService.modal.rechargeModal.money":"Money",
    "customer.customerService.modal.rechargeModal.successTitle":"Success Message",
    "customer.customerService.modal.rechargeModal.successContent":"Recharge Success!",
};

const ChangeBouquetModal = {
    "customer.customerService.modal.changeBouquetModal.title": "Change Bouquet",
    "customer.customerService.modal.changeBouquetModal.currentBouquet": "Current Bouquet",
    "customer.customerService.modal.changeBouquetModal.businessClass": "Business Class",
    "customer.customerService.modal.changeBouquetModal.businessClassRule": "Business Class Is Required",
    "customer.customerService.modal.changeBouquetModal.productCode": "Bouquet",
    "customer.customerService.modal.changeBouquetModal.productCodeRule": "Bouquet Is Required",
    "customer.customerService.modal.changeBouquetModal.checkCode": "Check Code",
    "customer.customerService.modal.changeBouquetModal.checkCodeRule": "Check Code Is Required",
    "customer.customerService.modal.changeBouquetModal.checkCodeError": "Check Code Is Error",
    "customer.customerService.modal.changeBouquetModal.successTitle":"Success Message",
    "customer.customerService.modal.changeBouquetModal.successContent":"Change Bouquet Success!",
};

const ChangeCardModal = {
    "customer.customerService.modal.changeCardModal.title": "Change Card/STB",
    "customer.customerService.modal.changeCardModal.smartCardCheckBox": "Smart Card Change",
    "customer.customerService.modal.changeCardModal.stbCheckBox": "STB/TV Change",
    "customer.customerService.modal.changeCardModal.newCode": "New Code",
    "customer.customerService.modal.changeCardModal.newCodeRule": "New Code Is Required",
    "customer.customerService.modal.changeCardModal.resourceStatus": "Old Status",
    "customer.customerService.modal.changeCardModal.resourceStatusRule": "Old Status Is Required",
    "customer.customerService.modal.changeCardModal.checkCode": "Check Code",
    "customer.customerService.modal.changeCardModal.checkCodeRule": "Check Code Is Required",
    "customer.customerService.modal.changeCardModal.successTitle":"Success Message",
    "customer.customerService.modal.changeCardModal.successContent":"Change Card Success",
};

const RefreshAuthModal = {
    "customer.customerService.modal.refreshAuthModal.title": "Refresh Authorization",
    "customer.customerService.modal.refreshAuthModal.reason": "Reason",
    "customer.customerService.modal.refreshAuthModal.reasonRule": "Reason Is Required",
    "customer.customerService.modal.refreshAuthModal.checkCode": "Check Code",
    "customer.customerService.modal.refreshAuthModal.checkCodeRule": "Check Code Is Required",
    "customer.customerService.modal.refreshAuthModal.successTitle":"Success Message",
    "customer.customerService.modal.refreshAuthModal.successContent":"Refresh Authorization Success!",
};

const CustomerInfo = {
    "customer.customerService.customerInfo.title": "Customer Info",
    "customer.customerService.customerInfo.firstName": "FirstName",
    "customer.customerService.customerInfo.lastName": "Last Name",
    "customer.customerService.customerInfo.mobile": "Mobile",
    "customer.customerService.customerInfo.email": "Email",
    "customer.customerService.customerInfo.saleAreaName": "Sale Area",
    "customer.customerService.customerInfo.fullAddress": "Full Address",
    "customer.customerService.customerInfo.modifyButton": "Modify",
};

const CustomerModal = {
    "customer.customerService.modal.customerModal.title": "Modify Customer",
    "customer.customerService.modal.customerModal.firstName": "First Name",
    "customer.customerService.modal.customerModal.firstNameRule": "First Name Is Required",
    "customer.customerService.modal.customerModal.lastName": "Last Name",
    "customer.customerService.modal.customerModal.lastNameRule": "Last Name Is Required",
    "customer.customerService.modal.customerModal.mobile": "Mobile",
    "customer.customerService.modal.customerModal.mobileRule": "Mobile Is Required",
    "customer.customerService.modal.customerModal.email": "Email",
    "customer.customerService.modal.customerModal.emailRule": "Email Is Required",
    "customer.customerService.modal.customerModal.address": "Address",
    "customer.customerService.modal.customerModal.addressRule": "Address Is Required",
    "customer.customerService.modal.customerModal.successTitle":"Success Message",
    "customer.customerService.modal.customerModal.successContent":"Modify Success!",
};

const BalanceChange = {
    "balanceChange.balanceChange.report": "Report",
    "balanceChange.balanceChange.title": "Balance Change",
    "balanceChange.balanceChange.exportSuccess": "Export Success",
};

const BalanceChangeSearchForm = {
    "report.balanceChange.balanceChangeSearchForm.title": "Query Condition",
    "report.balanceChange.balanceChangeSearchForm.partnerName": "Dealer",
    "report.balanceChange.balanceChangeSearchForm.partnerNameRule": "Dealer Is Required",
    "report.balanceChange.balanceChangeSearchForm.partnerAccountName": "Account",
    "report.balanceChange.balanceChangeSearchForm.partnerAccountNameRule": "Account Is Required",
    "report.balanceChange.balanceChangeSearchForm.date": "Date",
    "report.balanceChange.balanceChangeSearchForm.dateRule": "Date Is Required",
    "report.balanceChange.balanceChangeSearchForm.dateItem.today": "Today",
    "report.balanceChange.balanceChangeSearchForm.dateItem.latestWeek": "Latest Week",
    "report.balanceChange.balanceChangeSearchForm.dateItem.latestMonth": "Latest Month",
    "report.balanceChange.balanceChangeSearchForm.dateItem.other": "Other",
    "report.balanceChange.balanceChangeSearchForm.queryButton": "Query",
    "report.balanceChange.balanceChangeSearchForm.resetButton": "Reset",
};

const BalanceChangeQueryResult = {
    "report.balanceChange.BalanceChangeQueryResult.title": "Query Result",
    "report.balanceChange.BalanceChangeQueryResult.intoOutTab": "Into/Out",
    "report.balanceChange.BalanceChangeQueryResult.salesTab": "Sales",
    "report.balanceChange.BalanceChangeQueryResult.exportButton": "Export",
};

const BalanceChangeList = {
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.createInstant": "Date",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.amount": "Money",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.lastAmount": "Balance",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.fromAccountName": "From Account",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.toAccountName": "To Account",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.createCode": "Operator",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.totalNumber":"Total Number",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.totalAmount":"Total Amount",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.intoNumber":"Into Number",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.intoAmount":"Into Amount",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.outNumber":"Out Number",
    "report.balanceChange.balanceChangeQueryResult.balanceChangeList.outAmount":"Out Amount",
};

const BalanceSaleList = {
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.createInstant": "Date",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.money": "Money",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.cardValue": "Card Value",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.number": "Number",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.mobile": "Mobile",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.smartCard": "Smart Code",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.type": "Sale Type",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.createCode": "Saler",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.totalNumber":"Total Number",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.totalAmount":"Total Amount",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.remoteTopUpNumber":"Remote Top-up Number",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.remoteTopUpAmount":"Remote Top-up Amount",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.voucherCardNumber":"Voucher Card Number",
    "report.balanceChange.balanceChangeQueryResult.balanceSaleList.voucherCardAmount":"Voucher Card Amount",

    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.createInstant": "Date",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.money": "Money",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.cardValue": "Card Value",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.number": "Number",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.mobile": "Mobile",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.smartCard": "Smart Code",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.type": "Sale Type",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.createCode": "Saler",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.totalNumber":"Total Number",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.totalAmount":"Total Amount",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.remoteTopUpNumber":"Remote Top-up Number",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.remoteTopUpAmount":"Remote Top-up Amount",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.voucherCardNumber":"Voucher Card Number",
    "report.balanceSale.balanceSaleQueryResult.balanceSaleList.voucherCardAmount":"Voucher Card Amount",
};

const ActivationSubscriber = {
    "activationSubscriber.activationSubscriber.report": "Report",
    "activationSubscriber.activationSubscriber.title": "Activation Subscriber",
    "activationSubscriber.activationSubscriber.exportSuccess": "Export Success",
};

const ActivationSubscriberSearchForm = {
    "report.activationSubscriber.activationSubscriberSearchForm.title": "Query Condition",
    "report.activationSubscriber.activationSubscriberSearchForm.saler": "Saler",
    "report.activationSubscriber.activationSubscriberSearchForm.salerRule": "Saler Is Required",
    "report.activationSubscriber.activationSubscriberSearchForm.date": "Date",
    "report.activationSubscriber.activationSubscriberSearchForm.dateRule": "Date Is Required",
    "report.activationSubscriber.activationSubscriberSearchForm.dateItem.today": "Today",
    "report.activationSubscriber.activationSubscriberSearchForm.dateItem.latestWeek": "Latest Week",
    "report.activationSubscriber.activationSubscriberSearchForm.dateItem.latestMonth": "Latest Month",
    "report.activationSubscriber.activationSubscriberSearchForm.dateItem.other": "Other",
    "report.activationSubscriber.activationSubscriberSearchForm.bouquet": "Bouquet",
    "report.activationSubscriber.activationSubscriberSearchForm.smartCardCode": "Smart Card",
    "report.activationSubscriber.activationSubscriberSearchForm.stbCode": "Decoder/TV",
    "report.activationSubscriber.activationSubscriberSearchForm.queryButton": "Query",
    "report.activationSubscriber.activationSubscriberSearchForm.resetButton": "Reset",
};

const ActivationSubscriberList = {
    "report.activationSubscriber.activationSubscriberQueryResult.title": "Query Result",
    "report.activationSubscriber.activationSubscriberQueryResult.exportButton": "Export",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.createInstant": "Date",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.smartCardCode": "Smart Code",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.stbCode": "Decoder/TV S/N",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.customerName": "Customer",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.mobile": "Mobile Phone",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.bouquet": "Bouquet",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.createCode": "Saler",
    "report.activationSubscriber.activationSubscriberQueryResult.activationSubscriberList.totalNumber": "Total Number",
};

const BalanceSaleSearchForm = {
    "report.balanceSale.balanceSaleSearchForm.title":"Query Condition",
    "report.balanceSale.balanceSaleSearchForm.saleTypeAll":"ALL",
    "report.balanceSale.balanceSaleSearchForm.saleTypeRemoteTopUp":"Remote Top-up",
    "report.balanceSale.balanceSaleSearchForm.saleTypeVoucherCard":"Voucher Card",
    "report.balanceSale.balanceSaleSearchForm.lowerDealer":"Sub Agent",
    "report.balanceSale.balanceSaleSearchForm.dealerType":"Agent Type",
    "report.balanceSale.balanceSaleSearchForm.saler":"Saler",
    "report.balanceSale.balanceSaleSearchForm.saleType":"Sale Type",
    "report.balanceSale.balanceSaleSearchForm.salerRule":"Saler Is Required",
    "report.balanceSale.balanceSaleSearchForm.date":"Date",
    "report.balanceSale.balanceSaleSearchForm.dateRule":"Date Is Required",
    "report.balanceSale.balanceSaleSearchForm.dateItem.today":"Today",
    "report.balanceSale.balanceSaleSearchForm.dateItem.latestWeek":"Latest Week",
    "report.balanceSale.balanceSaleSearchForm.dateItem.latestMonth":"Latest Month",
    "report.balanceSale.balanceSaleSearchForm.dateItem.other":"Other",
    "report.balanceSale.balanceSaleSearchForm.bouquet":"Bouquet",
    "report.balanceSale.balanceSaleSearchForm.smartCardCode":"Smart Code",
    "report.balanceSale.balanceSaleSearchForm.mobile":"Mobile Phone",
    "report.balanceSale.balanceSaleSearchForm.queryButton":"Query",
    "report.balanceSale.balanceSaleSearchForm.resetButton":"Reset",
    "report.balanceSale.balanceSaleSearchForm.partnerName":"Agent",
    "report.balanceSale.balanceSaleSearchForm.partnerNameRule":"Agent Is Required"
};

const BalanceSaleQueryResult = {
    "report.balanceSale.balanceSaleQueryResult.title":"Query Result",
    "report.balanceSale.balanceSaleQueryResult.exportButton":"Export",
    "report.balanceSale.balanceSaleQueryResult.resendMessage":"Resend Message",
};

const BalanceSaleRoutes = {
    "balanceSale.balanceSale.report":"Total Number",
    "balanceSale.balanceSale.title":"Balance Sale Query",
    "balanceSale.balanceSale.exportSuccess":"Export Success",
    "balanceSale.balanceSale.sendSuccess":"Send Message Success",
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
