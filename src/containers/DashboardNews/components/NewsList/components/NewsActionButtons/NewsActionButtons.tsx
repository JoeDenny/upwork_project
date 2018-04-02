import * as React from 'react';
import './NewsActionButtons.css';
import LikeNewsButton from './components/LikeNewsButton';
import CommentNewsButton from './components/CommentNewsButton';
import NewsModel from '../../../../../../models/NewsModel';

interface Props {
    id: number;
    onOpenComment: Function;
    likes: number;
    comments: number;
    news: NewsModel;
    isFavorited: number;
}
const NewsActionButtons = (props: Props) => {
    const onOpenComment = () => {
        props.onOpenComment();
    };

    return (
        <div className="news-action-buttons">
            <LikeNewsButton
                id={props.id}
                isFavorited={props.isFavorited}
                likes={props.likes}
            />
            <CommentNewsButton
                id={props.id}
                comments={props.comments}
                onOpenComment={onOpenComment}
                news={props.news}
            />
        </div>
    );
};

export default NewsActionButtons;