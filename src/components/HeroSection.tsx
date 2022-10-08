import React from 'react';

import CTAButton from './CTAButton';

export interface IHeroSectionComponentsProps {};

const HeroSectionComponents: React.FunctionComponent<IHeroSectionComponentsProps> = props => {
	return (
		<div className="eb-hero ">
			<h1 className="eb-hero-title">Next generation <br/> digital banking</h1>
			<p className="eb-hero-desc">
				Take your financial life online.
				Your Easybank account <br/> will be a one-stop-shop
				for spending, savin,<br/>budgeting, investing, and much more.
			</p>
			<div className="flex">
				<CTAButton />
			</div>
		</div>
	);
};

export default HeroSectionComponents;