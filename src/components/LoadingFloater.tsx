import React from 'react';

export interface ILoadingFloaterComponentsProps {};

const LoadingFloaterComponents: React.FunctionComponent<ILoadingFloaterComponentsProps> = props => {
	return (
		<div>
			<b className="tx-ls-2  flex">
				
				<div className="ml-1"> LOADING </div>
				<div >
					<div className="ml-1 spin-nback" > . . . </div>
				</div>
			</b>
		</div>
	);
};

export default LoadingFloaterComponents;