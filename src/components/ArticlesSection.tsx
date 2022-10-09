import React from 'react';

import IArticle from '../interfaces/IArticle';
import ArticleCard from './ArticleCard';

export interface IArticlesSectionComponentProps {
    items: IArticle[];
}
const ArticlesSectionComponent: React.FunctionComponent<IArticlesSectionComponentProps> = props => {
	if (!props.items.length)
	{
		return <div> No Items </div>;
	}
	
	return (
		<div className="eb-latest-articles">

			<h2 className="eb-latest-articles-title">
				Latest Articles
			</h2>

			<div className="flex-between pr-200">
				{ props.items.map((article) => <ArticleCard key={article.id} article={article} />) }
			</div>
		</div>
	);
};

export default ArticlesSectionComponent;