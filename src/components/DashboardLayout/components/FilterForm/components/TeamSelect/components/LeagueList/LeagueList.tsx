import * as React from 'react';
import './LeagueList.css';
import LeagueItem from './components/LeagueItem';

class LeagueList extends React.Component {
    render() {
        return (
            <ul className="league-list">
                <li className="league-list__item">
                    <LeagueItem />
                </li>
            </ul>
        );
    }
}

export default LeagueList;