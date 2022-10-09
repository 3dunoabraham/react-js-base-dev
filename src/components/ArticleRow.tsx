import React from 'react';

import IArticle from '../interfaces/IArticle';

export interface IArticleRowComponentsProps{
    article: IArticle;
    onEdit: (arg0: IArticle) => void;
}

const ArticleRowComponents: React.FunctionComponent<IArticleRowComponentsProps> = props => {
	return (
		<div className="eb-article-row">
						<div className="flex flex-between">
				<h6 className="eb-article-row-author">
					By {props.article.author}
				</h6>
				<h4 className="eb-article-row-title eb-article-highlight mb-0">
					{props.article.title}
				</h4>
				<p className="eb-article-row-content mt-0 pt-3">
					{props.article.content}
				</p>
				<button className="eb-article-row-content mt-0 pt-3" onClick={(e) => {
					props.onEdit(props.article)
				}}>
					Edit
				</button>
			</div>
		</div>
	);
};

export default ArticleRowComponents;