import * as React from 'react';
import './PasswordInput.css';

interface Props {
    placeholder: string;
    onChange: Function;
    name?: string;
}

class PasswordInput extends React.Component<Props> {
    onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        this.props.onChange(event.currentTarget.value.trim());
    }

    render() {
        const { placeholder, name } = this.props;
        return (
            <label className="text-input">
                <input 
                    type="password"
                    name={name}
                    placeholder={placeholder} 
                    onChange={this.onChange} 
                />
            </label>
        );
    }
}

export default PasswordInput;