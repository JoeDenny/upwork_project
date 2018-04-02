import * as React from 'react';
import './TeamOrPlayerItem.css';
import TeamOrPlayerImg from '../TeamOrPlayerImg';
import TeamOrPlayerTitle from '../TeamOrPlayerTitle';

interface Props {
    imgLink: string;
    title: string;
}

class TeamOrPlayerItem extends React.Component<Props> {
    render() {
        return (
            <div className="team-or-player-item">
                <div className="team-or-player-item__img">
                    <TeamOrPlayerImg imgLink={this.props.imgLink} />
                </div>
                <div className="team-or-player-item__text">
                    <TeamOrPlayerTitle title={this.props.title} />
                </div>
            </div>
        );
    }
}

export default TeamOrPlayerItem;