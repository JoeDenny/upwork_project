import * as React from 'react';
import './AuthFormButton.css';

interface Props {
    title: string;
}

const AuthFormButton = (props: Props) => (
    <button type="submit" className="auth-form-button">
        {props.title}
    </button>
);

export default AuthFormButton;