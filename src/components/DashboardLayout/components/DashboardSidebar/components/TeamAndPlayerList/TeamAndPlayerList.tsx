import * as React from 'react';
import './TeamAndPlayerList.css';
import TeamOrPlayerItem from './components/TeamOrPlayerItem';

interface Props {
    sources?: any[];
}
class TeamAndPlayerList extends React.Component<Props> {
    render() {
        const { sources } = this.props;
        return (
            <ul className="team-and-player-list">
                {sources && sources.map((item: any) => (
                    <TeamOrPlayerItem imgLink={item} />
                ))}
            </ul>
        );
    }
}

export default TeamAndPlayerList;