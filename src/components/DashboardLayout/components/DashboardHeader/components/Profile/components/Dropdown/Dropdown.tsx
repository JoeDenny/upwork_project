import * as React from 'react';
import './Dropdown.css';
import MyProfileLink from '../../../../../../../../components/MyProfileLink';
import LogoutButton from '../../../../../../../../components/LogoutButton';

interface Props {
    isVisible: boolean;
}

class Dropdown extends React.Component<Props> {
    render() {
        const className = `dropdown ${this.props.isVisible ? '_visible' : ''}`;
        return (
            <div className={className}>
                <div className="dropdown__item">
                    <MyProfileLink />
                </div>
                <div className="dropdown__item">
                    <LogoutButton />
                </div>
            </div>
        );
    }
}

export default Dropdown;