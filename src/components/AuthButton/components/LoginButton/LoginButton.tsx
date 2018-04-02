import * as React from 'react';
import './LoginButton.css';
import AuthButton from '../../';
import { routes } from '../../../../constants';

class LoginButton extends React.Component {
    render() {
        const LOGIN_BUTTON_TITLE = 'Sign in';
        return (
            <AuthButton 
                authLink={routes.LOGIN_PATH}
                title={LOGIN_BUTTON_TITLE}
            />
        );
    }
}

export default LoginButton;