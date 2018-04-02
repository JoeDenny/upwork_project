import * as React from 'react';
import './DashboardFilterButtons.css';
import BookmarkButton from './components/FilterButton/components/BookmarkButton';
import RecentlyViewedButton from './components/FilterButton/components/RecentlyViewedButton';
import FilterSidebarButton from './components/FilterButton/components/FilterSidebarButton';
import AutoRefreshButton from './components/FilterButton/components/AutoRefreshButton';
import CommentsButton from './components/FilterButton/components/CommentsButton';

interface Props {
    recentlyButtonActive: boolean;
    bookmarkButtonActive: boolean;
    filterButtonActive: boolean;
    commentsButtonActive: boolean;
    onClick: Function;
    onToggleListMode: Function;
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
                    <AutoRefreshButton />
                </li>
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
                    <CommentsButton
                        onClick={this.setActiveButton('isChatVisible')}
                        isActive={this.props.commentsButtonActive}
                    />
                </li>
                <li className="dashboard-filter-buttons__item">
                    <FilterSidebarButton
                        onClick={this.setActiveButton('filterButtonActive')}
                        isActive={this.props.filterButtonActive}
                    />
                </li>
                <li className="dashboard-filter-buttons__item">
                    <button 
                        type="button"
                        onClick={() => this.props.onToggleListMode(0)}
                    >Template 0
                    </button>
                </li>
                <li className="dashboard-filter-buttons__item">
                    <button 
                        type="button"
                        onClick={() => this.props.onToggleListMode(1)}
                    >Template 1
                    </button>
                </li>
                <li className="dashboard-filter-buttons__item">
                    <button 
                        type="button"
                        onClick={() => this.props.onToggleListMode(2)}
                    >Template 2
                    </button>
                </li>
            </ul>
        );
    }
}

export default DashboardFilterButtons;