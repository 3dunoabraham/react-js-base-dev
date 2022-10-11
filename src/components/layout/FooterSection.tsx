import React from 'react';

import FooterNavigationButtonList from './FooterNavigationButtonList';
import CTAButton from './../parts/CTAButton';
import LogoFrame from './../parts/LogoFrame';
import {ReactComponent as Iconfb} from '../../assets/svg/fb.svg';
import {ReactComponent as Iconyt} from '../../assets/svg/yt.svg';
import {ReactComponent as Icontw} from '../../assets/svg/tw.svg';
import {ReactComponent as Iconpin} from '../../assets/svg/pin.svg';
import {ReactComponent as Iconig} from '../../assets/svg/ig.svg';

export interface IFooterSectionComponentsProps {};

const FooterSectionComponents: React.FunctionComponent<IFooterSectionComponentsProps> = props => {
	return (
		<div className="eb-bg-dark w-100 flex-center tx-white">

			<div className="eb-footer flex-column-r flex-lg_x-row">
				<div className="flex-column flex-justify-center">
					<LogoFrame darkmode={true} />
					<div className="flex mt-8">
						<i className="clickable eb-tx-hover-primary-highlight pa-2">
							<Iconfb />
						</i>
						<i className="clickable eb-tx-hover-primary-highlight pa-2">
							<Iconyt />
						</i>
						<i className="clickable eb-tx-hover-primary-highlight pa-2">
							<Icontw />
						</i>
						<i className="clickable eb-tx-hover-primary-highlight pa-2">
							<Iconpin />
						</i>
						<i className="clickable eb-tx-hover-primary-highlight pa-2">
							<Iconig />
						</i>
						
					</div>
				</div>			
				
				<div className="show-xs_lg block py-6"></div>
				<FooterNavigationButtonList />
				<div className="show-xs_lg block py-6"></div>

				<div >
				</div>		
				<div className="flex-column">
					<CTAButton />
					<div className="flex-column flex-xl_x-row">
						<div className="mx-1">© Easybank.</div>
						<div>All Rights Reserved</div>
					</div>
				</div>			
			</div>			

		</div>
	);
};

export default FooterSectionComponents;