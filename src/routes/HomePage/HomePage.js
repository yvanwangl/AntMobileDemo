import React, {Component, PropTypes} from 'react';
import {connect} from 'dva';
import {FormattedMessage, defineMessages} from 'react-intl';
import {menus, messages} from './menus';
import TabBarNav from '../../components/Common/TabBarNav/TabBarNav';
import styles from './index.css';

class HomePage extends Component {

    constructor(props) {
        //super函数的调用要放在constructor函数的最顶端
        super(props);
    }

    //propTypes 静态属性声明
/*    static propTypes = {
        isAdmin: PropTypes.bool.isRequired,
        children: PropTypes.object.isRequired
    };*/

    render() {
        const {children} = this.props;
        return (
            <div className={styles.homePage}>
                <TabBarNav tabBarChildren={children}/>
            </div>
        );
    }
}

export default HomePage;
