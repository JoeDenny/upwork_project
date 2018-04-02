import AuthStateModel from './AuthStateModel';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, SAVE_USER_SOURCES } from './actions';
import request from '../../services/Request';

const initState = {
    token: undefined,
    user: undefined,
    sources: undefined
};

const auth = (state: AuthStateModel = initState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            request.saveToken(action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
        case SAVE_USER_SOURCES:
            return {
                ...state,
                sources: action.payload.sources
            };
        default:
            return state;
    }
};

export default auth;