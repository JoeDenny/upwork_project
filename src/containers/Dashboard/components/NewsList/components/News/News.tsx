import * as React from 'react';
import './News.css';
import NewsModel from '../../../../../../models/NewsModel';
import TeamOrPlayerImg from '../../../../../../components/TeamOrPlayerImg';
import getSourceById from '../../../../../../services/sourceService';
import Source from '../../../../../../components/Source';
import NewsAddedTimeAgo from '../../../../../../components/NewsAddedTimeAgo';
import NewsActionButtons from './components/NewsActionButtons';

interface Props {
    news: NewsModel;
}

class News extends React.Component<Props> {
    render() {
        const {id, title, description, thumbnail} = this.props.news;
        const source = getSourceById(id);
        return (
            <div className="news">
                <div className="news__img">
                    <TeamOrPlayerImg imgLink={thumbnail} />
                </div>
                <div className="news__content">
                    <div className="news__content-source">
                        <Source source={source} />
                    </div>
                    <div className="news__content-title">{title}</div>
                    <div className="news__content-describtion">{description}</div>
                    <div className="news__content-info">
                        <div className="news__content-info-time">
                            <NewsAddedTimeAgo />
                        </div>
                        <div className="news__content-info-buttons">
                            <NewsActionButtons />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;