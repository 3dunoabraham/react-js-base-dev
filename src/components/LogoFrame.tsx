import React from 'react';

import logo from '../easybank.png';

export interface ILogoFrameComponentsProps {
	darkmode?: boolean;
};
const LogoFrameComponents: React.FunctionComponent<ILogoFrameComponentsProps> = props => {
	return (
		<div className="flex-center px-8 tx-lg eb-tx-main tx-bold">
			<div className="eb-logo-bar"></div>
			<div className="eb-logo-bar opacity-50"></div>
			<div className="eb-logo-bar mr-1 opacity-10"></div>
			<img style={props.darkmode ? {filter:"brightness(99)"} : {}} src={logo} alt="nologo" width="108" height="20" />
		</div>
	);
};

export default LogoFrameComponents;