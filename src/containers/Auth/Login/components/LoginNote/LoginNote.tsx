import * as React from 'react';
import './LoginNote.css';
import { Link } from 'react-router-dom';
import { routes } from '../../../../../constants';

class LoginNote extends React.Component {
    render() {
        return (
            <div className="login-note">
                <span>Don't have an account?</span>
                <Link to={routes.REGISTER_PATH}>Sign up</Link>
            </div>
        );
    }
}

export default LoginNote;