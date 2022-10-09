import React from 'react';

import IArticle from '../interfaces/IArticle';

export interface IArticleRowComponentsProps{
    article: IArticle;
    onEdit: (arg0: IArticle) => void;
}

const ArticleRowComponents: React.FunctionComponent<IArticleRowComponentsProps> = props => {
	return (
		<div className="eb-article-row w-100">
			<div className="flex flex-between flex-justify-start flex-align-end ">
				<h6 className="eb-article-row-author ma-0 pa-4 tx-bold-300">
					{props.article.author}
				</h6>
				<h4 className="eb-article-row-title eb-article-highlight ma-0 pa-4 tx-bold-200">
					{props.article.title}
				</h4>
				<p className="eb-article-row-content ma-0 pa-4 tx-bold-200">
					{props.article.content}
				</p>
				<div className="eb-article-row-action eb-tx-primary ma-0 noborder clickable pa-4 opacity-hover--50 tx-bold-400" onClick={(e) => {
					props.onEdit(props.article)
				}}>
					Edit
				</div>
			</div>
		</div>
	);
};

export default ArticleRowComponents;