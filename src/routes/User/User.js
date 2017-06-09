import React from 'react';
import {connect} from 'dva';
import styles from './index.css';

function User({children}) {
    return (
        <div className={styles.normal}>
            <span>我是用户模块</span>
            {children}
        </div>
    );
}

User.propTypes = {};

export default connect()(User);
