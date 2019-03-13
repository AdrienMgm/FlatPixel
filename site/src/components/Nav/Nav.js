import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.scss';

class Nav extends Component {

	render() {
		return (
			<ul className="nav">
				{/* <li>
					<Link to="/">Home</Link>
				</li> */}
				<li>
					<Link to="./about">ABOUT</Link>
				</li>
				<li>
					<Link to="./activities">ACTIVITIES</Link>
				</li>
				<li>
					<Link to="./contact">CONTACT</Link>
				</li>
			</ul>
		);
	}
}

export default Nav;
