import * as React from 'react';
import './NewsList.css';
import NewsModel from '../../../../models/NewsModel';
import News from './components/News';
import TwitterNews from './components/TwitterNews';

interface Props {
    onOpenComment: Function;
    news?: NewsModel[];
    listMode: number;
}

class NewsList extends React.Component<Props> {
    componentWillReceiveProps(newProps: Props) {
        if (newProps.news && this.props.listMode === 2) {
            setTimeout(() => {
                this.calculateWrapperHeight();
            });
        }
    }
    
    calculateWrapperHeight() {
        const news = document.querySelectorAll('.news-item'),
            newsList = document.querySelector('.news-list');
        let height = 0;

        if (news && newsList) {
            Array.prototype.forEach.call(news, (n: HTMLElement) => {
                height += n.clientHeight;
            });

            newsList.setAttribute('style', `height: ${height}psx`);
        }
    }

    onOpenComment = () => {
        this.props.onOpenComment();
    }
    render() {
        let className = null;
        switch (this.props.listMode) {
            case 0:
                className = 'news-list _full-width';
                break;
            case 1:
                className = 'news-list _margin';
                break;
            case 2:
                className = 'news-list _card';
                break;
            default:
                className = 'news-list _full-width';
                break;
        }
        const { news } = this.props;
        return (
            <div className={className}>
                {news && news.map((n: NewsModel) => (
                    n.additional ? 
                    <TwitterNews
                        key={n.id}
                        news={n}
                        onOpenComment={this.onOpenComment}
                    />
                    :
                    <News
                        key={n.id}
                        news={n}
                        onOpenComment={this.onOpenComment}
                    />
                ))}
            </div>
        );
    }
}

export default NewsList;