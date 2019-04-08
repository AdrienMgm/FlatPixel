import React, { Component } from 'react';
import './style.scss';
import MobileNav from './MobileNav/MobileNav';
import About from '../About/About';
import Contact from '../Contact/Contact';
import ImageFace from '../ImageFace/ImageFace';

class MobileLayout extends Component {

	state = {
		page: false,
	}

	componentDidMount() {

		if(this.props.match){
			this.setState({
				page: this.props.match.params.page
			})
		} else {
			this.setState({
				page: false
			})
		}

		this.pageContent = {
			about: this.props.data.about,
			contact: this.props.data.contact,
		}
	}

	componentWillReceiveProps(nextProps) {

		if(nextProps.match){
			this.setState({
				page: nextProps.match.params.page
			})
		} else {
			this.setState({
				page: false
			})
		}
	}

	getActivities() {
		
		const content = this.props.data.activities.tiles;

		let grid = [];
		grid = content.map((item, i) => {
			return <ImageFace key={i} data={item}/>
		})
		return grid;
	}

	render() {

		const {page} = this.state;

		const PageComponent = {
			'about': <About />,
			'contact': <Contact />,
			'activities': this.getActivities(),
		}[page];

		return (
			<div className="mobile-layout">
				<MobileNav />
				{PageComponent &&
					PageComponent
				}
			</div>
		)
	}
}

export default MobileLayout;