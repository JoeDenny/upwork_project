import * as React from 'react';
import './AuthButton.css';
import { Link } from 'react-router-dom';

interface Props {
    authLink: string;
    title: string;
}

class AuthButton extends React.Component<Props> {
    render() {
        return (
            <Link className="auth-button" to={this.props.authLink}>
                {this.props.title}
            </Link>
        );
    }
}

export default AuthButton;