import * as React from 'react';
import './MyProfileLink.css';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routes } from '../../constants';

class MyProfileLink extends React.Component<RouteComponentProps<MyProfileLink>> {
    goToProfilePage = () => {
        this.props.history.push(routes.PROFILE_PATH);
    }
    render() {
        return (
            <button 
                className="my-profile-link" 
                type="button"
                onClick={this.goToProfilePage}
            >
                My profile
            </button>
        );
    }
}

export default withRouter(MyProfileLink);