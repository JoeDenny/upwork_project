import * as React from 'react';
import './TweetUserImage.css';

interface Props {
    imgLink: string | null;
}

class TweetUserImage extends React.Component<Props> {
    render() {
        if (this.props.imgLink) {
            return (
                <>
                    <img src={this.props.imgLink} />
                </>
            );
        } 

        return '';
    }
}

export default TweetUserImage;