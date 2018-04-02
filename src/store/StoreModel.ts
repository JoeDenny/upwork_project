import AuthStateModel from '../containers/Auth/AuthStateModel';
import DashboardStateModel from '../containers/DashboardNews/DashboardStateModel';

export default interface StoreModel {
    auth: AuthStateModel;
    dashboard: DashboardStateModel;
}
