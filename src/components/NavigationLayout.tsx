import React from 'react';
import { Outlet } from 'react-router-dom';

import NavigationButtonList from './NavigationButtonList';
import FooterSection from './FooterSection';
import CTAButton from './CTAButton';
import LogoFrame from './LogoFrame';

export interface ILayoutComponentsProps {};

const LayoutComponents: React.FunctionComponent<ILayoutComponentsProps> = props => {
	return (
		<div className="flex-column">
		
			<div className="flex flex-justify-between w-100 eb-navigation-layout">
				<LogoFrame />

				<NavigationButtonList />

				<CTAButton />
			</div>

			<Outlet />

			<FooterSection />
		</div>
	);
};

export default LayoutComponents;