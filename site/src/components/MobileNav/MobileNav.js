import React, { Component } from 'react';
import { Link } from "react-router-dom";
import  Nav from "../Nav/Nav";

class MobileNav extends Component {

	state = {
		visible: false,
	}

	componentDidMount() {
		console.log('TEUB')
		window.addEventListener('scroll', this.onScroll);
		this.onScroll();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll = () => {
		console.log('SCROLL', document.documentElement.scrollTop > window.innerHeight)
		if(document.documentElement.scrollTop > window.innerHeight) {
			this.setState({
				visible: true,
			})
		} else {
			this.setState({
				visible: false,
			})
		}
	}


	render() {

		const {visible} = this.state;

		return (
			<div
				style={{
					position: 'fixed',
					top: visible?0:'-40px',
					width: '100%',
					height: '40px',
					zIndex: 1,
					transition: 'top .5s',
					background: 'rgba(255,255,255,0.6)',
				}}
			>s
				<Nav />
			</div>
		);
	}
}

export default MobileNav;
