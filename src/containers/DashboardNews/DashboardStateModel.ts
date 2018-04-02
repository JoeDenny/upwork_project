import NewsModel from '../../models/NewsModel';
import TeamModel from '../../models/TeamModel';
import PlayerModel from '../../models/PlayerModel';
import SourceModel from '../../models/SourceModel';

export default interface DashboardStateModel {
    activeNews?: NewsModel;
    news?: NewsModel[];
    teams?: TeamModel[];
    players?: PlayerModel[];
    sources?: SourceModel[];
    settings?: any[];
}