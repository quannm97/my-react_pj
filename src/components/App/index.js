import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import LoginPage from "../Login/LoginPage";
import LandingPage from "../LandingPage";
import * as ROUTES from '../../constants/routes';



const App = ()=>(
    <Router>
        <div>
            <Navigation/>
                <hr/>
                <Routes>
                <Route exact path={ROUTES.LANDING} element={<LandingPage/>} />
                <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
                <Route path={ROUTES.SIGNUP} element={<LoginPage/>} />
                </Routes>
            </div>
    </Router>
);

export default App;