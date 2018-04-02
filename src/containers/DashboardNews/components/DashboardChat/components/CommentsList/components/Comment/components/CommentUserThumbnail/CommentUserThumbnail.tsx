import * as React from 'react';
import './CommentUserThumbnail.css';

interface Props {
    avatarPath?: string;
}

class CommentUserThumbnail extends React.Component<Props> {
    render() {
        return (
            <div className="comment-user-thumbnail">
                <img src={this.props.avatarPath} />
            </div>
        );
    }
}

export default CommentUserThumbnail;