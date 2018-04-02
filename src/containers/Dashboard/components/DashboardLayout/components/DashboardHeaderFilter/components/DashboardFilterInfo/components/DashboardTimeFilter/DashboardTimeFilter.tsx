import * as React from 'react';
import './DashboardTimeFilter.css';
import DashboardTimeFilterList from './components/DashboardTimeFilterList';
import DashboardTimeFilterReset from './components/DashboardTimeFilterReset';
import FilterModel from '../../../../../../../../../../models/FilterModel';

interface Props {}
interface State {
    filters: FilterModel[];
}

const initFilters: FilterModel[] = [
    {
        title: '30 sec',
        active: true
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

class DashboardTimeFilter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            filters: [...initFilters]
        };
    }

    onFilterClick = (title: string) => {
        this.setState({
            filters: !title ? [...initFilters] : this.state.filters.map((item: FilterModel) => ({
                title: item.title,
                active: item.title === title
            }) 
        )});
    }
    render() {
        return (
            <div className="dashboard-time-filter">
                <DashboardTimeFilterList 
                    filters={this.state.filters}
                    onFilterClick={this.onFilterClick}
                />
                <DashboardTimeFilterReset
                    onFilterClick={this.onFilterClick}
                />
            </div>
        );
    }
}

export default DashboardTimeFilter;