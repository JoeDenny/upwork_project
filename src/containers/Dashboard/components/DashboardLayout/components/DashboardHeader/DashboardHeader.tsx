import * as React from 'react';
import GlobalSearch from './components/GlobalSearch';
import RegisterButton from '../../../../../../components/AuthButton/components/RegisterButton';
import './DashboardHeader.css';

class DashboardHeader extends React.Component {
    render() {
        return (
            <div className="dashboard-header">
                <GlobalSearch />
                <RegisterButton />
            </div>
        );
    }
}

export default DashboardHeader;