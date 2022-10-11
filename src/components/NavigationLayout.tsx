import React from 'react';
import { Outlet } from 'react-router-dom';

import NavigationButtonList from './NavigationButtonList';
import FooterSection from './FooterSection';
import CTAButton from './parts/CTAButton';
import LogoFrame from './LogoFrame';

export interface ILayoutComponentsProps {};

const LayoutComponents: React.FunctionComponent<ILayoutComponentsProps> = props => {
	
	return (
		<div className="flex-column pt-8">
			
			<div className="eb-navigation-layout-wrapper w-100">
				<div className="flex flex-justify-between eb-navigation-layout">
					<LogoFrame responsivemode="show-sm_x " />

					
						<NavigationButtonList />
					

					<CTAButton />
				
				</div>
			</div>

			<Outlet />

			<FooterSection />
		</div>
	);
};

export default LayoutComponents;