import * as React from 'react';
import './DashboardLayout.css';
import DashboardSidebar from './components/DashboardSidebar';
import FilterOverlay from './components/FilterOverlay';
import DashboardHeader from './components/DashboardHeader';
import UserModel from '../../models/UserModel';
import Modal from '../Modal';

interface Props {
    children?: React.ReactNode;
    user?: UserModel;
    isFilterOverlayVisible: boolean;
    onCloseFilterOverlay: Function;
    onOpenFilterOverlay: Function;
    onSearchChange?: Function;
}

interface State {
    isFilterOverlayVisible: boolean;
    isChatVisible: boolean;
    filterButtonActive: boolean;
}

class DashboardLayout extends React.Component<Props, State> {
    state: State = {
        isFilterOverlayVisible: false,
        isChatVisible: false,
        filterButtonActive: false
    };

    componentDidMount() {
        this.checkFilterSettings();
        this.addScrollEvent();
    }
    componentWillUnmount() {
        this.removeScrollEvent();
    }
    addScrollEvent = () => {
        const content = document.querySelector('.dashboard-layout__content'),
            firstHeaderHeight = 80,
            bothHeaderHeight = 140,
            chat = document.querySelector('.dashboard-chat');

        if (content && chat) {
            content.addEventListener('scroll', (event) => {
                const scrollTop = content.scrollTop;

                if (scrollTop > firstHeaderHeight) {
                    content.classList.add('_fixed');
                    chat.classList.add('_expanded');
                    chat.removeAttribute('style');
                } else {
                    content.classList.remove('_fixed');
                    chat.classList.remove('_expanded');
                    chat.setAttribute('style', `top:${bothHeaderHeight - content.scrollTop}px; height: calc(100% - ${bothHeaderHeight - content.scrollTop}px)`);
                }
            });
        }

    }
    removeScrollEvent = () => {
        let content = document.querySelector('.dashboard-layout__content');

        if (content) {
            content.removeEventListener('scroll', () => {
                content = null;
            });
        }
    }

    checkFilterSettings = () => {
        if (!localStorage.getItem('filtersSetUpCompleted')) {
            this.setState({
                ...this.state,
                isFilterOverlayVisible: true
            });
        }
    }
    isSidebarVisible = () => {
        return this.state.isChatVisible || this.state.filterButtonActive;
    }
    onCloseOverlay = () => {
        this.props.onCloseFilterOverlay();
    }
    onFilterOverlay = () => {
        this.props.onOpenFilterOverlay();
    }
    render() {
        const { children, user} = this.props;
        const dashboardLayoutClassName = `dashboard-layout ${this.isSidebarVisible() ? '_sidebar-visible' : ''}`;
        return (
            <div className={dashboardLayoutClassName}>
                {this.props.isFilterOverlayVisible &&
                    <FilterOverlay
                        onClose={this.onCloseOverlay}
                    />
                }
                <div className="dashboard-layout__sidebar">
                    <DashboardSidebar
                        onFilterOpen={this.onFilterOverlay}
                    />
                </div>
                <div className="dashboard-layout__content">
                    <DashboardHeader
                        user={user} 
                    />
                    <div className="dashboard-layout__content-wrapper">
                        {children}
                    </div>
                </div>
                <Modal />
            </div>
        );
    }
}

export default DashboardLayout;