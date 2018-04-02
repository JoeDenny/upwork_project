import * as React from 'react';
import './GlobalSearch.css';

class GlobalSearch extends React.Component {
    onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    render() {
        const inputPlaceholder = 'Search...';
        return (
            <form className="global-search" onSubmit={this.onSubmit}>
                <input type="text" placeholder={inputPlaceholder} />
            </form>
        );
    }
}

export default GlobalSearch;