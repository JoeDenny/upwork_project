import UserModel from '../../models/UserModel';

export default interface AuthStateModel {
    token?: string;
    user?: UserModel;
    sources?: any[];
}