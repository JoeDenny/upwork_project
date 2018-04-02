import * as React from 'react';
import './DashboardNews.css';
import DashboardLayout from '../../components/DashboardLayout';
import AuthWrapper from '../../components/AuthWrapper';
import { connect } from 'react-redux';
import StoreModel from '../../store/StoreModel';
import UserModel from '../../models/UserModel';
import NewsModel from '../../models/NewsModel';
import { getNews, GetNewsParams } from './actions';
import DashboardHeaderFilter from './components/DashboardHeaderFilter';
import NewsList from './components/NewsList';
import DashboardFilter from './components/DashboardFilter';
import DashboardChat from './components/DashboardChat';
import * as moment from 'moment';

interface Props {
    user?: UserModel;
    news?: NewsModel[];
}

interface ActionProps {
    getNews: Function;
}

interface State {
    recentlyButtonActive: boolean;
    bookmarkButtonActive: boolean;
    filterButtonActive: boolean;
    commentsButtonActive: boolean;
    isChatVisible: boolean;
    isFilterOverlayVisible: boolean;
    listMode: number;
    searchString?: string;
}

const initState: State = {
    recentlyButtonActive: false,
    bookmarkButtonActive: false,
    filterButtonActive: false,
    commentsButtonActive: false,
    isChatVisible: false,
    isFilterOverlayVisible: false,
    listMode: 0,
    searchString: undefined
};

class Dashboard extends React.Component<Props & ActionProps, State> {
    state: State = initState;
    componentWillMount() {
        const params = {
            time: moment().subtract(60, 'minutes').utc().format('Y-MM-DD HH:mm:ss')
        };

        this.props.getNews(params);
    }

    setActiveButton = (title: string) => {
        this.setState({
            ...initState,
            [title]: !this.state[title]
        });
    }
    onOpenComment = () => {
        this.setState({
            ...this.state,
            isChatVisible: !this.state.isChatVisible
        });
    }
    onChatClose = () => {
        this.setState({
            ...this.state,
            isChatVisible: false
        });
    }
    isSidebarVisible = () => {
        return this.state.isChatVisible || this.state.filterButtonActive;
    }
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

    onSearchChange = (searchString?: string) => {
        this.setState({
            ...this.state,
            searchString
        });
    }

    onToggleListMode = (listMode: number) => {
        this.setState({
            ...this.state,
            listMode
        });
    }

    render() {
        const { user, news } = this.props;
        const dashboardLayoutClassName = `dashboard-news__content ${this.isSidebarVisible() ? '_sidebar-visible' : ''}`;
        return (
            <AuthWrapper>
                <DashboardLayout
                    user={user}
                    isFilterOverlayVisible={this.state.isFilterOverlayVisible}
                    onCloseFilterOverlay={this.onCloseFilterOverlay}
                    onOpenFilterOverlay={this.onOpenFilterOverlay}
                    onSearchChange={this.onSearchChange}
                >
                    <div className={dashboardLayoutClassName}>
                        <div className="dashboard-news__content-filter">
                            <DashboardHeaderFilter
                                onClick={this.setActiveButton}
                                recentlyButtonActive={this.state.recentlyButtonActive}
                                bookmarkButtonActive={this.state.bookmarkButtonActive}
                                filterButtonActive={this.state.filterButtonActive}
                                commentsButtonActive={this.state.commentsButtonActive}
                                onOpenFilterOverlay={this.onOpenFilterOverlay}
                                onToggleListMode={this.onToggleListMode}

                            />
                        </div>
                        <div className="dashboard-news__content-news">
                            <NewsList
                                onOpenComment={this.onOpenComment}
                                news={news}
                                listMode={this.state.listMode}
                            />
                        </div>
                        <DashboardFilter
                            isVisible={this.state.filterButtonActive}
                        />
                        <DashboardChat
                            onChatClose={this.onChatClose}
                            isVisible={this.state.isChatVisible}
                        />
                    </div>
                </DashboardLayout>
            </AuthWrapper>
        );
    }
}

const mapStateToProps = (state: StoreModel) => ({
    user: state.auth.user,
    news: state.dashboard.news
});

const mapDispatchToProps = (dispatch: Function) => ({
    getNews: (params: GetNewsParams) => dispatch(getNews(params))
});

export default connect<Props, ActionProps>(mapStateToProps, mapDispatchToProps)(Dashboard);