import * as React from 'react';
import './News.css';
import NewsModel from '../../../../../../models/NewsModel';
import Source from '../../../../../../components/Source';
import AddedTimeAgo from '../../../../../../components/AddedTimeAgo';
import NewsActionButtons from '../NewsActionButtons';
import RemoveNewsButton from '../RemoveNewsButton';
import BookmarkNewsButton from '../NewsActionButtons/components/BookmarkNewsButton';
import ShareNewsButton from '../NewsActionButtons/components/ShareNewsButton';

interface Props {
    news: NewsModel;
    onOpenComment: Function;
}
class News extends React.Component<Props> {
    onOpenComment = () => {
        this.props.onOpenComment();
    }
    render() {
        const {
            id,
            source,
            title,
            description,
            thumbnail,
            is_favorited,
            favorites_count,
            comments_count,
            posted_date_formated
        } = this.props.news;
        return (
            <div className="news news-item">
                <div className="news__close">
                    <RemoveNewsButton />
                </div>
                <div className="news__share">
                    <ShareNewsButton />
                </div>
                <div className="news__img">
                    <img src={thumbnail} />
                </div>
                <div className="news__content">
                    <div className="news__content-wrapper">
                        <div className="news__content-source">
                            <Source source={source} />
                        </div>
                        <div className="news__content-title">
                            <span>{title}</span>
                        </div>
                        <div className="news__content-describtion">{description}</div>
                    </div>
                    <div className="news__content-buttons">
                        <div className="news__content-buttons-left">
                            <BookmarkNewsButton />
                        </div>
                        <div className="news__content-time">
                            <AddedTimeAgo
                                iconVisible={true}
                                title={posted_date_formated}
                            />
                        </div>
                        <div className="news__content-buttons-right">
                            <NewsActionButtons
                                id={id}
                                isFavorited={is_favorited}
                                likes={favorites_count}
                                comments={comments_count}
                                news={this.props.news}
                                onOpenComment={this.onOpenComment}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;