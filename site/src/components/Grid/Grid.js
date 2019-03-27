import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Tile from '../Tile/Tile';
import ImageFace from '../ImageFace/ImageFace';
import MobileNav from '../MobileNav/MobileNav';
import About from '../About/About';
import './style.scss';

const MOBILE_WIDTH_TRIGGER = 500;
const GRID_ROW = 4;
const DATA = {
	about: {
		tiles: [
			{
				imgSrc: './images/about/join_us.png',
			},
			{
				imgSrc: './images/about/adrien.png',
			},
			{
				imgSrc: './images/about/join_us.png',
			},
			{
				imgSrc: './images/about/david.png',
			},
			{
				imgSrc: './images/about/join_us.png',
			},
			{
				imgSrc: './images/about/angie.png',
			},
			{
				imgSrc: './images/about/ubisoft.png',
			},
			{
				imgSrc: './images/about/nick.png',
			},
			{
				imgSrc: './images/about/spaceape.png',
			},
			{
				imgSrc: './images/about/magicpockets.png',
			},
			{
				imgSrc: './images/about/join_us.png',
			},
			{
				imgSrc: './images/about/marcin.png',
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

	getTileWithData(data) {
		const { initGridCol, initGridRow } = this.state;

		let tiles = [];

		for(let i = 0; i < initGridRow; i++) {
			tiles[i] = [];
			for(let j = 0; j < initGridCol; j++) {
				tiles[i][j] = 'test'+i+j;

				if(initGridRow/2-2 === i && initGridCol/2-2 === j) {
					tiles[i][j] = data[0];
				} else if(initGridRow/2-2 === i && initGridCol/2-1 === j) {
					tiles[i][j] = data[1];
				} else if(initGridRow/2-2 === i && initGridCol/2 === j) {
					tiles[i][j] = data[2];
				} else if(initGridRow/2-2 === i && initGridCol/2+1 === j) {
					tiles[i][j] = data[3];
				} else if(initGridRow/2-1 === i && initGridCol/2+1 === j) {
					tiles[i][j] = data[4];
				} else if(initGridRow/2 === i && initGridCol/2+1 === j) {
					tiles[i][j] = data[5];
				} else if(initGridRow/2+1 === i && initGridCol/2+1 === j) {
					tiles[i][j] = data[6];
				} else if(initGridRow/2+1 === i && initGridCol/2 === j) {
					tiles[i][j] = data[7];
				} else if(initGridRow/2+1 === i && initGridCol/2-1 === j) {
					tiles[i][j] = data[8];
				} else if(initGridRow/2+1 === i && initGridCol/2-2 === j) {
					tiles[i][j] = data[9];
				} else if(initGridRow/2 === i && initGridCol/2-2 === j) {
					tiles[i][j] = data[10];
				} else if(initGridRow/2-1 === i && initGridCol/2-2 === j) {
					tiles[i][j] = data[11];
				}
			}
		}

		return tiles;

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

	getGridDesktop() {
		const { initGridCol, initGridRow, tileSize, tileSizePx, page } = this.state;
		let grid = [];
		let activitiesTileCounter = 0;
		const aboutTiles = this.getTileWithData(DATA.about.tiles);
		// ROW
		for(let row = 0; row<initGridRow; row++) {
			// COL
			for(let col = 0; col<initGridCol; col++) {

				//-- CENTER 2X2
				const firstCenter = (row === Math.floor(initGridRow/2)-1) && (col === Math.floor(initGridCol/2)-1);

				const isCenter = ((row === Math.floor(initGridRow/2)-1)
				|| (row === Math.floor(initGridRow/2)))
				&& ((col === Math.floor(initGridCol/2)-1)
				|| (col === Math.floor(initGridCol/2)));

				if(firstCenter) {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+'vh',
						height:tileSize+'vh',
					}}>
						<Tile 
							key={row+''+col} 
							index={col+1 + row*initGridCol} 
							size={2} 
							width={tileSizePx}  
							side={page} 
							zIndex="10"
							center={
								<img style={{
									width: '100%',
									boxSizing: 'border-box',
									padding: '0 20px',
								}}
								src={'./images/FPlogo.png'} alt='Flat Pixel Logo'/>
							}
							left={
								<h1>Contact</h1>
							}
							right={<About/>}
							fixed={Nav}
							router={{
								contact: 'left',
								about: 'right',
							}}
						/>
					</div>);
				} else if(isCenter && !this.isMobile) {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+'vh',
						height:tileSize+'vh',
					}}></div>);
				} else {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+'vh',
						height:tileSize+'vh',
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
								<ImageFace data={aboutTiles[row][col]}/>
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
		return grid;
	}

	getGridMobile() {
		const { initGridCol, initGridRow, tileSize, tileSizePx, page } = this.state;
		let grid = [];
		let activitiesTileCounter = 0;
		// ROW
		for(let row = 0; row<initGridRow; row++) {
			// COL
			for(let col = 0; col<initGridCol; col++) {
				//-- CENTER 2X2
				let firstCenter = (row===0 && col===0);
				const isCenter = ((row === Math.floor(initGridRow/2)-1)
				|| (row === Math.floor(initGridRow/2)))
				&& ((col === Math.floor(initGridCol/2)-1)
				|| (col === Math.floor(initGridCol/2)));

				if(firstCenter) {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+'vw',
						height:'100vh',
					}}>
						<Tile 
							key={row+''+col} 
							index={col+1 + row*initGridCol} 
							size={1} 
							width={tileSizePx}
							side={page} 
							zIndex="10"
							center={
								<div
									style={{
										position: 'relative',
										width: '100%',
										top: '50%',
										transform: 'translateY(-50%)',
										padding: '10px',
										boxSizing: 'border-box',
									}}
								>
									<img
									style={{
										width: '100%',
									}}
									src={'./images/FPlogo.png'} alt='Flat Pixel Logo'/>
									<Nav/>
								</div>
							}
							left={
								<h1>Contact</h1>
							}
							right={<About/>}
							// fixed={Nav}
							router={{
								contact: 'left',
								about: 'right',
							}}
						/>
					</div>);
				} else if(isCenter && !this.isMobile) {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+'vw',
						height:tileSize+'vw',
					}}></div>);
				} else {
					grid.push(<div key={row+''+col} className="grid__tile" style={{
						width:tileSize+'vw',
						height:tileSize+'vw',
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
		return grid;
	}

	render() {

		const { initGridCol, tileSizePx, page } = this.state;

		if(!page) {
			// document.documentElement.scrollTop = 0;
			document.documentElement.style.height = '100vh';
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.height = 'auto';
			document.documentElement.style.overflow = 'auto';
		}
		
		let grid = [];

		if(this.isMobile()) {
			grid = this.getGridMobile();
		} else {
			grid = this.getGridDesktop();
		}

		//-- GRID LEFT OFFSET POSITION (VERTICAL ALIGN)
		let gridLeftOffset = (window.innerWidth - tileSizePx*initGridCol) / 2;

		return (
			<div className={"grid grid"+(!!this.state.page?' grid--'+this.state.page:'')}>
				<MobileNav />
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
