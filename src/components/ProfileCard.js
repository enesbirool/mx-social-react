import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
//import { Authentication } from "../shared/AuthenticationContext"

const ProfileCard = (props) => {

    const pathUsername = props.match.params.username;
    let message = "we can not edit";
    if (pathUsername === props.loggedInUsername) {
        message = "we can edit"
    }
    return (
        <div>
            {message}
        </div>
    );

};
//class ProfileCardContextWrapper extends React.Component {
    //static contextType = Authentication;
//    render() {
//        return (
//            <div>
//                <ProfileCard {...this.props} username={this.context.state.username}></ProfileCard>
//            </div>
//        )
//    }
//}

const mapStateToProps=(store)=>{
    return{
        loggedInUsername:store.username
    }
}


export default connect(mapStateToProps)(withRouter(ProfileCard));