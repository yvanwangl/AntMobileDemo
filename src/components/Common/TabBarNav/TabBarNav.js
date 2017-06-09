import React, {PropTypes} from 'react';
import {Link} from 'dva/router';
import {injectIntl, FormattedMessage} from 'react-intl';
import { TabBar, Icon } from 'antd-mobile';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import messages from './messages';
import styles from './index.css';
const shoppingCart = require('../../../assets/svg/shopping-cart.svg');
const dollar = require('../../../assets/svg/dollar.svg');
const home = require('../../../assets/svg/home.svg');
const user = require('../../../assets/svg/user.svg');
import Customer from '../../../routes/Customer/Customer';
import Agent from '../../../routes/Agent/Agent';
import Store from '../../../routes/Store/Store';
import User from '../../../routes/User/User';

const TabBarItem = TabBar.Item;
const selectIconColor="#33a3f4";

class TabBarNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    点击切换 tab-bar 显示/隐藏
                </a>
            </div>
        );
    }

    render() {
        const {intl: {formatMessage}, tabBarChildren, dispatch} = this.props;
        return (
            <div className={styles.tabBar}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBarItem
                        title={formatMessage(messages.customer)}
                        key='customer'
                        icon={<Icon type={shoppingCart} size="md" />}
                        selectedIcon={<Icon type={shoppingCart} color={selectIconColor} size="md" />}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            //dispatch(routerRedux.push('/customer/customer'));
                        }}
                        data-seed="logId"
                    >
                        <Customer />
                    </TabBarItem>
                    <TabBarItem
                        icon={<Icon type={dollar} size="md" />}
                        selectedIcon={<Icon type={dollar} color={selectIconColor} size="md" />}
                        title={formatMessage(messages.agent)}
                        key="agent"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                            //dispatch(routerRedux.push('/agent/agent'));
                        }}
                        data-seed="logId1"
                    >
                        <Agent />
                    </TabBarItem>
                    <TabBarItem
                        icon={<Icon type={home} size="md"/>}
                        selectedIcon={<Icon type={home} color={selectIconColor} size="md"/>}
                        title={formatMessage(messages.store)}
                        key='store'
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                            //dispatch(routerRedux.push('/store/store'));
                        }}
                    >
                        <Store />
                    </TabBarItem>
                    <TabBarItem
                        icon={<Icon type={user} size="md"/>}
                        selectedIcon={<Icon type={user} color={selectIconColor} size="md"/>}
                        title={formatMessage(messages.me)}
                        key='me'
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                            //dispatch(routerRedux.push('/user/user'));
                        }}
                    >
                        <User />
                    </TabBarItem>
                </TabBar>
            </div>
        );
    }
}



/*高阶组件包装*/
export default injectIntl( connect()(TabBarNav), {
    withRef: true,
});
