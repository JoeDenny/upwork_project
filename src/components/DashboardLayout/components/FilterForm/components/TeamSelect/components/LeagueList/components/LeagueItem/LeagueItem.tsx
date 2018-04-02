import * as React from 'react';
import './LeagueItem.css';

class LeagueItem extends React.Component {
    render() {
        return (
            <div className="league-item">
                <div className="league-item__img">
                    <img src="http://a1.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F23.png" />
                </div>
                <span className="league-item__title">English Premier League</span>
            </div>
        );
    }
}

export default LeagueItem;