import request from '../../services/Request';
import UserModel from '../../models/UserModel';

interface AuthResponse {
    config: any;
    data: {
        success: boolean;
        token: string;
        user: UserModel;
    };
    headers: any;
    request: any;
    status: number;
    statusText: string;
}

interface UserSourcesResponse {
    data: {
        success: boolean;
        collections: any[];
    };
}

export const LOGIN_SUCCESS = '[Auth] Login success';
export const loginSuccess = (token: string, user: UserModel) => ({
    type: LOGIN_SUCCESS,
    payload: {
        token,
        user
    }
});

export const REGISTER_SUCCESS = '[Auth] Register success';
export const registerSuccess = (token: string, user: UserModel) => ({
    type: REGISTER_SUCCESS,
    payload: {
        token,
        user
    }
});

export const SAVE_USER_SOURCES = '[User] Save user sources';
export const saveUserSources = (sources: any[]) => ({
    type: SAVE_USER_SOURCES,
    payload: {
        sources
    }
});

export const LOGOUT = '[Auth] Logout';
export const logout = () => ({
    type: LOGOUT
});

export const getUserSources = () => {
    return (dispatch: Function) => {
        request.send('get', 'api/user/sources')
            .then((res: UserSourcesResponse) => {
                console.log(res);
            });
    };
};

export const login = (email: string, password: string) => {
    return (dispatch: Function) => {
        request.send('post', 'api/login', {
            email,
            password
        }).then((res: AuthResponse) => {
            dispatch(loginSuccess(
                res.data.token,
                res.data.user
            ));
            dispatch(getUserSources());
        });
    };
};

export const register = (formData: FormData) => {
    return (dispatch: Function) => {
        request.send('post', 'api/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res: AuthResponse) => {
            dispatch(registerSuccess(
                res.data.token,
                res.data.user
            ));
        });
    };
};