import * as React from 'react';
import './InputItemWrapper.css';

interface Props {
    children: React.ReactNode;
}

class InputItemWrapper extends React.Component<Props> {
    render() {
        return (
            <div className="input-item-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default InputItemWrapper;