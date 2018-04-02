import * as React from 'react';
import './RecentlyViewedButton.css';
import FilterButton from '../../index';

interface Props {
    onClick: Function;
    isActive: boolean;
}

class RecentlyViewedButton extends React.Component<Props> {
    render() {
        return (
            <FilterButton
                onClick={this.props.onClick}
                isActive={this.props.isActive}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.995 299.995"><path d="M149.995 0C67.156 0 0 67.158 0 149.995s67.156 150 149.995 150 150-67.163 150-150S232.834 0 149.995 0zm64.847 178.524H151.25c-.215 0-.415-.052-.628-.06-.213.01-.412.06-.628.06-5.729 0-10.374-4.645-10.374-10.374V62.249c0-5.729 4.645-10.374 10.374-10.374s10.374 4.645 10.374 10.374v95.527h54.47c5.729 0 10.374 4.645 10.374 10.374 0 5.729-4.641 10.374-10.37 10.374z"/></svg>
            </FilterButton>
        );
    }
}

export default RecentlyViewedButton;