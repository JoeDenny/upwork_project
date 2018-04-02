import * as React from 'react';
import DashboardLayout from './components/DashboardLayout';
import NewsList from './components/NewsList';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <DashboardLayout>
                    <NewsList />
                </DashboardLayout>
            </div>
        );
    }
}

export default Dashboard;