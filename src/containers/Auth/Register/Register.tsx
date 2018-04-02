import * as React from 'react';
import AuthLayout from '../components/AuthLayout';
import RegisterForm from './components/RegisterForm';
import RegisterNote from './components/RegisterNote';
import { connect } from 'react-redux';
import { register } from '../actions';
import StoreModel from '../../../store/StoreModel';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routes } from '../../../constants';

interface Props {
    token?: string;
}

interface ActionProps {
    register: Function;
}

interface State {
    avatar?: File;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

class Register extends React.Component<Props & ActionProps & RouteComponentProps<any>, State> {
    form?: HTMLFormElement = undefined;
    state: State = {
        avatar: undefined,
        username: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined
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
        const formData = new FormData(this.form);

        this.props.register(formData);
    }

    onRef = (el: HTMLFormElement) => {
        this.form = el;
    }

    render() {
        return (
            <AuthLayout>
                <RegisterForm
                    avatar={this.state.avatar}
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onRef={this.onRef}
                />
                <RegisterNote />
            </AuthLayout>
        );
    }
}

const mapStateToProps = (state: StoreModel) => ({
    token: state.auth.token
});

const mapDispatchToProps = (dispatch: Function) => ({
    register: (formData: FormData) => dispatch(register(formData))
});

export default connect<Props, ActionProps>(mapStateToProps, mapDispatchToProps)(withRouter(Register));