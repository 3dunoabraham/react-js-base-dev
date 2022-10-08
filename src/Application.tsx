import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';

export interface IApplicationProps {};

const Application: React.FunctionComponent<IApplicationProps> = props => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Application;