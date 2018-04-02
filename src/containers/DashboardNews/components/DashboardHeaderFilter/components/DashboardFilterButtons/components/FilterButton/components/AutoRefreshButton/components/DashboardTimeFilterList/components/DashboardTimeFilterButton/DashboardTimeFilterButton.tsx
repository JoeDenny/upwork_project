import * as React from 'react';
import './DashboardTimeFilterButton.css';

interface Props {
    title: string;
    active: boolean;
    onClick: Function;
}

class DashboardTimeFilterButton extends React.Component<Props> {
    onClick = () => {
        this.props.onClick(this.props.title);
    }
    render() {
        let className = `dashboard-time-filter-button ${this.props.active ? '_active' : ''}`;
        return (
            <button type="button" className={className} onClick={this.onClick}>
                {this.props.title}
            </button>
        );
    }
}

export default DashboardTimeFilterButton;