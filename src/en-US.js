/**
 * Created by wyf on 2017/2/27.
 */
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/en';
import enMessages from '../locales/en-US.messages';

//noinspection JSAnnotator
window.appLocale = {
    messages: {
        ...enMessages,
    },
    antdMobile: enUS,
    locale: 'en-US',
    data: appLocaleData,
};
