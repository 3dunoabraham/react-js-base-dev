import React from 'react';

import IArticle from '../constants/IArticle';
import articleImg1 from '../assets/articleImg1.jpg';
import articleImg2 from '../assets/articleImg2.jpg';
import articleImg3 from '../assets/articleImg3.jpg';
import articleImg4 from '../assets/articleImg4.jpg';

export interface IArticleCardComponentsProps{
    article: IArticle
}

const ArticleCardComponents: React.FunctionComponent<IArticleCardComponentsProps> = props => {
	const articleImgs = [articleImg1,articleImg1,articleImg2,articleImg3,articleImg4];

	return (
		<div className="eb-article-card">
			
			{false && <img src={articleImgs[props.article.id]} className="w-100" style={{borderRadius:"10px 10px 0 0"}}/>}
			{<div className="eb-article-thumbnail">
				<img src={props.article.image_url} className="w-100" style={{borderRadius:"10px 10px 0 0"}}/>
			</div>}

			<div className="eb-article-card-desc">
				<h6 className="eb-article-card-author">
					By {props.article.author}
				</h6>
				<h4 className="eb-article-card-title eb-article-highlight mb-0">
					{props.article.title}
				</h4>
				<p className="eb-article-card-content mt-0 pt-3">
					{props.article.content}
				</p>
			</div>
		</div>
	);
};

export default ArticleCardComponents;