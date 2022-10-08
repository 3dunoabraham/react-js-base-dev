import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export interface INavigationButtonListComponentsProps {};

const NavigationButtonListComponents: React.FunctionComponent<INavigationButtonListComponentsProps> = props => {
	const _navigate = useNavigate();

	return (
		<div className="flex">
			
			<button onClick={() => { _navigate("/") }}> Home </button>
			<button onClick={() => { _navigate("/post") }}> Post </button>
		</div>
	);
};

export default NavigationButtonListComponents;