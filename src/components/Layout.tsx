import React from 'react';
import { Outlet } from 'react-router-dom';

export interface ILayoutComponentsProps {};

const LayoutComponents: React.FunctionComponent<ILayoutComponentsProps> = props => {
	return (
		<div>
			My Layout
			<Outlet />
		</div>
	);
};

export default LayoutComponents;