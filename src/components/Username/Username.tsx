import * as React from 'react';
import './Username.css';

interface Props {
    username?: string;
}

class Username extends React.Component<Props> {
    render() {
        return (
            <div className="username">
                {this.props.username}
            </div>
        );
    }
}

export default Username;