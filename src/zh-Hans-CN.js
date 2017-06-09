import appLocaleData from 'react-intl/locale-data/zh';
import zhMessages from '../locales/zh-Hans-CN.messages';

//noinspection JSAnnotator
window.appLocale = {
    messages: {
        ...zhMessages,
    },
    antdMobile: null,
    locale: 'zh-Hans-CN',
    data: appLocaleData,
};
