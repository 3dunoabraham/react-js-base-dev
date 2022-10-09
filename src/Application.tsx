import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationLayoutComponent from './components/NavigationLayout';
import HomePage from './pages/Home';
import PostPage from './pages/Post';

export interface IApplicationProps {};

const Application: React.FunctionComponent<IApplicationProps> = props => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavigationLayoutComponent />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/post" element={<PostPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Application;