import * as React from 'react';
import './CommentsList.css';
import CommentModel from '../../../../../../models/CommentModel';
import Comment from './components/Comment';

interface Props {
    userId?: number;
    comments: CommentModel[];
    onRemoveComment: Function;
    onEditComment: Function;
}

class CommentsList extends React.Component<Props> {
    onRemoveComment = (id: number) => {
        this.props.onRemoveComment(id);
    }
    onEditComment = (id: number, comment: string) => {
        this.props.onEditComment(id, comment);
    }
    render() {
        return (
            <ul className="comments-list">
                {this.props.comments.map((comment: CommentModel) => (
                    <Comment
                        key={comment.id}
                        userId={this.props.userId}
                        comment={comment}
                        onRemoveComment={this.onRemoveComment}
                        onEditComment={this.onEditComment}
                    />
                ))}
            </ul>
        );
    }
}

export default CommentsList;