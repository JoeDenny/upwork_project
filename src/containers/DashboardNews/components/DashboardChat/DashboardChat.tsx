import * as React from 'react';
import './DashboardChat.css';
import CommentsList from './components/CommentsList';
import ChatHeader from './components/ChatHeader';
import AddComment from './components/AddComment';
import EditComment from './components/EditComment';
import NewsModel from '../../../../models/NewsModel';
import UserModel from '../../../../models/UserModel';
import StoreModel from '../../../../store/StoreModel';
import { removeActiveNews, addComment, removeComment, editComment } from '../../actions';
import { connect } from 'react-redux';

interface Props {
    isVisible: boolean;
    onChatClose: Function;
}

interface StateProps {
    activeNews?: NewsModel;
    user?: UserModel;
}

interface ActionProps {
    removeActiveNews: Function;
    addComment: Function;
    removeComment: Function;
    editComment: Function;
}

interface State {
    isEditMode: boolean;
    commentToEdit?: string;
    commentIdToEdit?: number;
}

class DashboardChat extends React.Component<Props & StateProps & ActionProps, State> {
    state: State = {
        isEditMode: false,
        commentToEdit: undefined,
        commentIdToEdit: undefined
    };

    onChatClose = () => {
        this.props.removeActiveNews();
        this.props.onChatClose();
    }
    onSendComment = (comment: string) => {
        const { activeNews } = this.props;

        if (activeNews) {
            this.props.addComment(activeNews.id, comment);
        }
    }
    commentRemove = (id: number) => {
        if (this.props.activeNews) {
            this.props.removeComment(this.props.activeNews.id, id);
        }
    }
    commentEdit = (id: number, comment: string) => {
        this.setState({
            isEditMode: true,
            commentToEdit: comment,
            commentIdToEdit: id
        });
    }
    onEditComment = (comment: string) => {
        if (this.props.activeNews) {
            const { id } = this.props.activeNews;

            this.props.editComment(id, this.state.commentIdToEdit, comment);
        }
    }
    onStopEditMode = () => {
        this.setState({
            isEditMode: false,
            commentToEdit: undefined,
            commentIdToEdit: undefined
        });
    }
    render() {
        const { id } = this.props.user || {
            id: undefined
        };
        const { title, comments } = this.props.activeNews || {
            title: undefined,
            comments: []
        };
        const className = `dashboard-chat ${this.props.isVisible ? '_visible' : ''}`;
        return (
            <div className={className}>
                <button type="button" className="dashboard-chat__close" onClick={this.onChatClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
                </button>
                <div className="dashboard-chat__news">
                    <ChatHeader
                        newsTitle={title}
                        amountOfComments={comments.length}
                    />
                </div>
                <div className="dashboard-chat__list">
                    <CommentsList
                        userId={id}
                        comments={comments}
                        onRemoveComment={this.commentRemove}
                        onEditComment={this.commentEdit}
                    />
                </div>
                <div className="dashboard-chat__form">
                    {
                        this.state.isEditMode ?
                        <EditComment
                            user={this.props.user}
                            comment={this.state.commentToEdit}
                            onSubmit={this.onEditComment}
                            onClose={this.onStopEditMode}
                        /> :
                        <AddComment
                            user={this.props.user}
                            onSubmit={this.onSendComment}
                        />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreModel) => ({
    activeNews: state.dashboard.activeNews,
    user: state.auth.user
});

const mapDispatchToProps = (dispatch: Function) => ({
    removeActiveNews: () => dispatch(removeActiveNews()),
    removeComment: (newsId: number, commentId: number) => dispatch(removeComment(newsId, commentId)),
    addComment: (id: number, comment: string) => dispatch(addComment(id, comment)),
    editComment: (newsId: number, commentId: number, comment: string) => dispatch(editComment(newsId, commentId, comment))
});

export default connect<StateProps, ActionProps>(mapStateToProps, mapDispatchToProps)(DashboardChat);