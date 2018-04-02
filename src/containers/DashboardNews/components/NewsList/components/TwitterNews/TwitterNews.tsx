import * as React from 'react';
import './TwitterNews.css';
import NewsModel from '../../../../../../models/NewsModel';
import AddedTimeAgo from '../../../../../../components/AddedTimeAgo';
import NewsActionButtons from '../NewsActionButtons';
import RemoveNewsButton from '../RemoveNewsButton';
import BookmarkNewsButton from '../NewsActionButtons/components/BookmarkNewsButton';
import ShareNewsButton from '../NewsActionButtons/components/ShareNewsButton';
import TweetUserImage from './components/TweetUserImage';
import TweetUsername from './components/TweetUsername';

interface Props {
    news: NewsModel;
    onOpenComment: Function;
}
class TwitterNews extends React.Component<Props> {
    onOpenComment = () => {
        this.props.onOpenComment();
    }
    render() {
        const {
            id,
            title,
            description,
            additional,
            source,
            is_favorited,
            favorites_count,
            comments_count,
            posted_date_formated
        } = this.props.news;
        const className = `twitter-news news-item`;
        return (
            <div className={className}>
                <div className="twitter-news__text">
                    <div className="twitter-news__close">
                        <RemoveNewsButton />
                    </div>
                    <div className="twitter-news__share">
                        <ShareNewsButton />
                    </div>
                    <div className="twitter-news__content-wrapper">
                        <div className="twitter-news__img">
                            <TweetUserImage imgLink={additional && additional.image} />
                        </div>
                        <div className="twitter-news__content">
                            <div className="twitter-news__content-source">
                                <TweetUsername username={source.title} />
                            </div>
                            <div className="twitter-news__content-title">
                                <span>{title}</span>
                            </div>
                            <div className="twitter-news__content-describtion">{description}</div>
                        </div>
                    </div>
                    <div className="twitter-news__content-buttons">
                        <div className="twitter-news__content-buttons-left">
                            <BookmarkNewsButton />
                        </div>
                        <div className="twitter-news__content-time">
                            <AddedTimeAgo
                                iconVisible={true}
                                title={posted_date_formated}
                            />
                        </div>
                        <div className="twitter-news__content-buttons-right">
                            <NewsActionButtons
                                id={id}
                                likes={favorites_count}
                                isFavorited={is_favorited}
                                comments={comments_count}
                                news={this.props.news}
                                onOpenComment={this.onOpenComment}
                            />
                        </div>
                    </div>
                </div>
                {/* {
                    media && 
                    <div className="twitter-news__media">
                        <img src={media} />
                    </div>
                } */}
            </div>
        );
    }
}

export default TwitterNews;