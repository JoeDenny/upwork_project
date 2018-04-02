import * as React from 'react';
import AddPlayerOrTeam from './components/AddPlayerOrTeam';
import DashboardSidebarSeparator from './components/DashboardSidebarSeparator';
import TeamAndPlayerList from './components/TeamAndPlayerList';
import './DashboardSidebar.css';
import StoreModel from '../../../../store/StoreModel';
import { connect } from 'react-redux';
import { getTeams, getPlayers, getSources } from '../../../../containers/DashboardNews/actions';

interface Props {
    onFilterOpen: Function;
}

interface StateProps {
    sources?: any[];
}

interface ActionProps {
    getTeams: Function;
    getPlayers: Function;
    getSources: Function;
}

class DashboardSidebar extends React.Component<Props & StateProps & ActionProps> {
    componentWillMount() {
        this.props.getTeams();
        this.props.getPlayers();
        this.props.getSources();
    }
    openFilterOverlay = () => {
        this.props.onFilterOpen();
    }
    render() {
        const { sources } = this.props;
        return (
            <div className="dashboard-sidebar">
                <AddPlayerOrTeam
                    onFilterOpen={this.openFilterOverlay}
                />
                <DashboardSidebarSeparator />
                <TeamAndPlayerList
                    sources={sources}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: StoreModel) => ({
    sources: state.auth.sources
});

const mapDispatchToProps = (dispatch: Function) => ({
    getTeams: () => dispatch(getTeams()),
    getPlayers: () => dispatch(getPlayers()),
    getSources: () => dispatch(getSources())
});

export default connect<StateProps, ActionProps>(mapStateToProps, mapDispatchToProps)(DashboardSidebar);