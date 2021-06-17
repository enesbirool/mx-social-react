import React,{Component} from 'react';
import Input from '../components/Input';
import "./Signup.css"
import {withTranslation} from "react-i18next";
import { changeLanguage } from '../api/apiCalls';
import LanguageSelector from '../components/LanguageSelector';

class UserSignInPage extends Component {

    state={
        username:null,
        password:null
    }

    onChange=event=>{
        const { name ,value }=event.target;
        this.setState({
            [name]:value
        })
    }

    onChangeLanguage=language=>{
        const {i18n}=this.props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    render() {
        const {t}=this.props;
        return (
            <div class="signup-form">
                <h1 className="text-center">{t('Sign In')}</h1>
                <p class="hint-text">{t("Please Sign In")}</p>
                <div class="form-group">
                    <Input name="username" label={t("Username")} onChange={this.onChange}/>
                    <Input name="password" label={t("Password")} type="password" onChange={this.onChange}/>
                    <div className="text-center">
                        <button
                            className="btn btn-primary"
                        >{t('Sign In')}</button>
                    </div>
                    <LanguageSelector></LanguageSelector>
                </div>
            </div>
        )
    }

}

const UserSignInPageWithTranslation=withTranslation()(UserSignInPage);

export default UserSignInPageWithTranslation;