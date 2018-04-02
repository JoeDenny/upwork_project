import * as React from 'react';
import './AddSource.css';

class AddSource extends React.Component {
    render() {
        return (
            <button type="button" className="add-source">
                <span>Add custom Twitter sources</span>
            </button>
        );
    }
}

export default AddSource;