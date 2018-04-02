import * as React from 'react';
import InputItemWrapper from '../../../components/InputItemWrapper';
import TextInput from '../../../components/InputItemWrapper/components/TextInput';
import AvatarInput from '../../../components/InputItemWrapper/components/AvatarInput';
import PasswordInput from '../../../components/InputItemWrapper/components/PasswordInput';
import AuthFormButton from '../../../components/AuthFormButton';

interface Props {
    avatar?: File;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    onChange: Function;
    onSubmit: Function;
    onRef: Function;
}
class RegisterForm extends React.Component<Props> {
    onInputChange = (title: string) => {
        return (value: string) => {
            this.props.onChange(title, value);
        };
    }
    onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        this.props.onSubmit();
    }

    saveForm = (el: HTMLFormElement) => {
        this.props.onRef(el);
    }

    render() {
        return (
            <form 
                className="register-form" 
                onSubmit={this.onSubmit}
                ref={this.saveForm}
            >
                <InputItemWrapper>
                    <AvatarInput
                        onChange={this.onInputChange('avatar')}
                        name="avatar"
                    />
                </InputItemWrapper>
                <InputItemWrapper>
                    <TextInput
                        placeholder={'Username'}
                        onChange={this.onInputChange('username')}
                        name="name"

                    />
                </InputItemWrapper>
                <InputItemWrapper>
                    <TextInput
                        placeholder={'Email'}
                        onChange={this.onInputChange('email')}
                        name="email"
                    />
                </InputItemWrapper>
                <InputItemWrapper>
                    <PasswordInput
                        placeholder={'Password'}
                        onChange={this.onInputChange('password')}
                        name="password"
                    />
                </InputItemWrapper>
                <InputItemWrapper>
                    <PasswordInput
                        placeholder={'Confirm password'}
                        onChange={this.onInputChange('confirmPassword')}
                        name="password_confirmation"
                    />
                </InputItemWrapper>
                <AuthFormButton
                    title="Register"
                />
            </form>
        );
    }
}

export default RegisterForm;