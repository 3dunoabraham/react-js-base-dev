import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationLayoutComponent from './components/NavigationLayout';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';

export interface IApplicationProps {};

const Application: React.FunctionComponent<IApplicationProps> = props => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavigationLayoutComponent />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/blog" element={<BlogPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Application;