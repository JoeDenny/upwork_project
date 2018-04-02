import * as React from 'react';
import './CommentsButton.css';
import FilterButton from '../../index';

interface Props {
    onClick: Function;
    isActive: boolean;
}

class CommentsButton extends React.Component<Props> {
    render() {
        return (
            <FilterButton
                onClick={this.props.onClick}
                isActive={this.props.isActive}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M55.894 37.041C58.582 33.27 60 28.912 60 24.414 60 11.504 48.337 1 34 1c-8.246 0-15.969 3.592-20.824 9.42C17.021 8.613 21.38 7.586 26 7.586c15.439 0 28 11.4 28 25.414 0 5.506-1.945 10.604-5.235 14.77 4.946 1.886 9.853 2.601 10.096 2.635a1 1 0 0 0 .847-1.697c-1.955-1.955-3.305-6.09-3.814-11.667z"/><path d="M26 9.586C11.663 9.586 0 20.09 0 33c0 4.498 1.418 8.855 4.106 12.627-.51 5.577-1.859 9.712-3.813 11.666a1 1 0 0 0 .846 1.697c.35-.049 8.433-1.213 14.317-4.586 3.33 1.334 6.875 2.01 10.544 2.01 14.337 0 26-10.504 26-23.414S40.337 9.586 26 9.586zM13 37c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm13 0c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm13 0c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/></svg>
            </FilterButton>
        );
    }
}

export default CommentsButton;