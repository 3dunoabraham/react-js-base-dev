import React from 'react';

import IArticle from '../constants/IArticle';

export interface IArticleTableHeaderComponentsProps{
}

const ArticleTableHeaderComponents: React.FunctionComponent<IArticleTableHeaderComponentsProps> = props => {
	return (
		<div className="eb-article-row w-100 eb-border-b-grey">
			<div className="flex flex-between flex-justify-start flex-align-end tx-sm" >
				<div className="w-12  ma-0 px-4 pa-3 tx-bold-200   show-md_x">
					AUTHOR NAME
				</div>
				<div className="w-20 eb-article-highlight ma-0 px-4 pa-3 tx-bold-200  show-md_x" >
					TITLE
				</div>
				<div className="flex-1 ma-0 px-4 pa-3 tx-bold-200 ">
					<div className="show-xs_md  tx-bold mb-3">AUTHOR</div>
					<div className="show-xs_md tx-lg mb-3">TITLE</div>
					<div>CONTENT</div>
				</div>
				<div className="w-10 eb-article-highlight ma-0 px-4 py-3 tx-bold-200 tx-start show-md_x">
					DATE
				</div>
				<div className="  ma-0  tx-bold-200 px-3 flex-column" >
					<div className="invisible">Edit</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleTableHeaderComponents;