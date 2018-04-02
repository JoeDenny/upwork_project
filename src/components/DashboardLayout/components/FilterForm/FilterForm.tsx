import * as React from 'react';
import './FilterForm.css';
import { addSetting } from '../../../../containers/DashboardNews/actions';
import FilterResult from './components/FilterResult';
import FilterSearch from './components/FilterSearch';
import FilterList from './components/FilterList';
import StoreModel from '../../../../store/StoreModel';
import TeamModel from '../../../../models/TeamModel';
import PlayerModel from '../../../../models/PlayerModel';
import SourceModel from '../../../../models/SourceModel';
// import TeamSelect from './components/TeamSelect';
// import FilterCheckboxes from './components/FilterCheckboxes';
// import AddSource from './components/AddSource';
import { connect } from 'react-redux';

interface StateProps {
    settings?: any[];
    teams?: TeamModel[];
    players?: PlayerModel[];
    sources?: SourceModel[];
}
interface State {
    queryString?: string;
}

interface ActionProps {
    addSetting: Function;
}
class FilterForm extends React.Component<StateProps & ActionProps, State> {
    state: State = {
        queryString: undefined
    };

    onChange = (queryString: string) => {
        this.setState({
            queryString
        });
    }

    onAddSetting = (setting: any) => {
        this.props.addSetting(setting);
    }

    getRenderList = () => {
        const { teams, players, sources } = this.props;
        const list = [
            ...teams || [],
            ...players || [],
            ...sources || []
        ];
        if (!this.state.queryString) {
            return list;
        }

        return list.filter((item: any) => {
            if (item.display_name) {
                return item.display_name.indexOf(this.state.queryString) >= 0;
            } else if (item.title) {
                return item.title.indexOf(this.state.queryString) >= 0;
            } else if (item.name) {
                return item.name.indexOf(this.state.queryString) >= 0;
            }
            
            return false;
        });
    }

    render() {
        return (
            <div className="filter-form">
                <div className="filter-form__summary">
                    <FilterResult
                        settings={this.props.settings}
                    />
                </div>
                <div className="filter-form__search">
                    <FilterSearch
                        onChange={this.onChange}
                    />
                    <FilterList
                        list={this.getRenderList()}
                        onAddSetting={this.onAddSetting}
                    />
                </div>
                {/* <div className="filter-form__select">
                    <TeamSelect />
                </div> */}
                {/* <div className="filter-form__checkboxes">
                    <FilterCheckboxes />
                </div> */}
                {/* <div className="filter-form__add-source">
                    <AddSource />
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreModel) => ({
    settings: state.dashboard.settings,
    teams: state.dashboard.teams,
    players: state.dashboard.players,
    sources: state.dashboard.sources,
});

const mapDispatchToProps = (dispatch: Function) => ({
    addSetting: (setting: any) => dispatch(addSetting(setting))
});

export default connect<StateProps, ActionProps>(mapStateToProps, mapDispatchToProps)(FilterForm);