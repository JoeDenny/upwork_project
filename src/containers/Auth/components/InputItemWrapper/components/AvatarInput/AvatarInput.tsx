import * as React from 'react';
import './AvatarInput.css';

interface Props {
    file?: File;
    onChange: Function;
    name?: string;
}

class AvatarInput extends React.Component<Props> {
    onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const target = event.currentTarget;

        if (target && target.files && target.files.length > 0) {
            const file = target.files[0];

            this.props.onChange(file);
            this.updateImg(file);
        }
    }
    updateImg = (file: File) => {
        const fr = new FileReader(),
            img = document.querySelector('.file-input__placeholder-img');

        fr.onload = () => {
            if (img) {
                img.setAttribute('src', fr.result); 
            }
        };
        fr.readAsDataURL(file);
    }
    render() {
        const { name } = this.props;
        return (
            <div className="file-input">
                <div className="file-input__placeholder">
                    <img
                        className="file-input__placeholder-img"
                    />
                </div>
                <label>
                    <input 
                        type="file" 
                        onChange={this.onChange}
                        name={name}
                    />
                    <div className="file-input__btn">Upload image</div>
                </label>
            </div>
        );
    }
}

export default AvatarInput;