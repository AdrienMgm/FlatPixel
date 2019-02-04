import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Grid from './components/Grid/Grid'
import './App.scss';

class App extends Component {

	constructor() {
		super();

		this.state = {
			page: false
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div className="app">
				<div>
					<Router basename={process.env.PUBLIC_URL}>
						<Route
							exact
							path="/:page"
							children={({ match, ...rest }) => {
								return (
									<Grid match={match}/>
								)
							}
						}/>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
