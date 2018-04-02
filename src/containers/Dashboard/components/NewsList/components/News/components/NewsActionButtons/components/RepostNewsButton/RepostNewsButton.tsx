import * as React from 'react';
import './RepostNewsButton.css';

class RepostNewsButton extends React.Component {
    render() {
        return (
            <button type="button" className="repost-news-button">
                {/* tslint:disable-next-line */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.498 37.498"><path d="M18.249 22.834l7.333 7.332-7.333 7.332v-5.664H7.416a2 2 0 0 1-2-2V7.168h4v20.666h8.833v-5zM30.081 5.168H19.749V0l-7.333 7.332 7.334 7.334V9.168h8.332v20.666h4V7.168a2 2 0 0 0-2.001-2z"/></svg>
            </button>
        );
    }
}

export default RepostNewsButton;