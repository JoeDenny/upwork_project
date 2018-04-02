import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import StoreModel from '../../store/StoreModel';
import { routes } from '../../constants';

interface Props {
    children: React.ReactNode;
}

interface StateProps {
    token?: string;
}

class AuthWrapper extends React.Component<Props & StateProps & RouteComponentProps<AuthWrapper>> {
    componentWillMount() {
        if (!this.props.token) {
            this.props.history.push(routes.LOGIN_PATH);
        }
    }

    componentWillReceiveProps(newProps: Props & StateProps & RouteComponentProps<AuthWrapper>) {
        if (!newProps.token) {
            this.props.history.push(routes.LOGIN_PATH);
        }
    }

    render() {
        return this.props.children;
    }
}

const mapStateToProps = (state: StoreModel) => ({
    token: state.auth.token
});

export default connect<StateProps>(mapStateToProps)(withRouter(AuthWrapper));