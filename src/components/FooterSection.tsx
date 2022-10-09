import React from 'react';

import FooterNavigationButtonList from './FooterNavigationButtonList';
import CTAButton from './CTAButton';
import LogoFrame from './LogoFrame';
import fb from '../fb.svg';
import yt from '../yt.svg';
import tw from '../tw.svg';
import pin from '../pin.svg';
import ig from '../ig.svg';

export interface IFooterSectionComponentsProps {};

const FooterSectionComponents: React.FunctionComponent<IFooterSectionComponentsProps> = props => {
	return (
		<div className="eb-footer-wrapper">

			<div className="eb-footer">
				<div className="flex-column flex-justify-center">
					<LogoFrame darkmode={true} />
					<div className="flex mt-8">
						<i className="clickable opacity-hover--50 pa-2"><img src={fb} /></i>
						<i className="clickable opacity-hover--50 pa-2"><img src={yt} /></i>
						<i className="clickable opacity-hover--50 pa-2"><img src={tw} /></i>
						<i className="clickable opacity-hover--50 pa-2"><img src={pin} /></i>
						<i className="clickable opacity-hover--50 pa-2"><img src={ig} /></i>
						
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