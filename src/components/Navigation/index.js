import { Routes } from "react-router";
import { Link, NavLink } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import './Navigation.scss';

const Navigation = ()=> (
    <div className="">
        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink to={ROUTES.LOGIN}>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={ROUTES.LANDING}>Landing</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to={ROUTES.HOME}>Home</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to={ROUTES.SIGNUP}>Sign Up</NavLink>
            </li>
        </ul>
    </div>
);

export default Navigation;