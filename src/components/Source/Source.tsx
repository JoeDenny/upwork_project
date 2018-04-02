import * as React from 'react';
import './Source.css';

interface Props {
    source?: {
        title: string;
        thumbnail: string
    };
}

class Source extends React.Component<Props> {
    render() {
        if (!this.props.source) { return null; }
        const {title, thumbnail} = this.props.source;
        return (
            <div className="source">
                <div className="source__img">
                    <img src={thumbnail} />
                </div>
                <div className="source__title">
                    {title}
                </div>
            </div>
        );
    }
}

export default Source;