import * as React from 'react';
import './TeamOrPlayerButton.css';
import TeamOrPlayerImg from '../../../../../../../../../../../../components/TeamOrPlayerImg';

interface Props {
    imgLink: string;
}

class TeamOrPlayerButton extends React.Component<Props> {
    render() {
        return ( 
            <button className="team-or-player-button">
                <TeamOrPlayerImg imgLink={this.props.imgLink} />
            </button>
        );
    }
}

export default TeamOrPlayerButton;
