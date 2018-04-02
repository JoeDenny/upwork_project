import * as React from 'react';
import InputItemWrapper from '../../../components/InputItemWrapper';
import TextInput from '../../../components/InputItemWrapper/components/TextInput';
import PasswordInput from '../../../components/InputItemWrapper/components/PasswordInput';
import AuthFormButton from '../../../components/AuthFormButton';

interface Props {
    email?: string;
    password?: string;
    onChange: Function;
    onSubmit: Function;
}
class LoginForm extends React.Component<Props> {
    onInputChange = (title: string) => {
        return (value: string) => {
            this.props.onChange(title, value);
        };
    }
    onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        this.props.onSubmit();
    }

    render() {
        return (
            <form 
                className="login-form" 
                onSubmit={this.onSubmit}
            >
                <InputItemWrapper>
                    <TextInput
                        placeholder={'Email'}
                        onChange={this.onInputChange('email')}
                    />
                </InputItemWrapper>
                <InputItemWrapper>
                    <PasswordInput
                        placeholder={'Password'}
                        onChange={this.onInputChange('password')}
                    />
                </InputItemWrapper>
                <AuthFormButton
                    title="Login"
                />
            </form>
        );
    }
}

export default LoginForm;