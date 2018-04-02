import * as React from 'react';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardHeader from './components/DashboardHeader';
import DashboardLogo from './components/DashboardLogo';
import DashboardHeaderFilter from './components/DashboardHeaderFilter';
import DashboardFilter from './components/DashboardFilter';
import './DashboardLayout.css';

interface Props {
    children: React.ReactNode;
}

interface State {
    recentlyButtonActive: boolean;
    bookmarkButtonActive: boolean;
    filterButtonActive: boolean;
}

class DashboardLayout extends React.Component<Props, State> {
    initState: State = {
        recentlyButtonActive: false,
        bookmarkButtonActive: false,
        filterButtonActive: false
    };
    constructor(props: Props) {
        super(props);

        this.state = {...this.initState};
    }
    setActiveButton = (title: string) => {
        this.setState({
            ...this.initState,
            [title]: !this.state[title]
        });
    }
    render() {
        return (
            <div className="dashboard-layout">
                <div className="dashboard-layout__logo">
                    <DashboardLogo />
                </div>
                <div className="dashboard-layout__header">
                    <DashboardHeader />
                </div>
                <div className="dashboard-layout__sidebar">
                    <DashboardSidebar />
                </div>
                <div className="dashboard-layout__content">
                    <DashboardFilter
                        isVisible={this.state.filterButtonActive}
                    />
                    <div className="dashboard-layout__content-header">
                        <DashboardHeaderFilter
                            onClick={this.setActiveButton}
                            recentlyButtonActive={this.state.recentlyButtonActive}
                            bookmarkButtonActive={this.state.bookmarkButtonActive}
                            filterButtonActive={this.state.filterButtonActive}
                        />
                    </div>

                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DashboardLayout;