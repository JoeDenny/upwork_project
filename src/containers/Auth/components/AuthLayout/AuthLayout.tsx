import * as React from 'react';
import './AuthLayout.css';

interface Props {
    children: React.ReactNode;
}

class AuthLayout extends React.Component<Props> {
    render() {
        return (
            <div className="auth-layout">
                {this.props.children}
            </div>
        );
    }
}

export default AuthLayout;