import * as React from 'react';
import './DashboardFilterInfo.css';
import DashboardTimeFilter from './components/DashboardTimeFilter';
import TeamOrPlayerItem from '../../../../../../../../components/TeamOrPlayerItem';

class DashboardFilterInfo extends React.Component {
    selectedTeam = {
        imgLink: 'https://rocketdock.com/images/screenshots/Chelsea-256x256.png',
        title: 'Chelsea'
    };
    render() {
        return (
            <div className="dashboard-filter-info">
                <div className="dashboard-filter-info__team">
                    <TeamOrPlayerItem
                        imgLink={this.selectedTeam.imgLink}
                        title={this.selectedTeam.title}
                    />
                </div>
                <div className="dashboard-filter-info__filter">
                    <DashboardTimeFilter />
                </div>
            </div>
        );
    }
}

export default DashboardFilterInfo;