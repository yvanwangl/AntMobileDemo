import React from 'react';
import {connect} from 'dva';
import styles from './index.css';

function IndexPage({children}) {
    return (
        <div className={styles.normal}>
            {children}
        </div>
    );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
