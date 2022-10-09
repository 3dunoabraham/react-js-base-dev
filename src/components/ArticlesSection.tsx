import React from 'react';

import IArticle from '../interfaces/IArticle';
import ArticleCard from './ArticleCard';

export interface IArticlesSectionComponentProps {
    articles: IArticle[];
}
const ArticlesSectionComponent: React.FunctionComponent<IArticlesSectionComponentProps> = props => {
	let ArticleComponentList;
	if (!props.articles.length)
	{
		ArticleComponentList = (<b className="tx-ls-2 flex"> LOADING <div className="hover-hover"> . . . </div> </b>);
	} else {
		ArticleComponentList = props.articles.map((article) => <ArticleCard key={article.id} article={article} />) ;
	}
	
	return (
		<div className="eb-latest-articles">

			<h2 className="eb-latest-articles-title">
				Latest Articles
			</h2>

			<div className="flex-between pr-200">
				{ArticleComponentList}
			</div>
		</div>
	);
};

export default ArticlesSectionComponent;