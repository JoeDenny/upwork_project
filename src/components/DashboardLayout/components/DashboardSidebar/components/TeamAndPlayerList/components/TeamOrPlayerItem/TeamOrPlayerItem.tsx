import * as React from 'react';
import './TeamOrPlayerItem.css';

interface Props {
    imgLink: string;
}

class TeamOrPlayerItem extends React.Component<Props> {
    render() {
        return (
            <li className="team-or-player-item">
                <h1>Hey</h1>
            </li>
        );
    }
}

export default TeamOrPlayerItem;