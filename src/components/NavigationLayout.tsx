import React from 'react';
import { Outlet } from 'react-router-dom';

import NavigationButtonList from './NavigationButtonList';
import CTAButton from './CTAButton';
import LogoFrame from './LogoFrame';

export interface ILayoutComponentsProps {};

const LayoutComponents: React.FunctionComponent<ILayoutComponentsProps> = props => {
	return (
		<div className="flex-column">
			<div className="flex flex-justify-between w-100">

				<LogoFrame />

				<NavigationButtonList />

				<CTAButton />

			</div>
			<Outlet />
		</div>
	);
};

export default LayoutComponents;