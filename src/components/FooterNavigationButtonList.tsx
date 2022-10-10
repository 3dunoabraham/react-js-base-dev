import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export interface IFooterNavigationButtonListComponentsProps {};

const FooterNavigationButtonListComponents: React.FunctionComponent<IFooterNavigationButtonListComponentsProps> = props => {
	const _navigate = useNavigate();

	return (
		<div className="flex eb-navigation-button-list eb-footer-navigation-button-list flex-align-start flex-column flex-lg_x-row">
			<div className="flex-column flex-align-start">
				<button className="tx-start" onClick={() => { _navigate("/") }}> About </button>
				<button className="tx-start" onClick={() => { _navigate("/") }}> Contact </button>
				<button className="tx-start" onClick={() => { _navigate("/blog") }}> Blog </button>
			</div>
			<div className="flex-column flex-align-start">
				<button className="tx-start" onClick={() => { _navigate("/") }}> Careers </button>
				<button className="tx-start" onClick={() => { _navigate("/") }}> Support </button>
				<button className="tx-start" onClick={() => { _navigate("/") }}> Privacy Policy </button>
			</div>
		</div>
	);
};

export default FooterNavigationButtonListComponents;