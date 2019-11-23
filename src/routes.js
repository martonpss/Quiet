import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Report from './pages/Report';
import Register from './pages/Register';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/report" component={Report} />
				<Route path="/register" component={Register} />
			</Switch>
		</BrowserRouter>
	);
}