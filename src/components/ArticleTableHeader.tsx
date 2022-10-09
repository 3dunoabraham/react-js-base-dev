import React from 'react';

import IArticle from '../constants/IArticle';

export interface IArticleTableHeaderComponentsProps{
}

const ArticleTableHeaderComponents: React.FunctionComponent<IArticleTableHeaderComponentsProps> = props => {
	return (
		<div className="eb-article-row w-100 eb-border-b-grey">
			<div className="flex flex-between flex-justify-start flex-align-end " >
				<h6 className="eb-article-row-author ma-0 pa-4 py-3 tx-bold-300">
					AUTHOR NAME
				</h6>
				<h6 className="eb-article-row-author ma-0 pa-4 py-3 tx-bold-300" style={{width:"20%"}}>
					TITLE
				</h6>
				<h6 className="eb-article-row-author ma-0 pa-4 py-3 tx-bold-300">
					CONTENT
				</h6>
				<div className="eb-article-row-action eb-tx-primary ma-0 noborder clickable pa-4 py-3 opacity-hover--50 tx-bold-400" onClick={(e) => {
				}}>
					
				</div>
			</div>
		</div>
	);
};

export default ArticleTableHeaderComponents;