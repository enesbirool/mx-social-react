import React from 'react';
import { signup} from '../api/apiCalls';
import Input from '../components/Input';
import "./Signup.css";
import {withTranslation} from "react-i18next";
import ButtonWithProgress from '../components/ButtonWithProgress';
import { withApiProgress } from '../shared/ApiProgress';

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        errors: {}

    };

    onChange = event => {
        const {t}=this.props;
        const { name, value } = event.target;
        const errors={...this.state.error}
        errors[name]=undefined
        if(name==="password" || name==="passwordRepeat"){
            if(name === "password" && value !== this.state.passwordRepeat){
                errors.passwordRepeat=t("Password mismatch");
            }else if(name=== "passwordRepeat" && value !== this.state.password){
                errors.passwordRepeat=t("Password mismatch");
            }else{
                errors.passwordRepeat=undefined;
            }
        }
        this.setState({
            [name]: value,
            errors
        });
    }

    onClickSignup = event => {
        event.preventDefault();

        const { username, displayName, password } = this.state;

        const body = {
            username,
            displayName,
            password
        };

        signup(body)
            .then((response) => {
                this.setState({ pendingApiCall: false });
            }).catch(error => {
                if(error.response.data.validationErrors){
                    this.setState({ errors: error.response.data.validationErrors });
                }
            });
            
    };


    render() {
        const { errors } = this.state;
        const{username,displayName,password,passwordRepeat}=errors;
        const {t,pendingApiCall}=this.props;
        return (
            <div className="signup-form">
                <h1 className="text-center">{t('Sign Up')}</h1>
                <p style={{color:"#818"}} class="hint-text">{t("Create your account. It's free and only takes a minute.")}</p>
                <div className="form-group">
                    <Input name="username" label={t("Username")} error={username} onChange={this.onChange}/>
                    <Input name="displayName" label={t("Display Name")}  error={displayName} onChange={this.onChange}/>
                    <Input name="password" label={t("Password")}  error={password} onChange={this.onChange} type="password"/>
                    <Input name="passwordRepeat" label={t("RePassword")}  error={passwordRepeat} onChange={this.onChange} type="password"/>
                    <div className="text-center">
                        <ButtonWithProgress
                            onClick={this.onClickSignup}
                            disabled={pendingApiCall || passwordRepeat!==undefined}
                            pendingApiCall={pendingApiCall}
                            text={t('Sign Up')}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


const UserSignupPageWithApiProgress=withApiProgress(UserSignupPage,'/api/1.0/users')
const UserSignupPageWithTranslation=withTranslation()(UserSignupPageWithApiProgress);

export default UserSignupPageWithTranslation;