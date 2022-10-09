import React from 'react';

import IArticle from '../interfaces/IArticle';
import ArticleRow from './ArticleRow';

export interface IArticlesTableComponentProps {
    articles: IArticle[];
    onEdit: (arg0: IArticle) => void;
}
const EmptyArticlesTableComponent: React.FunctionComponent<any> = props => {
	return (
		<div>
			<b className="tx-ls-2 flex">IM LOADING <div className="hover-hover"> . . . </div> </b>
		</div>
	)
}
const ArticlesTableComponent: React.FunctionComponent<IArticlesTableComponentProps> = props => {
	let ArticleComponentList;
	if (!props.articles.length)
	{
		ArticleComponentList = (<EmptyArticlesTableComponent/>);//;
	} else {
		ArticleComponentList = (
			<div>
				{props.articles.map((article) => <ArticleRow onEdit={props.onEdit} key={article.id} article={article} />)}
			</div>
		) ;
	}
	
	return (
		<div className="eb-latest-articles-wrapper">
			<div className="eb-latest-articles">
				<div className="flex-between w-100 flex-align-start flex-align-stretch pr-200">
					{ArticleComponentList}
				</div>
			</div>
		</div>
	);
};

export default ArticlesTableComponent;