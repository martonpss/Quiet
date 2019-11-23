import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Report from './pages/Report';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/report" component={Report} />
			</Switch>
		</BrowserRouter>
	);
}