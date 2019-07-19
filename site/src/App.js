import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Grid from './components/Grid/Grid';
import './App.scss';
import MobileLayout from './components/MobileLayout/MobileLayout';

const MOBILE_WIDTH_TRIGGER = 740;
const DATA = {
	about: {
		tiles: [
			{
				imgSrc: './images/about/join_us.png',
				onlyDesktop: true,
			},
			{
				imgSrc: './images/about/adrien.png',
				mobileOrder: 2,
			},
			{
				imgSrc: './images/about/join_us.png',
				onlyDesktop: true,
			},
			{
				imgSrc: './images/about/david.png',
				mobileOrder: 4,
			},
			{
				imgSrc: './images/about/join_us.png',
				onlyDesktop: true,
			},
			{
				imgSrc: './images/about/angie.png',
				mobileOrder: 3,
			},
			{
				imgSrc: './images/about/ubilogo.png',
				mobileOrder: 5,
			},
			{
				imgSrc: './images/about/nicklogo.png',
				mobileOrder: 5,
			},
			{
				imgSrc: './images/about/spaceapelogo.png',
				mobileOrder: 5,
			},
			{
				imgSrc: './images/about/magiclogo.png',
				mobileOrder: 5,
			},
			{
				imgSrc: './images/about/join_us.png',
				onlyDesktop: true,
			},
			{
				imgSrc: './images/about/marcin.png',
				mobileOrder: 1,
			},
		],
	},
	activities: {
		tiles: [
			{
				imgSrc: './images/insta/1.jpg',
				description: 'flat.pixel #gamedev',
			},
			{
				imgSrc: './images/insta/2.jpg',
				description: 'flat.pixel #crunchtime #nickelodeon #donottouch #deadline ☠️',
			},
			{
				imgSrc: './images/insta/3.jpg',
				description: 'flat.pixel Drawing on this new iPad is a fucking blast! #appicon #gamedev #gameart #doublecrunch #lovemyjob #astroblast',
			},
			{
				imgSrc: './images/insta/4.jpg',
				description: 'flat.pixel ASTROBLAST #appicon #gamedev #spacemarine',
			},
			{
				imgSrc: './images/insta/5.jpg',
				description: 'flat.pixel ASTROBLAST Pale Ale!@beavertownbeer has the best artwork on their cans, and the beer’s pretty good too! #scifibeer #beer #gamedev',
			}
		]
	},
	contact: {
		tiles: [
			{
				content: 'This is contact'
			}
		]
	},
};

class App extends Component {

	constructor() {
		super();

		this.state = {
			page: false
		}

		this.onResize = this.onResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize)
		this.setState({
			isMobile: this.isMobile(),
		});
		this.onResize();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize)
	}

	onResize() {
		this.setState({
			isMobile: this.isMobile(),
		});
	}

	isMobile() {
		const body = document.documentElement.querySelector('body');
		if(window.innerWidth<MOBILE_WIDTH_TRIGGER) {
			body.classList.add('is-mobile');
			return true;
		}
		body.classList.remove('is-mobile');
		return false;
	}

	render() {

		const {isMobile} = this.state;

		return (
			<div className="app">
				<div>
					<Router basename={process.env.PUBLIC_URL}>
						<Route
							exact
							path="/:page"
							children={({ match, ...rest }) => {

								if(isMobile) {
									return (
										<MobileLayout data={DATA} match={match}/>
									)
								} else {
									return (
										<Grid data={DATA} match={match}/>
									)
								}
							}
						}/>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
