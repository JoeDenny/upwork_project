import * as React from 'react';
import './FilterItem.css';
import { removeSetting } from '../../../../../../../../containers/DashboardNews/actions';
import { connect } from 'react-redux';

interface Props {
    setting: any;
}

interface ActionProps {
    removeSetting: Function;
}

class FilterItem extends React.Component<Props & ActionProps> {
    removeSetting = () => {
        this.props.removeSetting(this.props.setting);
    }
    render() {
        const { setting } = this.props;
        return (
            <div className="filter-item">
                <span>{setting.display_name || setting.title || setting.name}</span>
                <button 
                    type="button" 
                    className="filter-item__remove"
                    onClick={this.removeSetting}
                >
                    <svg viewBox="0 0 64 64"><path fill="#1D1D1B" d="M28.941 31.786L.613 60.114a2.014 2.014 0 1 0 2.848 2.849l28.541-28.541 28.541 28.541c.394.394.909.59 1.424.59a2.014 2.014 0 0 0 1.424-3.439L35.064 31.786 63.41 3.438A2.014 2.014 0 1 0 60.562.589L32.003 29.15 3.441.59A2.015 2.015 0 0 0 .593 3.439l28.348 28.347z"/></svg>
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    removeSetting: (setting: any) => dispatch(removeSetting(setting))
});

export default connect<Props, ActionProps>(null, mapDispatchToProps)(FilterItem);