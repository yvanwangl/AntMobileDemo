import {login, logout, getCurrentUser} from '../services/login';
import {routerRedux} from 'dva/router';

export default {

    namespace: 'login',

    state: {
        username: '',
        password: '',
        isLogin: false,
        isAdmin: false,
        userId: null,
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            history.listen(location => {
                if(location.pathname.match(/\//)){
                    if(sessionStorage.getItem('userInfo')){
                        dispatch({
                            type: 'loginSuccess',
                            data: JSON.parse(sessionStorage.getItem('userInfo'))
                        });
                    }
                }
            });
        },
    },

    effects: {
        *doLogin({payload}, {call, put, select}) {  // eslint-disable-line
            //let {data} = yield call(login, payload);
            //手机测试使用
            let data = {
                success: true,
                data: {
                    id:1,
                    username: '张三',
                    partnerCode: '100056',
                    admin: true
                }
            };
            if (data && data.success) {
                const userData = data.data;
                yield put({
                    type: 'loginSuccess',
                    data: userData
                });
                yield sessionStorage.setItem('userInfo', JSON.stringify(userData));
                if (userData.admin) {
                    yield put(routerRedux.push('/home'));
                } else {
                    yield put(routerRedux.push('/home'));
                }

            }
        },
        *doLogout({payload}, {call, put, select}){
            const userId = yield select(({login})=> login.userId);
            const {data} = yield call(logout, {userId});
            if (data && data.success) {
                yield put({
                    type: 'logoutSuccess'
                });
                yield sessionStorage.setItem('userInfo', '');
                yield put(routerRedux.push('/login'));
            }
        },
    },

    reducers: {
        loginSuccess(state, action) {
            let data = action.data;
            return {...state, isLogin: true, isAdmin: data.admin, userId:data.userId};
        },
        logoutSuccess(state, action){
            return {...state, isLogin: false, isAdmin: false, userId:null, userInfo:{}};
        }
    },

};
