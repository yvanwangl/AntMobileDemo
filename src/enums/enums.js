/**
 * Created by wyf on 2017/3/14.
 */
/*账户类型*/
const accountType = [
    /*自身账户*/
    'self',
    /*所属组织账户*/
    'belongOrganization',
    /*根组织的账户*/
    'rootOrganization'
];

/*员工类型*/
const staffType = [
    /*管理员*/
    'admin',
    /*普通人员*/
    'normal'
];

/*可激活产品配置业务分类*/
const businessClass = [
    /*DTH*/
    'DTH',
    /*DTT*/
    'DTT',
    /*TV*/
    'TV'
];

/*客户下用户状态*/
const subscriberStatus = [
    /*无效*/
    'invalid',
    /*有效*/
    'valid',
    /*报停*/
    'pause',
    /*罚停*/
    'punishStop'
];

/*客户查询条件*/
const querySubscribersType = [
    /*智能卡号*/
    'smartCard',
    /*移动电话*/
    'phone'
];

/*额度销售类型*/
const partnerBalanceSalesType = [
    /*包含下面两个*/
    'all',
    /*电子卡销售*/
    'electronicCardSale',
    /*为客户充值使用*/
    'rechargeForCustomer'
];

export default {
    accountType,
    staffType,
    businessClass,
    subscriberStatus,
    querySubscribersType,
    partnerBalanceSalesType
};