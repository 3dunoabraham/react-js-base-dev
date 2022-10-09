import React from 'react';

import IArticle from '../constants/IArticle';
import ArticleRow from './ArticleRow';
import ArticleTableHeader from './ArticleTableHeader';

export interface IArticlesTableComponentProps {
    articles: IArticle[];
    onEdit: (arg0: IArticle) => void;
	// currentlySelected?: IArticle;
    // set_currentlySelected?: (arg0: IArticle) => IArticle;

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
			<div className="w-100">
				<ArticleTableHeader />
				{props.articles.map((article) => <ArticleRow onEdit={props.onEdit} key={article.id} article={article} />)}
			</div>
		) ;
	}
	
	return (
		<div className="eb-articles-table-wrapper">
			<div className="eb-articles-table">
				<div className="flex-between w-100 flex-align-start flex-align-stretch">
					{ArticleComponentList}
				</div>
			</div>

		</div>
	);
};

export default ArticlesTableComponent;