import * as React from 'react';
import './DashboardTimeFilterList.css';
import DashboardTimeFilterButton from './components/DashboardTimeFilterButton';
import FilterModel from '../../../../../../../../../../../../models/FilterModel';

interface Props {
}
interface State {
    filters: FilterModel[];
}

const initFilters: FilterModel[] = [
    {
        title: 'latest comments',
        active: true
    }, {
        title: '30 sec',
        active: false
    }, {
        title: '1 min',
        active: false
    }, {
        title: '3 mins',
        active: false
    }, {
        title: '5 mins',
        active: false
    }
];

class DashboardTimeFilterList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            filters: [...initFilters]
        };
    }

    onFilterClick = (title: string) => {
        this.setState({
            filters: this.state.filters.map((item: FilterModel) => ({
                title: item.title,
                active: item.title === title
            }) 
        )});
    }
    render() {
        return (
            <ul className="dashboard-time-filter-list">
                {this.state.filters.map((item: FilterModel) => (
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