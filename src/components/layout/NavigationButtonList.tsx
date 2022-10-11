import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export interface INavigationButtonListComponentsProps {};

const NavigationButtonListComponents: React.FunctionComponent<INavigationButtonListComponentsProps> = props => {
	const _navigate = useNavigate();
	const location = useLocation();
	
	return (
		<div className="flex eb-navigation-button-list flex-align-end">
			
			<button className={"eb-navigation-button-list-item show-lg_x "+ (location.pathname == "/"? "eb-active-navigation-button" : "")} onClick={() => { _navigate("/") }}>
				<div> <span >
						Home
				</span> </div>
			</button>
			<button className={"eb-navigation-button-list-item show-md_x "+ (location.pathname == "/about"? "eb-active-navigation-button" : "")} onClick={() => { _navigate("/") }}>
				<div> <span >
					About	
				</span> </div>
			</button>
			<button className={"eb-navigation-button-list-item show-md_x "+ (location.pathname == "/asd"? "eb-active-navigation-button" : "")} onClick={() => { _navigate("/") }}>
				<div> <span >
					Contact
				</span> </div>
			</button>
			<button className={"eb-navigation-button-list-item "+` ${location.pathname == "/blog" ? "eb-active-navigation-button" : ""}`} onClick={() => { _navigate("/blog") }}>
				<div> <span >
					Blog
				</span> </div>
			</button>
			<button className={"eb-navigation-button-list-item show-lg_x "+ (location.pathname == "/asd"? "eb-active-navigation-button" : "")} onClick={() => { _navigate("/") }}>
				<div> <span >
					Careers
				</span> </div>
			</button>
		</div>
	);
};

export default NavigationButtonListComponents;