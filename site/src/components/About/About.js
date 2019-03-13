import React, { Component } from 'react';
import './style.scss';
import Nav from '../Nav/Nav';

export default () => {
	return (
		<div className="about">
			<Nav/>
			<h2>Hello World !</h2>
			<p>@FlatPixel is a small game development team that packs a big punch! Along with our squad of international collaborators, we strive to deliver #juicy, robust video games to be enjoyed without moderation.</p>
		</div>
	)
}