/**
 * Created by wyf on 2017/3/3.
 */
import {defineMessages} from 'react-intl';

const messages = defineMessages({
    title: {
        welcome: {
            id: 'common.login.title.welcome',
            defaultMessage: 'Welcome to'
        },
        startimes: {
            id: 'common.login.title.startimes',
            defaultMessage: 'StarTimes Mobile BOSS'
        }
    },
    username: {
        label: {
            id: 'common.login.username.label',
            defaultMessage: 'Operator Code / Mobile Number'
        },
        vtype: {
            id: 'common.login.username.vtype',
            defaultMessage: 'Username Is Required'
        }
    },
    password: {
        label: {
            id: 'common.login.password.label',
            defaultMessage: 'Password'
        },
        vtype: {
            id: 'common.login.password.vtype',
            defaultMessage: 'Password Is Required'
        }
    },
    forgotPass: {
        id: 'common.login.forgotPass',
        defaultMessage: 'Forgot Password'
    },
    login: {
        id: 'common.login.login',
        defaultMessage: 'Login'
    },
});

export default messages;
