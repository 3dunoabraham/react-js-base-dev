import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import IArticle from '../interfaces/IArticle';
import ArticleCard from './ArticleCard';

export interface IArticlesSectionComponentProps {
    articles: IArticle[];
	extramode?: boolean;
}
const EmptyArticlesSectionComponent: React.FunctionComponent<any> = props => {
	return (
		<div>
			<b className="tx-ls-2 flex">IM LOADING <div className="hover-hover"> . . . </div> </b>
		</div>
	)
}
const ArticlesSectionComponent: React.FunctionComponent<IArticlesSectionComponentProps> = props => {
	const _navigate = useNavigate();

	let ArticleComponentList;
	if (!props.articles.length)
	{
		ArticleComponentList = (<EmptyArticlesSectionComponent/>);//;
	} else {
		ArticleComponentList = props.articles.map((article) => <ArticleCard key={article.id} article={article} />) ;
	}
	
	return (
		<div className="eb-latest-articles-wrapper">
			<div className="eb-latest-articles">

				<div className="flex-between">
					<h2 className="eb-latest-articles-title">
						Latest Articles
					</h2>

					{props.extramode && <div className="eb-cta-button " onClick={() => { _navigate("/blog") }}>
						<span>+</span> Add Article
					</div>}
				</div>

				<div className="flex-between w-100 flex-align-start flex-align-stretch ">
					{ArticleComponentList}
				</div>
			</div>
		</div>
	);
};

export default ArticlesSectionComponent;