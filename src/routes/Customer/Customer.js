import React from 'react';
import {connect} from 'dva';
import styles from './index.css';

function Customer({children}) {
    return (
        <div className={styles.normal}>
            <span>我是客户模块</span>
            {children}
        </div>
    );
}

Customer.propTypes = {};

export default connect()(Customer);
