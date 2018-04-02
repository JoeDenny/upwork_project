import * as React from 'react';
import './DropdownArrow.css';

interface Props {
    isReverted: boolean;
}

class DropdownArrow extends React.Component<Props> {
    render() {
        const className = `dropdown-arrow ${this.props.isReverted ? '_reverted' : ''}`;
        return (
            <div className={className} />
        );
    }
}

export default DropdownArrow;