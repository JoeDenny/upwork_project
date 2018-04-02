import * as React from 'react';
import AddPlayerOrTeam from './components/AddPlayerOrTeam';
import DashboardSidebarSeparator from './components/DashboardSidebarSeparator';
import TeamAndPlayerList from './components/TeamAndPlayerList';
import './DashboardSidebar.css';

class DashboardSidebar extends React.Component {
    render() {
        return (
            <div className="dashboard-sidebar">
                <AddPlayerOrTeam />
                <DashboardSidebarSeparator />
                <TeamAndPlayerList />
            </div>
        );
    }
}

export default DashboardSidebar;