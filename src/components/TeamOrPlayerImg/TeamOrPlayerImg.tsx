import * as React from 'react';
import './TeamOrPlayerImg.css';

interface Props {
    imgLink: string;
}

class TeamOrPlayerImg extends React.Component<Props> {
    render() {
        return (
            <img className="team-or-player-img" src={this.props.imgLink} />
        );
    }
}

export default TeamOrPlayerImg;