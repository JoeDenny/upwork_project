import * as React from 'react';
import './FilterCheckboxes.css';
import FilterCheckbox from './components/FilterCheckbox';

class FilterCheckboxes extends React.Component {
    render() {
        return (
            <div className="filter-checkboxes">
                <div className="filter-checkboxes__item">
                    <FilterCheckbox
                        title="Include tweets"
                    />
                </div>
                <div className="filter-checkboxes__item">
                    <FilterCheckbox
                        title="Include Image Tweets"
                    />
                </div>
                <div className="filter-checkboxes__item">
                    <FilterCheckbox
                        title="Include Video Tweets"
                    />
                </div>
            </div>
        );
    }
}

export default FilterCheckboxes;