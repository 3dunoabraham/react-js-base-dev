import React from 'react';
import { useNavigate } from 'react-router-dom';

import IArticle from '../constants/IArticle';
import ArticleCard from './ArticleCard';
import LoadingFloater from './parts/LoadingFloater';

export interface IArticlesSectionComponentProps {
    articles: IArticle[];
	addmode?: boolean;
}
const ArticlesSectionComponent: React.FunctionComponent<IArticlesSectionComponentProps> = props => {
	const _navigate = useNavigate();

	let ArticleComponentList;
	if (!props.articles.length)
	{
		ArticleComponentList = <div className="pa-8"><LoadingFloater /></div>;//;
	} else {
		ArticleComponentList = props.articles.map((article) => <ArticleCard key={article.id} article={article} />) ;
	}
	
	return (
		<div className="eb-latest-articles-wrapper">
			<div className="eb-latest-articles">

				<div className="flex-between pa-8">
					<h2 className="tx-lgx tx-bold-4 eb-tx-main">
						Latest Articles
					</h2>

					{props.addmode && <div className="eb-cta-button " onClick={() => { _navigate("/blog") }}>
						<span>+</span> Add New Article
					</div>}
				</div>

				<div className="flex-around w-100 flex-wrap">
					{ArticleComponentList}
				</div>
			</div>
		</div>
	);
};

export default ArticlesSectionComponent;