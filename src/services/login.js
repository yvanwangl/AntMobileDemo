import request from '../utils/request';

export async function login(params) {
    return request('/login', {
        method: 'post',
        body: JSON.stringify(params)
    });
}

export async function logout({userId}) {
    return request('/logout', {
        method: 'post',
        body: JSON.stringify({
            userId
        })
    });
}

export async function getCurrentUser() {
    return request('/api/user-info/get-current-user');
}
