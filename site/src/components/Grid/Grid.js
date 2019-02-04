import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Tile from '../Tile/Tile'
import ImageFace from '../ImageFace/ImageFace'
import './style.scss';

const MOBILE_WIDTH_TRIGGER = 500;
const GRID_ROW = 4;
const DATA = {
	about: false,
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

class Grid extends Component {

	constructor(props) {
		super();

		this.state = {
			initGridRow: GRID_ROW,
			tileSize: this.isMobile() ? 100 : 100/GRID_ROW,
			tiles: props.tiles,
			initGridCol: Math.floor(Math.ceil(window.innerWidth/(100/GRID_ROW/100*window.innerHeight)+1)/2)*2,
			tileSizePx: this.isMobile() ? window.innerWidth : 100/GRID_ROW/100*window.innerHeight,
		}

		this.onResize = this.onResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize)
		if(this.props.match){
			this.setState({
				page: this.props.match.params.page
			})
		} else {
			this.setState({
				page: false
			})
		}

		// fetch('https://api.imgur.com/3/gallery/t/yolo', { 
		// 	headers: {'Authorization':'Client-ID 6d843909dd86ffb'}
		// })
		// .then(function(response) {
		// 	return response.json();
		// })
		// .then(function(myJson) {
		// 	console.log(myJson);
		// });
	}

	onResize() {
		this.setState({
			tileSize: this.isMobile() ? 100 : 100/GRID_ROW,
			initGridCol: Math.floor(Math.ceil(window.innerWidth/(100/GRID_ROW/100*window.innerHeight)+1)/2)*2,
			tileSizePx: this.isMobile() ? window.innerWidth :100/GRID_ROW/100*window.innerHeight,
		})
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

		let grid = [];
		const { initGridCol, initGridRow, tileSize, tileSizePx, page } = this.state;
		let activitiesTileCounter = 0;
		// ROW
		for(let row = 0; row<initGridRow; row++) {
			// COL
			for(let col = 0; col<initGridCol; col++) {

				//-- CENTER 2X2
				let firstCenter;
				if(this.isMobile()) {
					firstCenter = (row===0 && col===0);
				} else {
					firstCenter = (row === Math.floor(initGridRow/2)-1) && (col === Math.floor(initGridCol/2)-1);
				}

				const isCenter = ((row === Math.floor(initGridRow/2)-1)
				|| (row === Math.floor(initGridRow/2)))
				&& ((col === Math.floor(initGridCol/2)-1)
				|| (col === Math.floor(initGridCol/2)));

				if(firstCenter) {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+(this.isMobile()?'vw':'vh'),
						height:tileSize+(this.isMobile()?'vw':'vh'),
					}}>
						<Tile 
							key={row+''+col} 
							index={col+1 + row*initGridCol} 
							size={this.isMobile()?1:2} 
							width={tileSizePx}  
							side={page} 
							zIndex="10"
							center={
								<img style={{
										height: '100%',
									}}
								src={'./images/FPlogo.png'} alt='Flat Pixel Logo'/>
							}
							left={
								<h1>Contact</h1>
							}
							right={false}
							fixed={Nav}
							router={{
								contact: 'left'
							}}
						/>
					</div>);
				} else if(isCenter && !this.isMobile) {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+(this.isMobile()?'vw':'vh'),
						height:tileSize+(this.isMobile()?'vw':'vh'),
					}}></div>);
				} else {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+(this.isMobile()?'vw':'vh'),
						height:tileSize+(this.isMobile()?'vw':'vh'),
					}}>
						<Tile 
							key={row+''+col} 
							index={col+1 + row*initGridCol} 
							size={1} 
							width={tileSizePx} 
							side={page}
							center={
								<h1></h1>
							}
							left={
								<ImageFace data={DATA.activities.tiles[activitiesTileCounter%DATA.activities.tiles.length]}/>
							}
							right={
								<h1></h1>
							}
							router={{
								activities: 'left',
								about: 'right',
							}}
							/>
					</div>);
					activitiesTileCounter++;
				}

			}
		}

		//-- GRID LEFT OFFSET POSITION (VERTICAL ALIGN)
		let gridLeftOffset = (window.innerWidth - tileSizePx*initGridCol) / 2;

		return (
			<div className={"grid grid"+(!!this.state.page?' grid--'+this.state.page:'')}>
				<div className="grid__wrapper" 
					style={{
						width: this.isMobile() ? window.innerWidth : initGridCol*tileSizePx,
						transform: 'translateX('+(this.isMobile() ? 0 : gridLeftOffset)+'px)',
					}} 
				>
					{grid}
				</div>
			</div>
		);
	}
}

export default Grid;
