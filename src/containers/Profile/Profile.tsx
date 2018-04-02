import * as React from 'react';
import './Profile.css';
import DashboardLayout from '../../components/DashboardLayout';
import AuthWrapper from '../../components/AuthWrapper';
import StoreModel from '../../store/StoreModel';
import { connect } from 'react-redux';
import UserPhoto from '../../components/UserPhoto';
import UserModel from '../../models/UserModel';

interface Props {
    user: UserModel;
}

interface State {
    isFilterOverlayVisible: boolean;
}

class Profile extends React.Component<Props, State> {
    state: State = {
        isFilterOverlayVisible: false
    };

    onOpenFilterOverlay = () => {
        this.setState({
            ...this.state, 
            isFilterOverlayVisible: true
        });
    }
    onCloseFilterOverlay = () => {
        this.setState({
            ...this.state, 
            isFilterOverlayVisible: false
        });
    }
    
    render() {
        const { user } = this.props;
        return (
            <AuthWrapper>
                <DashboardLayout
                    user={user}
                    isFilterOverlayVisible={this.state.isFilterOverlayVisible}
                    onCloseFilterOverlay={this.onCloseFilterOverlay}
                    onOpenFilterOverlay={this.onOpenFilterOverlay}
                >
                    <div className="profile-page">
                        <UserPhoto
                            size={180}
                            link={user.avatar_path}
                        />
                        <div className="profile-page__username">{user.name}</div>
                    </div>
                </DashboardLayout>
            </AuthWrapper>
        );
    }
}

const mapStateToProps = (state: StoreModel) => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(Profile);