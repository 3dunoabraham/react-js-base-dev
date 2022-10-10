import React from 'react';

import HeroPhones from '../assets/hero-phones.png';
import HeroDarkShape from '../assets/hero-dark-shape.png';
import HeroLightShape from '../assets/hero-light-shape.png';
import Vector1 from '../assets/Vector(1).png';
import Vector2 from '../assets/Vector(2).png';
import Vector3 from '../assets/Vector(3).png';
import Vector4 from '../assets/Vector(4).png';
import CTAButton from './CTAButton';

export interface IHeroSectionComponentsProps {};

const HeroSectionComponents: React.FunctionComponent<IHeroSectionComponentsProps> = props => {
	return (

		<div >
			<div className="eb-hero-wrapper  pos-relative">
				<div className="eb-hero ">
					<img className="eb-hero-phones " src={HeroDarkShape} />
					<img className="eb-hero-phones " src={HeroLightShape} />
					<img className="eb-hero-phones show-lg_x" src={HeroPhones} />
					{<img className="eb-hero-phones w-66 show-xs_lg" src={HeroPhones} />}
					<div className="show-md block my-8 py-8"></div>
					<div className="show-sm_xl block py-100"></div>
					<div className="show-xs_sm block py-100 my-8"></div>
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
			</div>

			<div className="eb-hero-subsection-wrapper ">
				<div className="eb-hero-subsection ">
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

					<div className="flex-between flex-column flex-xl_x-row my-100 ">
						<div className="flex-between  w-100 flex-align-start flex-column flex-md_x-row">

							<div className="flex-column flex-align-start eb-choose-us-element pr-5 ">
								<div className="eb-choose-us-circle">
									<img src={Vector1} />
								</div>
								<h3 className="eb-tx-main tx-bold-400 tx-lg">
									Online Banking
								</h3>
								<p className="eb-choose-us-desc">
									Our modern web and mobile <br/> applications allow you to keep track <br/> of your finances wherever you are in <br/> the world. 
								</p>
							</div>
							<div className="flex-column flex-align-start eb-choose-us-element pr-5">
								<div className="eb-choose-us-circle">
									<img src={Vector2} />
								</div>
								<h3 className="eb-tx-main tx-bold-400 tx-lg">
									Simple Budgeting
								</h3>
								<p className="eb-choose-us-desc">
									See exactly where your money goes <br/> each month. Receive notifications <br/> when you’re close to hitting <br/> your limits.
								</p>
							</div>
						</div>

						<div className="show-sm_lg block py-6"></div>

						<div className="flex-between  w-100 flex-align-start flex-column flex-md_x-row">
							<div className="flex-column flex-align-start eb-choose-us-element pr-5">
								<div className="eb-choose-us-circle">
									<img src={Vector3} />
								</div>
								<h3 className="eb-tx-main tx-bold-400 tx-lg">
									Fast Onboarding
								</h3>
								<p className="eb-choose-us-desc">
									We don’t do branches. Open your <br/> account in minutes online and start <br/> taking control of your finances right <br/> away. 
								</p>
							</div>
							<div className="flex-column flex-align-start eb-choose-us-element ">
								<div className="eb-choose-us-circle">
									<img src={Vector4} />
								</div>
								<h3 className="eb-tx-main tx-bold-400 tx-lg">
									Open API
								</h3>
								<p className="eb-choose-us-desc">
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