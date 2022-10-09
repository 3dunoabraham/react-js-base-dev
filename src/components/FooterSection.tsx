import React from 'react';

import FooterNavigationButtonList from './FooterNavigationButtonList';
import CTAButton from './CTAButton';
import LogoFrame from './LogoFrame';

export interface IFooterSectionComponentsProps {};

const FooterSectionComponents: React.FunctionComponent<IFooterSectionComponentsProps> = props => {
	return (
		<div className="eb-footer-wrapper">

			<div className="eb-footer">
				<div className="flex-column flex-justify-center">
					<LogoFrame darkmode={true} />
					<div className="flex mt-8">
						<i className="pa-2">fb</i>
						<i className="pa-2">yt</i>
						<i className="pa-2">tw</i>
						<i className="pa-2">pin</i>
						<i className="pa-2">ig</i>
					</div>
				</div>			
				<FooterNavigationButtonList />
				<div >
				</div>		
				<div className="flex-column">
					<CTAButton />
					<div> © Easybank. All Rights Reserved </div>
				</div>			
			</div>			

		</div>
	);
};

export default FooterSectionComponents;