/**
 * Created by hanlu on 2017/2/28.
 */
/*跨域请求配置参数修改*/

//跨域请求url
//const httpServer = 'http://localhost:8086/agent-web';
//const httpServer = 'http://192.168.20.193:9090/agent-web';

// 同域请求url
const httpServer = 'http://192.168.20.180:8080/agent-web';

//跨域请求头配置
/*const defaultOptions = {
    mode: 'cors',
    credentials: 'include',
    headers: {
        'content-type': 'application/json'
    },
};*/

//同域请求头配置
const defaultOptions = {
    credentials: 'same-origin',
    headers: {
        'content-type': 'application/json'
    },
};

const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 16
    }
};

const formItemHiddenStyle = {
    margin: 0
};

export default {
    httpServer,
    defaultOptions,
    formItemLayout,
    formItemHiddenStyle
};
