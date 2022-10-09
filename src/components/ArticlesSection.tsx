import React from 'react';

import IArticle from '../interfaces/IArticle';
import ArticleCard from './ArticleCard';

export interface IArticlesSectionComponentProps {
    articles: IArticle[];
}
const EmptyArticlesSectionComponent: React.FunctionComponent<any> = props => {
	return (
		<div>
			<b className="tx-ls-2 flex">IM LOADING <div className="hover-hover"> . . . </div> </b>
		</div>
	)
}
const ArticlesSectionComponent: React.FunctionComponent<IArticlesSectionComponentProps> = props => {
	let ArticleComponentList;
	if (!props.articles.length)
	{
		ArticleComponentList = (<EmptyArticlesSectionComponent/>);//;
	} else {
		ArticleComponentList = props.articles.map((article) => <ArticleCard key={article.id} article={article} />) ;
	}
	
	return (
		<div className="eb-latest-articles">

			<h2 className="eb-latest-articles-title">
				Latest Articles
			</h2>

			<div className="flex-between flex-align-start flex-align-stretch pr-200">
				{ArticleComponentList}
			</div>
		</div>
	);
};

export default ArticlesSectionComponent;