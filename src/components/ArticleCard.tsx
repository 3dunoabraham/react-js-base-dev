import React from 'react';

import IArticle from '../interfaces/IArticle';
import articleImg1 from '../articleImg1.jpg';
import articleImg2 from '../articleImg2.jpg';
import articleImg3 from '../articleImg3.jpg';
import articleImg4 from '../articleImg4.jpg';

export interface IArticleCardComponentsProps{
    article: IArticle;
}

const ArticleCardComponents: React.FunctionComponent<IArticleCardComponentsProps> = props => {
	const articleImgs = [articleImg1,articleImg1,articleImg2,articleImg3,articleImg4];
	return (
		<div className="eb-article-card">
			
			{true && <img src={articleImgs[props.article.id]} className="w-100" style={{borderRadius:"10px 10px 0 0"}}/>}
			{false && <img src={props.article.image_url} className="w-100" style={{borderRadius:"10px 10px 0 0"}}/>}

			<div className="eb-article-card-desc">
				<h6 className="eb-article-card-author">
					By {props.article.author}
				</h6>
				<h4 className="eb-article-card-title">
					{props.article.title}
				</h4>
				<p className="eb-article-card-content">
					{props.article.content}
				</p>
			</div>
		</div>
	);
};

export default ArticleCardComponents;