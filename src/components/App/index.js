import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import LoginPage from "../Login/LoginPage";
import LandingPage from "../LandingPage";
import * as ROUTES from '../../constants/routes';
import SignupPage from "../SignUp";
import { auth,provider } from "../Firebase/firebase";
import {useDispatch, useSelector} from 'react-redux';
import { setActiveUser,setUserLogOutState,selectEmailName,selectUserName, } from "../../redux/userSlice";

function App(){

    const dispatch=useDispatch();

    const userName=useSelector(selectUserName);
    const userEmail=useSelector(selectEmailName);

    const handleSignIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch(setActiveUser({
                userName:result.user.displayName,
                userEmail: result.user.email
            }))
        })
    }
    const handleSignout=()=>{
        auth.signOut().then(()=>{
            dispatch(setUserLogOutState())
        }).catch((err)=>alert(err.message))
    }
    return(
    
    <div>
        
        {userName?(
            <button onClick={handleSignIn}>Sign in</button>
        ):
        (
            <button onClick={handleSignout}>Sign out</button>
        )
        }
        </div>
    );
}


export default App;