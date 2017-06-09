
export default {
    /*登录接口*/
    'POST /login': (req, res) => {
        res.send({
            success: true,
            data: {
                id:1,
                username: '张三',
                partnerCode: '100056',
                admin: true
            }
        });
    },
    /*退出接口*/
    'POST /logout': (req, res) => {
        res.send({
            success: true
        });
    },
};
