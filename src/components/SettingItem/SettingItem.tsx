import * as React from 'react';
import './SettingItem.css';

interface Props {
    logo: string;
    title: string;
    size: number;
    onClick?: Function;
    setting?: any;
}

class SettingItem extends React.Component<Props> {
    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.setting);
        }
    }
    render() {
        const {logo, size, title} = this.props,
            imgStyles = {
                width: size,
                minWidth: size
            };
        return (
            <div 
                className="setting-item"
                onClick={this.onClick}
            >
                <img 
                    className="setting-item__img" 
                    style={imgStyles}
                    src={logo} 
                />
                <span className="setting-item__title">{title}</span>
            </div>
        );
    }
}

export default SettingItem;