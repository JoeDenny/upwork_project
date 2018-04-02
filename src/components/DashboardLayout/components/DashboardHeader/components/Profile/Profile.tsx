
import * as React from 'react';
import './Profile.css';
import Username from '../../../../../../components/Username';
import DropdownArrow from '../../../../../../components/DropdownArrow';
import Dropdown from './components/Dropdown';
import UserPhoto from '../../../../../../components/UserPhoto';
import UserModel from '../../../../../../models/UserModel';

interface Props {
    user?: UserModel;
}

interface State {
    dropdownOpen: boolean;
}

class Profile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    }
    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        const { user } = this.props;
        return (
            <div 
                className="profile"
                onClick={this.toggleDropdown}
            >
                <Username
                    username={user && user.name}
                />
                <DropdownArrow
                    isReverted={this.state.dropdownOpen}
                />
                <Dropdown
                    isVisible={this.state.dropdownOpen}
                />
                <UserPhoto
                    link={user && user.avatar_path}
                />
            </div>
        );
    }
}

export default Profile;