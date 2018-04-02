import * as React from 'react';
import './AutoRefreshButton.css';
import FilterButton from '../../index';
import DashboardTimeFilterList from './components/DashboardTimeFilterList';

interface Props {
}

interface State {
    listWidth: number | null;
    isSettingsVisible: boolean;
}

class AutoRefreshButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            listWidth: null,
            isSettingsVisible: false
        };
    }
    componentDidMount() {
        const list = document.querySelector('.auto-refresh-button__list');

        if (list) {
            this.setState({
                ...this.state,
                listWidth: list.clientWidth + 20 // 20 - margin
            });
        }
    }
    toggleSettings = () => {
        this.setState({
            isSettingsVisible: !this.state.isSettingsVisible
        });
    }
    render() {
        const className = `auto-refresh-button ${this.state.isSettingsVisible ? '_list-visible' : ''}`;
        return (
            <FilterButton>
                <div 
                    className={className}
                    onClick={this.toggleSettings}
                >
                    <div 
                        className="auto-refresh-button__icon"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.23 487.23"><path d="M55.323 203.641a38.907 38.907 0 0 0 35.872-23.854c25.017-59.604 83.842-101.61 152.42-101.61 37.797 0 72.449 12.955 100.23 34.442l-21.775 3.371a16.981 16.981 0 0 0-14.232 14.512 16.983 16.983 0 0 0 9.867 17.768l119.746 53.872a17.012 17.012 0 0 0 16.168-1.205 17.019 17.019 0 0 0 7.796-14.208l.621-131.943a16.977 16.977 0 0 0-12.024-16.332 16.992 16.992 0 0 0-19.104 6.837l-16.505 24.805C370.398 26.778 310.1 0 243.615 0 142.806 0 56.133 61.562 19.167 149.06a39.258 39.258 0 0 0 3.429 36.987 39.265 39.265 0 0 0 32.727 17.594zM464.635 301.184a39.266 39.266 0 0 0-32.728-17.594 38.907 38.907 0 0 0-35.872 23.854c-25.018 59.604-83.843 101.61-152.42 101.61-37.798 0-72.45-12.955-100.232-34.442l21.776-3.369a16.986 16.986 0 0 0 14.233-14.514 16.985 16.985 0 0 0-9.867-17.768L49.779 285.089a17.014 17.014 0 0 0-16.169 1.205 17.017 17.017 0 0 0-7.795 14.207l-.622 131.943a16.976 16.976 0 0 0 12.024 16.332 16.991 16.991 0 0 0 19.104-6.839l16.505-24.805c44.004 43.32 104.303 70.098 170.788 70.098 100.811 0 187.481-61.561 224.446-149.059a39.252 39.252 0 0 0-3.425-36.987z"/></svg>
                    </div>
                    
                    <div className="auto-refresh-button__list">
                        <DashboardTimeFilterList />
                    </div>
                </div>
            </FilterButton>
        );
    }
}

export default AutoRefreshButton;