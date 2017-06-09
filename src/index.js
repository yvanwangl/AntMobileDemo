import dva from 'dva';
import './index.less';
import {browserHistory} from 'dva/router';
import {LocaleProvider} from 'antd-mobile';
import {addLocaleData, IntlProvider} from 'react-intl';
import createLoading from 'dva-loading';
import ReactDOM from 'react-dom';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/login'));

// 4. Router
app.router(require('./router/router'));

// 5. Start
const App = app.start();

//il8n
const appLocale = window.appLocale;
addLocaleData(appLocale.data);
ReactDOM.render(
    <LocaleProvider locale={appLocale.antdMobile}>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
            <App />
        </IntlProvider>
    </LocaleProvider>,
    document.getElementById("root")
);
