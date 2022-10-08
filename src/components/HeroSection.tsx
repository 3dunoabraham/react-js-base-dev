import React from 'react';

export interface IHeroSectionComponentsProps {};

const HeroSectionComponents: React.FunctionComponent<IHeroSectionComponentsProps> = props => {
	return (
		<div className="">
			<h1>Next generation <br/> digital banking</h1>
			<p>
				Take your financial life online.
				Your Easybank account will be a one-stop-shop
				for spending, saving. budgeting, nvesting, and much more.
			</p>
		</div>
	);
};

export default HeroSectionComponents;