import * as React from 'react';
import GlobalSearch from './components/GlobalSearch';
import './DashboardHeader.css';
import Profile from './components/Profile';
import UserModel from '../../../../models/UserModel';

interface Props {
    user?: UserModel;
}

interface State {
    isAuthorized: boolean;
}

class DashboardHeader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isAuthorized: false
        };
    }
    onClick = () => {
        this.setState({
            isAuthorized: true
        });
    }
    render() {
        const { user } = this.props;
        return (
            <div className="dashboard-header">
                <GlobalSearch />
                <Profile
                    user={user}
                />
            </div>
        );
    }
}

export default DashboardHeader;