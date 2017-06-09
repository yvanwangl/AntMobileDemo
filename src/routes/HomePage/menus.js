/**
 * Created by hanlu on 2017/3/1.
 */
import {defineMessages} from 'react-intl';
/*[key, name, icon, [
 [childKey, childName, childTarget]
 ]]*/
const menus = [
    ['dealer', 'dealer', 'user', [
        ['dealerOrganization', 'dealerOrganization', '/dealerOrganization'],
        ['subDealer', 'subDealer', '/subDealer'],
    ]],
    ['customer', 'customer', 'team', [
        ['newSubscriberActive', 'newSubscriberActive', '/newSubscriberActive'],
        ['customerService', 'customerService', '/customerService'],
        ['cardSale', 'cardSale', '/cardSale'],
    ]],
    ['report', 'report', 'file', [
        ['balanceChange', 'balanceChange', '/balanceChange'],
        ['balanceSale', 'balanceSale', '/balanceSale'],
        ['activationSubscriber', 'activationSubscriber', '/activationSubscriber'],
    ]],
];

let defaultMessages = {
    dealer: '代理商管理',
    dealerOrganization: '代理商组织管理',
    subDealer: '下级代理商管理',
    customer: '客户服务',
    newSubscriberActive: '新用户激活',
    customerService: '客户服务',
    cardSale: '电子卡销售',
    report: '查询统计',
    balanceChange: '额度变更查询',
    balanceSale: '额度销售查询',
    activationSubscriber: '激活用户查询',
};

let messageObj = {};

const fillName = (name) => {
    messageObj[name] = {
        id: `homePage.menuList.${name}`,
        defaultMessage: defaultMessages[name]
    };
};

menus.map(([key, name, icon, children]) => {
    fillName(name);
    children.map(([key, name]) => {
        fillName(name);
    })
});

const messages = defineMessages(messageObj);

export default {
    menus,
    messages
};
