import React, { Component } from 'react';
import Input from '../components/Input';
import "./Signup.css"
import { withTranslation } from "react-i18next";
import { changeLanguage } from '../api/apiCalls';
import { login } from '../api/apiCalls';
import ButtonWithProgress from '../components/ButtonWithProgress';
import { withApiProgress } from '../shared/ApiProgress';
import {connect} from "react-redux";
import {loginSuccess} from "../redux/authActions";
//import {Authentication} from "../shared/AuthenticationContext";

class UserSignInPage extends Component {

    //static contextType=Authentication;

    state = {
        username: null,
        password: null,
        error: null
    }

    

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            error:null
        })
    }

    onClickLogin = async event => {
        event.preventDefault();
        const { username, password } = this.state;
        const creds = {
            username,
            password
        };

        const { push }=this.props.history;

        this.setState({
            error:null
        })
        try {
            const response = await login(creds)
            push("/")
            
            const authState={
                ...response.data,
                password
            }

            this.props.onLoginSuccess(authState)
        } catch (apiError) {
            this.setState({
                error: apiError.response.data.message
            })
        }

    }

    onChangeLanguage = language => {
        const { i18n } = this.props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    render() {
        const { t , pendingApiCall} = this.props;
        const{username,password,error}=this.state;
        const buttonEnabled=username && password;
        return (
            <div className="signup-form">
                <h1 className="text-center">{t('Login')}</h1>
                <p style={{color:"#818"}} class="hint-text">{t("Please Sign In")}</p>
                <div className="form-group">
                    <Input name="username" label={t("Username")} onChange={this.onChange} />
                    <Input name="password" label={t("Password")} type="password" onChange={this.onChange} />
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="text-center">
                        <ButtonWithProgress
                        disabled={!buttonEnabled ||pendingApiCall}
                            onClick={this.onClickLogin}
                            pendingApiCall={pendingApiCall}
                            text={t('Login')}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

const UserSignInPageWithTranslation = withTranslation()(UserSignInPage);

const mapDispatchProps=(dispatch)=>{
    return{
        onLoginSuccess:(authState)=>dispatch(loginSuccess(authState))
        }
    }

export default connect(null,mapDispatchProps)(withApiProgress(UserSignInPageWithTranslation,'/api/1.0/auth'));