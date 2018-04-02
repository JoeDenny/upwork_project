import * as React from 'react';
import './NewsActionButtons.css';
import LikeNewsButton from './components/LikeNewsButton';
import CommentNewsButton from './components/CommentNewsButton';
import RepostNewsButton from './components/RepostNewsButton';
import ShareNewsButton from './components/ShareNewsButton';

class NewsActionButtons extends React.Component {
    render() {
        return (
            <div className="news-action-buttons">
                <LikeNewsButton />
                <CommentNewsButton />
                <RepostNewsButton />
                <ShareNewsButton />
            </div>
        );
    }
}

export default NewsActionButtons;