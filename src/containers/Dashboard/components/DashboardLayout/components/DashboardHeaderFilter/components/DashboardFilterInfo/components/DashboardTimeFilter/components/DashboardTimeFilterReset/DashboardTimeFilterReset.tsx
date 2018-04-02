import * as React from 'react';
import './DashboardTimeFilterReset.css';

interface Props {
    onFilterClick: Function;
}

class DashboardTimeFilterReset extends React.Component<Props> {
    onFilterClick = () => {
        this.props.onFilterClick();
    }
    render() {
        return (
            <button 
                type="button" 
                className="dashboard-time-filter-reset"
                onClick={this.onFilterClick}
            >
                Reset filters
            </button>
        );
    }
}

export default DashboardTimeFilterReset;