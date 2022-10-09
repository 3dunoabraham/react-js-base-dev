import React from 'react';

import IArticle from '../interfaces/IArticle';
import articleImg1 from '../articleImg1.jpg';
import articleImg2 from '../articleImg2.jpg';
import articleImg3 from '../articleImg3.jpg';
import articleImg4 from '../articleImg4.jpg';

export interface IArticleRowComponentsProps{
    article: IArticle;
    onEdit: (arg0: IArticle) => void;
}

const ArticleRowComponents: React.FunctionComponent<IArticleRowComponentsProps> = props => {
	const articleImgs = [articleImg1,articleImg1,articleImg2,articleImg3,articleImg4];
	return (
		<div className="eb-article-row">
			
			{/*false && <img src={articleImgs[props.article.id]} className="w-100" style={{borderRadius:"10px 10px 0 0"}}/>*/}
			{/*
				<div className="eb-article-thumbnail">
					<img src={props.article.image_url} className="w-100" style={{borderRadius:"10px 10px 0 0"}}/>
				</div>
			*/}

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