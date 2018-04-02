import * as React from 'react';
import './RegisterButton.css';
import AuthButton from '../../';
import { routes } from '../../../../constants';

class RegisterButton extends React.Component {
    render() {
        const LOGIN_BUTTON_TITLE = 'Sign up';
        return (
            <AuthButton 
                authLink={routes.REGISTER_PATH}
                title={LOGIN_BUTTON_TITLE}
            />
        );
    }
}

export default RegisterButton;