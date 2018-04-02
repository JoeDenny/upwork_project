import * as React from 'react';
import './DashboardFilter.css';

interface Props {
    isVisible: boolean;
}

class DashboardFilter extends React.Component<Props> {
    render() {
        const className = `dashboard-filter ${this.props.isVisible ? '_visible' : ''}`;
        return (
            <div className={className}>
                Hey
            </div>
        );
    }
}

export default DashboardFilter;