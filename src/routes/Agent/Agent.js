import React from 'react';
import {connect} from 'dva';
import styles from './index.css';

function Agent({children}) {
    return (
        <div className={styles.normal}>
            <span>我是代理商模块</span>
            {children}
        </div>
    );
}

Agent.propTypes = {};

export default connect()(Agent);
