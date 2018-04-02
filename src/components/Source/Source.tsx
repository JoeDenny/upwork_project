import * as React from 'react';
import './Source.css';
import SourceModel from '../../models/SourceModel';

interface Props {
    source: SourceModel;
}

class Source extends React.Component<Props> {
    render() {
        if (!this.props.source) { return null; }
        const {title, logo_path} = this.props.source;
        return (
            <div className="source">
                <div className="source__img">
                    <img src={logo_path} />
                </div>
                <div className="source__title">
                    {title}
                </div>
            </div>
        );
    }
}

export default Source;