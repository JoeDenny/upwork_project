import * as React from 'react';
import './DashboardHeaderFilter.css';
import DashboardFilterInfo from './components/DashboardFilterInfo';
import DashboardFilterButtons from './components/DashboardFilterButtons';

interface Props {
    onClick: Function;
    recentlyButtonActive: boolean;
    bookmarkButtonActive: boolean;
    filterButtonActive: boolean;
}

class DashboardHeaderFilter extends React.Component<Props> {
    onClick = (title: string) => {
        this.props.onClick(title);
    }
    render() {
        return (
            <div className="dashboard-header-filter">
                <div className="dashboard-header-filter__content">
                    <DashboardFilterInfo />
                </div>
                <div className="dashboard-header-filter__buttons">
                    <DashboardFilterButtons
                        onClick={this.onClick}
                        recentlyButtonActive={this.props.recentlyButtonActive}
                        bookmarkButtonActive={this.props.bookmarkButtonActive}
                        filterButtonActive={this.props.filterButtonActive}
                    />
                </div>
            </div>
        );
    }
}

export default DashboardHeaderFilter;