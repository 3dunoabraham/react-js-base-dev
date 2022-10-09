import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export interface INavigationButtonListComponentsProps {};

const NavigationButtonListComponents: React.FunctionComponent<INavigationButtonListComponentsProps> = props => {
	const _navigate = useNavigate();

	return (
		<div className="flex eb-navigation-button-list">
			
			<button onClick={() => { _navigate("/") }}> Home </button>
			<button className="eb-active-navigation-button" onClick={() => { _navigate("/post") }}> Post </button>
			<button className="opacity-25" onClick={() => { _navigate("/") }}> Contact </button>
			<button className="opacity-25" onClick={() => { _navigate("/") }}> Blog </button>
			<button className="opacity-25" onClick={() => { _navigate("/") }}> Careers </button>
		</div>
	);
};

export default NavigationButtonListComponents;