import * as React from 'react';
import AuthLayout from '../components/AuthLayout';
import LoginForm from './components/LoginForm';
import LoginNote from './components/LoginNote';
import { connect } from 'react-redux';
import { login } from '../actions';
import StoreModel from '../../../store/StoreModel';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routes } from '../../../constants';

interface Props {
    token?: string;
}

interface ActionProps {
    login: Function;
}

interface State {
    email?: string;
    password?: string;
}

class Login extends React.Component<Props & ActionProps & RouteComponentProps<any>, State> {
    state: State = {
        email: undefined,
        password: undefined
    };

    componentWillReceiveProps(newProps: Props & ActionProps) {
        if (newProps.token) {
            this.props.history.push(routes.DASHBOARD_PATH);
        }
    }

    onChange = (title: string, value: string) => {
        this.setState({
            ...this.state,
            [title]: value
        });
    }

    onSubmit = () => {
        const { email, password } = this.state;

        this.props.login(email, password);
    }

    render() {
        return (
            <AuthLayout>
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                <LoginNote />
            </AuthLayout>
        );
    }
}

const mapStateToProps = (state: StoreModel) => ({
    token: state.auth.token
});

const mapDispatchToProps = (dispatch: Function) => ({
    login: (email: string, password: string) => dispatch(login(email, password))
});

export default connect<Props, ActionProps>(mapStateToProps, mapDispatchToProps)(withRouter(Login));