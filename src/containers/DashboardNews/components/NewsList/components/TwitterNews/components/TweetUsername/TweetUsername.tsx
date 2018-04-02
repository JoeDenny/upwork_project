import * as React from 'react';
import './TweetUsername.css';

interface Props {
    username?: string;
}

class TweetUsername extends React.Component<Props> {
    render() {
        return (
            <div className="tweet-username">
                <div className="tweet-username__img">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" />
                </div>
                <div className="tweet-username__title">
                    @{this.props.username}
                </div>
            </div>
        );
    }
}

export default TweetUsername;