import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

export default () => {
	return (
		<div className="home">
            <Link to="./">
                <img className="home-logo" src={'./images/FPlogo.png'} alt='Flat Pixel Logo'/>
            </Link>
		</div>
	)
}