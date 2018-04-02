import * as React from 'react';
import './RegisterNote.css';
import { Link } from 'react-router-dom';
import { routes } from '../../../../../constants';

class RegisterNote extends React.Component {
    render() {
        return (
            <div className="register-note">
                <span>Already have an account?</span>
                <Link to={routes.LOGIN_PATH}>Sign in</Link>
            </div>
        );
    }
}

export default RegisterNote;