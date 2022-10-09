import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export interface INavigationButtonListComponentsProps {};

const NavigationButtonListComponents: React.FunctionComponent<INavigationButtonListComponentsProps> = props => {
	const _navigate = useNavigate();

	return (
		<div className="flex eb-navigation-button-list">
			
			<button onClick={() => { _navigate("/") }}> Home </button>
			<button className="" onClick={() => { _navigate("/") }}> About </button>
			<button className="" onClick={() => { _navigate("/") }}> Contact </button>
			<button className="eb-active-navigation-button" onClick={() => { _navigate("/blog") }}> Blog </button>
			<button className="" onClick={() => { _navigate("/") }}> Careers </button>
		</div>
	);
};

export default NavigationButtonListComponents;