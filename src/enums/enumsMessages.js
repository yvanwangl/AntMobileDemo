/**
 * Created by wyf on 2017/3/14.
 */
import {defineMessages} from 'react-intl';

const enumsMessages = defineMessages({
    accountType: {
        self: {
            id: 'accountType.self',
            defaultMessage: '自身账户'
        },
        belongOrganization: {
            id: 'accountType.belongOrganization',
            defaultMessage: '所属组织账户'
        },
        rootOrganization: {
            id: 'accountType.rootOrganization',
            defaultMessage: '根组织的账户'
        }
    },
    staffType: {
        admin: {
            id: 'staffType.admin',
            defaultMessage: '管理员'
        },
        normal: {
            id: 'staffType.normal',
            defaultMessage: '普通人员'
        }
    },
    businessClass: {
        DTH: {
            id: 'businessClass.DTH',
            defaultMessage: 'DTH'
        },
        DTT: {
            id: 'businessClass.DTT',
            defaultMessage: 'DTT'
        },
        TV: {
            id: 'businessClass.TV',
            defaultMessage: 'TV'
        }
    },
    subscriberStatus: {
        invalid: {
            id: 'subscriberStatus.invalid',
            defaultMessage: '无效'
        },
        valid: {
            id: 'subscriberStatus.valid',
            defaultMessage: '有效'
        },
        pause: {
            id: 'subscriberStatus.pause',
            defaultMessage: '报停'
        },
        punishStop: {
            id: 'subscriberStatus.punishStop',
            defaultMessage: '罚停'
        }
    },
    querySubscribersType: {
        smartCard: {
            id: 'querySubscribersType.smartCard',
            defaultMessage: '智能卡号'
        },
        phone: {
            id: 'querySubscribersType.phone',
            defaultMessage: '移动电话'
        }
    },
    partnerBalanceSalesType:{
        all: {
            id: 'partnerBalanceSalesType.all',
            defaultMessage: '全部'
        },
        electronicCardSale: {
            id: 'partnerBalanceSalesType.electronicCardSale',
            defaultMessage: '电子卡销售'
        },
        rechargeForCustomer: {
            id: 'partnerBalanceSalesType.rechargeForCustomer',
            defaultMessage: '直充'
        },
    }
});

export default enumsMessages;
