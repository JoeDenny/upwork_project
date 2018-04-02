import * as React from 'react';
import './UserPhoto.css';

interface Props {
    link?: string;
    size?: number;
}

const UserPhoto = (props: Props) => {
    const { size, link } = props;
    const style = {
        width: `${size}px`,
        height: `${size}px`
    };
    return (
        <div 
            className="user-photo"
            style={style}
        >
            <img src={link} />
        </div>
    );
};

export default UserPhoto;