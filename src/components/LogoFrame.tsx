import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/easybank.png';

export interface ILogoFrameComponentsProps {
	darkmode?: boolean;
	responsivemode?: string;
};
const LogoFrameComponents: React.FunctionComponent<ILogoFrameComponentsProps> = props => {
	const _navigate = useNavigate();

	return (
		<div className={(props.responsivemode ? "px-4" : "px-8")+" flex-center  tx-lg eb-tx-main tx-bold clickable"} onClick={() => { window.scrollTo(0,0);_navigate("/") }}>
			<div className="eb-logo-bar"></div>
			<div className="eb-logo-bar opacity-50"></div>
			<div className="eb-logo-bar mr-2 opacity-10"></div>
			<img className={props.responsivemode ? props.responsivemode : ""} style={props.darkmode ? {filter:"brightness(99)"} : {}} src={logo} alt="nologo" width="108" height="20" />
		</div>
	);
};

export default LogoFrameComponents;