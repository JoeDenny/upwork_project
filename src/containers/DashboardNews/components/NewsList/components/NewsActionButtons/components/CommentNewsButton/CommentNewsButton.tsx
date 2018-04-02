import * as React from 'react';
import './CommentNewsButton.css';
import { connect } from 'react-redux';
import { setActiveNews } from '../../../../../../actions';
import NewsModel from '../../../../../../../../models/NewsModel';

interface Props {
    id: number;
    onOpenComment: Function;
    comments: number;
    news: NewsModel;
}

interface ActionProps {
    setActiveNews: Function;
}

const CommentNewsButton = (props: Props & ActionProps) => {
    const onOpenComment = () => {
        props.setActiveNews(props.news);
        props.onOpenComment();
    };

    return (
        <button type="button" className="comment-news-button" onClick={onOpenComment}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path d="M401.625 325.125h-191.25c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125h191.25c10.557 0 19.125-8.568 19.125-19.125s-8.568-19.125-19.125-19.125zm38.25-114.75h-267.75c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125h267.75c10.557 0 19.125-8.568 19.125-19.125s-8.568-19.125-19.125-19.125zM306 0C137.012 0 0 119.875 0 267.75c0 84.514 44.848 159.751 114.75 208.826V612l134.047-81.339c18.552 3.061 37.638 4.839 57.203 4.839 169.008 0 306-119.875 306-267.75S475.008 0 306 0zm0 497.25c-22.338 0-43.911-2.601-64.643-7.019l-90.041 54.123 1.205-88.701C83.5 414.133 38.25 345.513 38.25 267.75c0-126.741 119.875-229.5 267.75-229.5s267.75 102.759 267.75 229.5S453.875 497.25 306 497.25z"/></svg>
            <span>{props.comments}</span>
        </button>
    );
};

const mapDispatchToProps = (dispatch: Function) => ({
    setActiveNews: (news: NewsModel) => dispatch(setActiveNews(news))
});

export default connect<Props, ActionProps>(null, mapDispatchToProps)(CommentNewsButton);