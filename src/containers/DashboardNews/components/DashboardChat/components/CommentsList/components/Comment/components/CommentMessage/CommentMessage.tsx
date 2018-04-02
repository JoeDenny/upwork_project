import * as React from 'react';
import './CommentMessage.css';

interface Props {
    message: string;
}

class CommentMessage extends React.Component<Props> {
    render() {
        return (
            <div className="comment-message">
                {this.props.message}
            </div>
        );
    }
}

export default CommentMessage;