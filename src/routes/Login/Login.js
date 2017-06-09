import React, {PropTypes, Component} from 'react';
import {connect} from 'dva';
import {injectIntl, FormattedMessage} from 'react-intl';
import {Flex, List, InputItem, WhiteSpace, Button} from 'antd-mobile';
import {createForm} from 'rc-form';
import logo from '../../assets/logo.png';
import messages from './messages';
import styles from './index.css';

/*
 * 函数组件尽量使用 function fnName(){} 声明，
 * const fnName = ()=>{} 这种匿名函数的声明方式在babel配置错误的情况下会产生隐含的难以理解的bug，
 * 而且也会导致某些测试库如 Jest 的问题，所以不建议使用
 * 参数中要解构 props 对象，如下所示
 * */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    /*
     * 要在最顶端声明propTypes，使它们优先可见
     * 只需要声明我们自己传入的属性
     * */
    /*    static propTypes = {
     login: PropTypes.object.isRequired
     };*/

    /*登录按钮点击事件*/
    enterLoading = () => {
        this.setState({
            loading: true
        });
    };

    /*
     * 在账户密码错误的情况下
     * 如果重新输入，则重置loading=false
     * */
    resetLoading = () => {
        if (this.state.loading) {
            this.setState({
                loading: false
            });
        }
    };

    /*登录表单提交事件*/
    handleSubmit = (e) => {
        const {dispatch, form} = this.props;
        e.preventDefault();
        form.validateFields((error, values)=>{
            if(!!error){
                return;
            }
            dispatch({
                type: 'login/doLogin',
                payload: {
                    ...values
                }
            });
        });
    };

    render() {
        const {intl: {formatMessage}, form} = this.props;
        const {getFieldProps} = form;
        const {loading} = this.state;
        return (
            <Flex direction="column" align="stretch" justify="between">
                <div>
                    <h2 className={styles.title}>
                        <FormattedMessage {...messages.title.welcome}/>
                    </h2>
                    <h2 className={styles.title}>
                        <FormattedMessage {...messages.title.startimes}/>
                    </h2>
                </div>
                <div style={{textAlign: 'center', height: '300px'}}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                </div>
                <List style={{margin: '0 0.3rem'}}>
                    <InputItem
                        {...getFieldProps('username', {
                            rules: [
                                {
                                    required: true
                                }
                            ],
                        })}
                        className={styles.formInput}
                        placeholder={formatMessage(messages.username.label)}
                    >
                    </InputItem>
                    <InputItem
                        {...getFieldProps('password', {
                            rules: [
                                {
                                    required: true
                                }
                            ],
                        })}
                        type="password"
                        className={styles.formInput}
                        placeholder={formatMessage(messages.password.label)}
                    >
                    </InputItem>
                </List>
                <WhiteSpace />
                <Button className={styles.btn} type="primary" onClick={this.handleSubmit}>
                    <FormattedMessage {...messages.login}/>
                </Button>
            </Flex>
        );
    }
}

function mapStateToProps({login}) {
    return {login};
}

/*高阶组件包装*/
export default injectIntl(connect(mapStateToProps)(createForm()(Login)), {
    withRef: true,
});
