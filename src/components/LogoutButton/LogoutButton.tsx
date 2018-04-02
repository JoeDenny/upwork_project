import * as React from 'react';
import './LogoutButton.css';
import { connect } from 'react-redux';
import { logout } from '../../containers/Auth/actions';

interface Props {}
interface ActionProps {
    logout: Function;
}
class LogoutButton extends React.Component<Props & ActionProps> {
    onClick = () => {
        this.props.logout();
    }
    render() {
        return (
            <button 
                className="logout-button" 
                type="button"
                onClick={this.onClick}
            >
                Logout
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    logout: () => dispatch(logout())
});

export default connect<Props, ActionProps>(null, mapDispatchToProps)(LogoutButton);