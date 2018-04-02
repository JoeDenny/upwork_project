import * as React from 'react';
import './DashboardFilterInfo.css';
import SettingItem from '../../../../../../components/SettingItem';

interface Props {
    settings?: any;
    onOpenFilterOverlay: Function;
    onSaveSources: Function;
}

class DashboardFilterInfo extends React.Component<Props> {
    onOpenFilterOverlay = () => {
        this.props.onOpenFilterOverlay();
    }
    onSaveSources = () => {
        this.props.onSaveSources();
    }
    render() {
        const { settings } = this.props;
        return (
            <div className="dashboard-filter-info">
                <ul className="dashboard-filter-info__list">
                    {
                        settings && settings.slice(0, 3).map((setting: any) => (
                            <li key={setting.id} className="dashboard-filter-info__item">
                                <SettingItem
                                    logo={setting.logo_path || setting.image_path}
                                    size={60}
                                    title={setting.display_name || setting.title || setting.name}
                                />
                            </li>
                        ))
                    }
                </ul>
                {
                    settings && settings.length > 3 && 
                    <span className="dashboard-filter-info__separator">...</span>
                }
                {
                    settings && settings.length > 0 &&
                    <button 
                        className="dashboard-filter-info__edit"
                        onClick={this.onOpenFilterOverlay}
                    >
                        Edit Filter
                    </button>
                }
                {
                    settings && settings.length > 0 &&
                    <button 
                        className="dashboard-filter-info__save"
                        onClick={this.onSaveSources}
                    >
                        Save Dashboard
                    </button>
                }
            </div>
        );
    }
}

export default DashboardFilterInfo;