import * as React from 'react';
import './FilterList.css';
import SettingItem from '../../../../../SettingItem';

interface Props {
    list?: any;
    onAddSetting: Function;
}

class FilterList extends React.Component<Props> {
    onAddSetting = (setting: any) => {
        this.props.onAddSetting(setting);
    }
    render() {
        return (
            <ul className="filter-list">
                {
                    this.props.list && this.props.list.map((setting: any) => (
                        <li key={setting.id} className="filter-list__item">
                            <SettingItem
                                logo={setting.logo_path || setting.image_path}
                                size={60}
                                title={setting.display_name || setting.title || setting.name}
                                setting={setting}
                                onClick={this.onAddSetting}
                            />
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default FilterList;