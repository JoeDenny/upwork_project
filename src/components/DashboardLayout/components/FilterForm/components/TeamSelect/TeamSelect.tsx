import * as React from 'react';
import './TeamSelect.css';
import LeagueList from './components/LeagueList';

class TeamSelect extends React.Component {
    render() {
        return (
            <div className="team-select">
                <div className="team-select__title">Select a team:</div>
                <div className="team-select__list">
                    <LeagueList />
                </div>
            </div>
        );
    }
}

export default TeamSelect;