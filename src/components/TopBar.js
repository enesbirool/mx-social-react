import React, { Component } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { connect } from "react-redux"
import {logoutSuccess} from "../redux/authActions";
//import { Authentication } from "../shared/AuthenticationContext";

class TopBar extends Component {

    //static contextType = Authentication;

    render() {
        const { t,isLoggedIn,username,onLogoutSuccess } = this.props;
        let links = (<ul className="navbar-nav ml-auto" style={{ marginLeft: "auto" }}>
            <li>
                <Link className="nav-link" to="/login">
                    {t('Login')}
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/register">
                    {t('Sign Up')}
                </Link>
            </li>
        </ul>);
        if (isLoggedIn) {
            links = (<ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                <li>
                    <Link className="nav-link" to={`/user/${username}`}>
                        {username}
                    </Link>
                </li>
                <li className="nav-link" onClick={onLogoutSuccess} to={"/"} style={{ cursor: "pointer" }}>{t("Logout")}</li>
            </ul>)
        }

        return (
            <div className="shadow-sm bg-light mb-2">
                <nav className="navbar navbar-light container navbar-expand">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="30" alt="Logo" />
                        Hoaxify
                    </Link>
                    {links}
                </nav>
            </div>

        )



    }
}

const TopBarWithTranslation=withTranslation()(TopBar);

const mapStateToProps=(store)=>{
    return{
        isLoggedIn:store.isLoggedIn,
        username:store.username
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onLogoutSuccess:()=>dispatch(logoutSuccess())
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(TopBarWithTranslation);