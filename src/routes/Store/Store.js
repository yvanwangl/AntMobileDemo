import React from 'react';
import {connect} from 'dva';
import styles from './index.css';

function Store({children}) {
    return (
        <div className={styles.normal}>
            <span>我是商店模块</span>
            {children}
        </div>
    );
}

Store.propTypes = {};

export default connect()(Store);
