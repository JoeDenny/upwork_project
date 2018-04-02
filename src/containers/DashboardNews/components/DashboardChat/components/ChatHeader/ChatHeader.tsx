import * as React from 'react';
import './ChatHeader.css';

interface Props {
    newsTitle?: string;
    amountOfComments: number;
}

class ChatHeader extends React.Component<Props> {
    render() {
        const {newsTitle, amountOfComments} = this.props;
        let commentString = null;
        if (amountOfComments === 0) {
            commentString = 'No comments yet';
        } else {
            if (amountOfComments === 1) {
                commentString = `${amountOfComments} comment`;
            } else {
                commentString = `${amountOfComments} comments`;
            }
        }
        return (
            <div className="chat-header">
                <div className="chat-header__title">{newsTitle}</div>
                <div className="chat-header__amount">{commentString}</div>
            </div>
        );
    }
}

export default ChatHeader;