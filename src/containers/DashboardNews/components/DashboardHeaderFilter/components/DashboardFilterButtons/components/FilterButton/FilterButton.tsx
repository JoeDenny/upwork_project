import * as React from 'react';
import './FilterButton.css';

interface Props {
    children: React.ReactNode;
    onClick?: Function;
    isActive?: boolean;
}

class FilterButton extends React.Component<Props> {
    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
    render() {
        const className = `filter-button ${this.props.isActive ? '_active' : ''}`;
        return (
            <button type="button" className={className} onClick={this.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default FilterButton;