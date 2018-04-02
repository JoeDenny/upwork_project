import * as React from 'react';
import './TeamAndPlayerList.css';
import TeamOrPlayerItem from './components/TeamOrPlayerItem';

class TeamAndPlayerList extends React.Component {
    teamList: string[] = [
        'https://rocketdock.com/images/screenshots/Chelsea-256x256.png',
        'http://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png',
        'https://i0.wp.com/fpladdicts.com/wp/wp-content/uploads/2016/08/leicester-badge.png?w=256&ssl=1',
        'https://upload.wikimedia.org/wikipedia/en/0/0a/Shrewsbury_Town_F.C._Badge.png'
    ];

    render() {
        return (
            <ul className="team-and-player-list">
                {this.teamList.map((item: string) => (
                    <TeamOrPlayerItem imgLink={item} />
                ))}
            </ul>
        );
    }
}

export default TeamAndPlayerList;