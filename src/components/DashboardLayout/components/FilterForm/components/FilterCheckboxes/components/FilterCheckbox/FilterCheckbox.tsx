import * as React from 'react';
import './FilterCheckbox.css';

interface Props {
    title: string;
}

class FilterCheckbox extends React.Component<Props> {
    render() {
        return (
            <label className="filter-checkbox">
                <input type="checkbox" />
                <span>{this.props.title}</span>
            </label>
        );
    }
}

export default FilterCheckbox;