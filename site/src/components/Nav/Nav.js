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
					<Link to="./about">About</Link>
				</li>
				<li>
					<Link to="./activities">activities</Link>
				</li>
				<li>
					<Link to="./contact">contact</Link>
				</li>
			</ul>
		);
	}
}

export default Nav;
