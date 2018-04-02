import * as React from 'react';
import './AddPlayerOrTeam.css';

interface Props {
    onFilterOpen: Function;
}
class AddPlayerOrTeam extends React.Component<Props> {
    openFilterOverlay = () => {
        this.props.onFilterOpen();
    }
    render() {
        return (
            <button 
                type="button" 
                className="add-player-or-team"
                onClick={this.openFilterOverlay}
            />
        );
    }
}

export default AddPlayerOrTeam;
