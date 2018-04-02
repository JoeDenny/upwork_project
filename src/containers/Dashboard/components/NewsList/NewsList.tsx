import * as React from 'react';
import './NewsList.css';
import NewsModel from '../../../../models/NewsModel';
import News from './components/News';

class NewsList extends React.Component {
    news: NewsModel[] = [
        {
            id: 0,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat tellus eget lectus.',
            link: 'https://google.com',
            thumbnail: 'https://rocketdock.com/images/screenshots/Chelsea-256x256.png',
            posted_date: new Date(),
            categories: ['test'],
            source_id: 0
        },
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat tellus eget lectus.',
            link: 'https://google.com',
            thumbnail: 'https://rocketdock.com/images/screenshots/Chelsea-256x256.png',
            posted_date: new Date(),
            categories: ['test'],
            source_id: 1
        }
    ];
    render() {
        return (
            <div className="news-list">
                {this.news.map((news) => (
                    <News
                        news={news}
                    />
                ))}
            </div>
        );
    }
}

export default NewsList;