import * as React from 'react';
import './DashboardTimeFilterList.css';
import DashboardTimeFilterButton from './components/DashboardTimeFilterButton';
import FilterModel from '../../../../../../../../../../../../models/FilterModel';

interface Props {
    filters: FilterModel[];
    onFilterClick: Function;
}

class DashboardTimeFilterList extends React.Component<Props> {
    onFilterClick = (title: string) => {
        this.props.onFilterClick(title);
    }
    render() {
        return (
            <ul className="dashboard-time-filter-list">
                {this.props.filters.map((item: FilterModel) => (
                    <li className="dashboard-time-filter-list__item">
                        <DashboardTimeFilterButton
                            title={item.title}
                            active={item.active}
                            onClick={this.onFilterClick}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}

export default DashboardTimeFilterList;