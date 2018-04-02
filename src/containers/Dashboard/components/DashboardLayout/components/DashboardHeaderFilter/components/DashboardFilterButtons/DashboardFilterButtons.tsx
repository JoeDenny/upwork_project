import * as React from 'react';
import './DashboardFilterButtons.css';
import BookmarkButton from './components/FilterButton/components/BookmarkButton';
import RecentlyViewedButton from './components/FilterButton/components/RecentlyViewedButton';
import FilterSidebarButton from './components/FilterButton/components/FilterSidebarButton';

interface Props {
    recentlyButtonActive: boolean;
    bookmarkButtonActive: boolean;
    filterButtonActive: boolean;
    onClick: Function;
}

class DashboardFilterButtons extends React.Component<Props> {
    setActiveButton = (title: string) => {
        return () => {
            this.props.onClick(title);
        };
    }
    render() {
        return (
            <ul className="dashboard-filter-buttons">
                <li className="dashboard-filter-buttons__item">
                    <RecentlyViewedButton
                        onClick={this.setActiveButton('recentlyButtonActive')}
                        isActive={this.props.recentlyButtonActive}
                    />
                </li>
                <li className="dashboard-filter-buttons__item">
                    <BookmarkButton
                        onClick={this.setActiveButton('bookmarkButtonActive')}
                        isActive={this.props.bookmarkButtonActive}
                        
                    />
                </li>
                <li className="dashboard-filter-buttons__item">
                    <FilterSidebarButton
                        onClick={this.setActiveButton('filterButtonActive')}
                        isActive={this.props.filterButtonActive}
                    />
                </li>
            </ul>
        );
    }
}

export default DashboardFilterButtons;