import * as React from 'react';
import './FilterResult.css';
import FilterItem from './components/FilterItem';

interface Props {
    settings?: any[];
}
class FilterResult extends React.Component<Props> {
    render() {
        return (
            <ul className="filter-result">
                {
                    this.props.settings && this.props.settings.map((setting: any) => (
                        <li className="filter-result__item" key={setting.id}>
                            <FilterItem
                                setting={setting}
                            />
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default FilterResult;