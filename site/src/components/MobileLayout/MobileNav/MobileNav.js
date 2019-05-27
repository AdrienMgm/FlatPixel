import React, { Component } from 'react';
import  Nav from "../../Nav/Nav";
import './style.scss';

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
				className="mobile-nav-wrapper"
				style={{
					top: visible?0:'-80px',
				}}
			>
				<Nav />
			</div>
		);
	}
}

export default MobileNav;
