import React from 'react';

import HeroPhones from '../assets/img/hero-phones.png';
import HeroDarkShape from '../assets/img/hero-dark-shape.png';
import HeroLightShape from '../assets/img/hero-light-shape.png';
import Vector1 from '../assets/img/Vector(1).png';
import Vector2 from '../assets/img/Vector(2).png';
import Vector3 from '../assets/img/Vector(3).png';
import Vector4 from '../assets/img/Vector(4).png';
import CTAButton from './parts/CTAButton';

export interface IHeroSectionComponentsProps {};

const HeroSectionComponents: React.FunctionComponent<IHeroSectionComponentsProps> = props => {
	return (

		<div >
			<div className="eb-hero-wrapper  pos-relative">
				<div className="eb-hero ">
					<img alt="HeroDarkShape" className="eb-hero-phones " src={HeroDarkShape} />
					<img alt="HeroLightShape" className="eb-hero-phones " src={HeroLightShape} />
					<img alt="HeroPhones" className="eb-hero-phones show-lg_x" src={HeroPhones} />
					{<img alt="HeroPhones" className="eb-hero-phones w-66 show-xs_lg" src={HeroPhones} />}
					<div className="show-md block my-8 py-8"></div>
					<div className="show-sm_xl block py-100 pb-200 my-8"></div>
					<div className="show-xs_sm block py-8 my-8"></div>
					<h1 className="eb-hero-title tx-xxl tx-bold-4">Next generation <br/> digital banking</h1>
					<p className="eb-hero-desc pr-5 tx-bold-4">
						<span className="show-md_x">Take your financial life online.</span>
						<span className="show-xs_md">Take your financial life online. <br/><br/></span>
						Your Easybank account <br/> will be a one-stop-shop
						for spending, savin,<br/>budgeting, investing, and much more.
					</p>
					<div className="flex">
						<CTAButton />
					</div>
				</div>
			</div>

			<div className="eb-hero-subsection-wrapper ">
				<div className="eb-hero-subsection ">
					<h2 className="tx-lgx tx-bold-4 eb-tx-main">
						Why choose Easybank?
					</h2>
					<div className="eb-hero-subsection-desc tx-bold-4">
						<p className="my-1">
							We leverage Open Banking to turn your bank acount into your financial hub.
						</p>
						<p className="my-1">
							Control your finances like never before.
						</p>
					</div>

					<div className="flex-  flex-column flex-center flex-xl_x-row my-100 ">
						<div className="flex-  w-100 flex-align- flex-column flex-md_x-row">

							<div className="flex-column flex-align-start eb-choose-us-element px-2 ">
								<div className="eb-choose-us-circle">
									<img alt="vector1" src={Vector1} />
								</div>
								<h3 className="eb-tx-main tx-bold-4 tx-lg">
									Online Banking
								</h3>
								<p className="tx-smd tx-bold-4 tx-lh-150">
									Our modern web and mobile <br/> applications allow you to keep track <br/> of your finances wherever you are in <br/> the world. 
								</p>
							</div>
							<div className="show-sm_lg block py-3"></div>
							<div className="flex-column flex-align-start eb-choose-us-element px-2">
								<div className="eb-choose-us-circle">
									<img alt="vector1" src={Vector2} />
								</div>
								<h3 className="eb-tx-main tx-bold-4 tx-lg">
									Simple Budgeting
								</h3>
								<p className="tx-smd tx-bold-4 tx-lh-150">
									See exactly where your money goes <br/> each month. Receive notifications <br/> when you’re close to hitting <br/> your limits.
								</p>
							</div>
						</div>

						<div className="show-sm_lg block py-6"></div>

						<div className="flex-between  w-100 flex-align- flex-column flex-md_x-row">
							<div className="flex-column flex-align-start eb-choose-us-element px-2">
								<div className="eb-choose-us-circle">
									<img alt="vector1" src={Vector3} />
								</div>
								<h3 className="eb-tx-main tx-bold-4 tx-lg">
									Fast Onboarding
								</h3>
								<p className="tx-smd tx-bold-4 tx-lh-150">
									We don’t do branches. Open your <br/> account in minutes online and start <br/> taking control of your finances right <br/> away. 
								</p>
							</div>
							<div className="show-sm_lg block py-3"></div>
							<div className="flex-column flex-align-start eb-choose-us-element px-2">
								<div className="eb-choose-us-circle">
									<img alt="vector1" src={Vector4} />
								</div>
								<h3 className="eb-tx-main tx-bold-4 tx-lg">
									Open API
								</h3>
								<p className="tx-smd tx-bold-4 tx-lh-150">
									Manage your savings, investments, <br/> pension, and much more from one <br/> account. Tracking your money has <br/> never been easier. 
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSectionComponents;