import React from 'react';

import logo from '../logo.svg';

export interface ILogoFrameComponentsProps {};

const LogoFrameComponents: React.FunctionComponent<ILogoFrameComponentsProps> = props => {
	return (
		<div className="flex-center pl-5">
			<img src={logo} alt="nologo"  />
			Easybank
		</div>
	);
};

export default LogoFrameComponents;