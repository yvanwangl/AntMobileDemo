import React from 'react';
import {connect} from 'dva';
import {injectIntl, FormattedMessage, defineMessages} from 'react-intl';
import styles from './index.css';

const messages = defineMessages({
    notFound: {
        id: 'notFoundPage.message',
        defaultMessage: '您访问的页面被外星人劫持了:(',
    },
    backTo: {
        id: 'notFoundPage.back',
        defaultMessage: '回到首页',
    }
});

function NotFoundPage({intl}) {
    return (
        <div className={styles.notFoundPage}>
            <FormattedMessage {...messages.notFound}/>
            <div>
                <a href="/">
                    <FormattedMessage {...messages.backTo}/>
                </a>
            </div>
        </div>
    );
}

NotFoundPage.propTypes = {};

export default injectIntl(NotFoundPage, {
    withRef: true,
});
