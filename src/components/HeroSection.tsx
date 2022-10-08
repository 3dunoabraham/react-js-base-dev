import React from 'react';

import CTAButton from './CTAButton';

export interface IHeroSectionComponentsProps {};

const HeroSectionComponents: React.FunctionComponent<IHeroSectionComponentsProps> = props => {
	return (

		<div className="">
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

			<div className="eb-hero-subsection">
				<h2 className="eb-hero-subsection-title">
					Why choose Easybank?
				</h2>
				<div className="eb-hero-subsection-desc">
					<p className="my-1">
						We leverage Open Banking to turn your bank acount into your financial hub.
					</p>
					<p className="my-1">
						Control your finances like never before.
					</p>
				</div>

				<div className="flex-between pr-200">
					<div>
						<h3>
							Online Banking
						</h3>
						<p>
							Our modern web and mobile applications <br/> allow you to keep track <br/> of your finances wherever you are in <br/> the world. 
						</p>
					</div>
					<div>
						<h3>
							Simple Budgeting
						</h3>
						<p>
							See exactly where your money goes <br/> each month. Receive notifications <br/> when you’re close to hitting <br/> your limits.
						</p>
					</div>
					<div>
						<h3>
							Fast Onboarding
						</h3>
						<p>
							We don’t do branches. Open your <br/> account in minutes online and start <br/> taking control of your finances right <br/> away. 
						</p>
					</div>
					<div>
						<h3>
							Open API
						</h3>
						<p>
							Manage your savings, investments, <br/> pension, and much more from one <br/> account. Tracking your money has <br/> never been easier. 
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSectionComponents;