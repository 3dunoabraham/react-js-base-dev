import React from 'react';

import FooterNavigationButtonList from './FooterNavigationButtonList';
import CTAButton from './CTAButton';
import LogoFrame from './LogoFrame';
import fb from '../assets/fb.svg';
import yt from '../assets/yt.svg';
import tw from '../assets/tw.svg';
import pin from '../assets/pin.svg';
import ig from '../assets/ig.svg';

export interface IFooterSectionComponentsProps {};

const FooterSectionComponents: React.FunctionComponent<IFooterSectionComponentsProps> = props => {
	return (
		<div className="eb-footer-wrapper">

			<div className="eb-footer flex-column-r flex-md_x-row">
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
				
				<div className="show-xs_md block py-6"></div>
				<FooterNavigationButtonList />
				<div className="show-xs_md block py-6"></div>

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