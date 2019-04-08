import React, { Component } from 'react';
import  Nav from "../../Nav/Nav";

class MobileNav extends Component {

	state = {
		visible: false,
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
		this.onScroll();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll = () => {
		const el = document.scrollingElement || document.documentElement;
		if(el.scrollTop > (window.innerHeight - 100)) {
			this.setState({
				visible: true,
			})
		} else {
			this.setState({
				// visible: false,
				visible: true,
			})
		}
	}

	render() {

		const {visible} = this.state;

		return (
			<div
				style={{
					position: 'fixed',
					top: visible?0:'-80px',
					width: '100%',
					height: '38px',
					padding: '14px 10px 10px',
					boxSizing: 'border-box',
					zIndex: 1,
					transition: 'top .5s',
					background: '#FF6B6A',
					boxShadow: '0px 10px 53px -1px rgba(0,0,0,0.2)',
				}}
			>
				<Nav />
			</div>
		);
	}
}

export default MobileNav;
