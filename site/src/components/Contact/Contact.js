import React from 'react';
import './style.scss';

export default class Contact extends React.PureComponent {

	render() {
		return (
			<div className="contact">
				<h2>hello@flatpixel.fr</h2>
				<img src="./images/contact/map.png" alt="map"/>
			</div>
		)
	}
}