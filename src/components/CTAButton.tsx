import React from 'react';

export interface ICTAButtonComponentsProps {};

const CTAButtonComponents: React.FunctionComponent<ICTAButtonComponentsProps> = props => {
	return (
		<div className="eb-cta-button ma-3">
			Request Invite
		</div>
	);
};

export default CTAButtonComponents;