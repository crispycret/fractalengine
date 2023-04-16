
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";

import styled from "styled-components";

import '../assets/styles/App.css';

import ButtonAppBar from "../components/navigation/ButtonAppBar" ;
import ResponsiveAppBar from "../components/navigation/ResponsiveAppBar";
import SimpleBottomNavigation from "../components/navigation/SimpleBottomNavigation";

import FractalCanvas from '../components/FractalCanvas';


export const Header = () => {
    return (
        <div id="header">

            <span className="d-none d-light-inline">Try this website on dark mode.</span>
            <span className="d-none d-dark-inline">Thank you for saving your eyes in dark mode.</span>
            {/* <span className="d-no-preference-none d-dark-none d-light-none">Your browser is old!</span> */}

            <ResponsiveAppBar />
        </div>
    )
}


export const Footer = () => {
    return (
        <div id="footer">
            <SimpleBottomNavigation />
        </div>
    )
}


export const Layout = () => {
    return (
        <div className="Layout">
            <Header />

            <Outlet />
        </div>
    )
}


export default Layout;

