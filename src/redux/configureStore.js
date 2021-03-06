import {createStore} from "redux"
import authReducer from "./authReducer"

const loggedInState={
    isLoggedIn:true,
    username:"user1",
    displayName:"display1",
    image:null,
    password:"password"
  }
  
const configureStore=()=>{
    return createStore(authReducer,loggedInState,window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default configureStore;