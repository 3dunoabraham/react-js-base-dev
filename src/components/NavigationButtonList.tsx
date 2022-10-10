import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export interface INavigationButtonListComponentsProps {};

const NavigationButtonListComponents: React.FunctionComponent<INavigationButtonListComponentsProps> = props => {
	const _navigate = useNavigate();
	const location = useLocation();
	
	return (
		<div className="flex eb-navigation-button-list ">
			
			<button className={  "show-lg_x "+ (location.pathname == "/"? "eb-active-navigation-button" : "")} onClick={() => { _navigate("/") }}> Home </button>
			<button className={ "show-md_x "+ (location.pathname == "/about"? "eb-active-navigation-button" : "")} onClick={() => { _navigate("/") }}>
				About	
			</button>
			<button className={ "show-md_x "+ (location.pathname == "/asd"? "eb-active-navigation-button" : "")} onClick={() => { _navigate("/") }}>
				Contact
			</button>
			<button className={` ${location.pathname == "/blog" ? "eb-active-navigation-button" : ""}`} onClick={() => { _navigate("/blog") }}>
				Blog
			</button>
			<button className={ "show-lg_x "+ (location.pathname == "/asd"? "eb-active-navigation-button" : "")} onClick={() => { _navigate("/") }}>
				Careers
			</button>
		</div>
	);
};

export default NavigationButtonListComponents;