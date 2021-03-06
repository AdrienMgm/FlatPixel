import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Tile from '../Tile/Tile';
import ImageFace from '../ImageFace/ImageFace';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from "../Contact/Contact";
import './style.scss';

const GRID_ROW = 4;

class Grid extends Component {

	constructor(props) {
		super();

		this.state = {
			initGridRow: GRID_ROW,
			tileSize: 100/GRID_ROW,
			tiles: props.tiles,
			initGridCol: Math.floor(Math.ceil(window.innerWidth/(100/GRID_ROW/100*window.innerHeight)+1)/2)*2,
			tileSizePx: 100/GRID_ROW/100*window.innerHeight,
		}

		this.onResize = this.onResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.onResize);
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

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize);
	}

	onResize() {
		this.setState({
			tileSize: 100/GRID_ROW,
			initGridCol: Math.floor(Math.ceil(window.innerWidth/(100/GRID_ROW/100*window.innerHeight)+1)/2)*2,
			tileSizePx: 100/GRID_ROW/100*window.innerHeight,
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

	getGridDesktop() {
		const { initGridCol, initGridRow, tileSize, tileSizePx, page } = this.state;
		let grid = [];
		let activitiesTileCounter = 0;
		const aboutTiles = this.getTileWithData(this.props.data.about.tiles);
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
							center={<Home/>}
							left={<Contact/>}
							right={<About/>}
							fixed={Nav}
							router={{
								contact: 'left',
								about: 'right',
							}}
						/>
					</div>);
				} else if(isCenter) {
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
								<></>
							}
							left={
								<ImageFace data={this.props.data.activities.tiles[activitiesTileCounter%this.props.data.activities.tiles.length]}/>
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
		grid = this.getGridDesktop();

		//-- GRID LEFT OFFSET POSITION (VERTICAL ALIGN)
		let gridLeftOffset = (window.innerWidth - tileSizePx*initGridCol) / 2;

		return (
			<div className={"grid grid"+(!!this.state.page?' grid--'+this.state.page:'')}>
				<div className="grid__wrapper" 
					style={{
						width: initGridCol*tileSizePx,
						transform: 'translateX('+(gridLeftOffset)+'px)',
					}} 
				>
					{grid}
				</div>
			</div>
		);
	}
}

export default Grid;
