import * as React from 'react';
import './TeamOrPlayerItem.css';
import TeamOrPlayerButton from './components/TeamOrPlayerButton';

interface Props {
    imgLink: string;
}

class TeamOrPlayerItem extends React.Component<Props> {
    render() {
        return (
            <li className="team-or-player-item">
                <TeamOrPlayerButton imgLink={this.props.imgLink}/>
            </li>
        );
    }
}

export default TeamOrPlayerItem;