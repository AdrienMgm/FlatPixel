import React, { Component } from 'react';
import './style.scss';

class Tile extends Component {

	render() {

		const {index, width, side, zIndex, center, left, right, fixed, router} = this.props;

		const Fixed = fixed;

		let size = this.props.size;

		return (
			<div className={"tile"+(!!side?' tile--'+router[side]:'')} style={{
				width: 100*size+'%',
				height: 100*size+'%',
				zIndex: zIndex,
			}}>
				<div className="cube"
					style={{
						transform: 'translateZ(-'+width*size/2+'px) translateX(0px) scale(1.0)',
						transformOrigin: 'center center -'+width*size/2+'px',
					}}
				>
					<div className="cube__faces"
						style={{
							transitionDelay: (0.01*Math.random()*50)+'s',
						}}
					>
						{center &&
							<div className="cube__face cube--front"
								style={{
									transform: 'rotateY( 0deg) translateZ('+width*size/2+'px) scale(1.001, 1.005)'
								}}
							>
								{center}
							</div>
						}
						{right && 
							<div className="cube__face cube--right"
								style={{
									transform: 'rotateY( -90deg) translateZ('+width*size/2+'px) scale(1.001, 1.005)'
								}}
							>
								{right}
							</div>
						}
						{left && 
							<div className="cube__face cube--left"
								style={{
									transform: 'rotateY( 90deg) translateZ('+width*size/2+'px) scale(1.001, 1.005)'
								}}
							>
								{left}
							</div>
						}
					</div>
				</div>
				{fixed && 
					<Fixed />
				}
			</div>
		);
	}
}

export default Tile;
