import * as React from 'react';
import './TeamOrPlayerTitle.css';

interface Props {
    title: string;
}

class TeamOrPlayerTitle extends React.Component<Props> {
    render() {
        return (
            <span className="team-or-player-title">{this.props.title}</span>
        );
    }
}

export default TeamOrPlayerTitle;