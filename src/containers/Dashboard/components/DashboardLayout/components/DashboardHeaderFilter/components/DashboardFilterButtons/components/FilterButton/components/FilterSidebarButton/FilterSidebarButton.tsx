import * as React from 'react';
import './FilterSidebarButton.css';
import FilterButton from '../../index';

interface Props {
    onClick: Function;
    isActive: boolean;
}

class FilterSidebarButton extends React.Component<Props> {
    render() {
        return (
            <FilterButton
                onClick={this.props.onClick}
                isActive={this.props.isActive}
            >
                {/* tslint:disable-next-line */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402.577 402.577"><path d="M400.858 11.427C397.617 4.006 392.008.295 384.004.291H18.564c-7.993 0-13.61 3.715-16.846 11.136-3.234 7.801-1.903 14.467 3.999 19.985l140.757 140.753V310.92c0 4.955 1.809 9.232 5.424 12.854l73.085 73.083c3.429 3.614 7.71 5.428 12.851 5.428 2.282 0 4.66-.479 7.135-1.43 7.426-3.238 11.14-8.851 11.14-16.845V172.166L396.861 31.413c5.904-5.518 7.232-12.182 3.997-19.986z"/></svg>
            </FilterButton>
        );
    }
}

export default FilterSidebarButton;