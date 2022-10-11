import React from 'react';

import IArticle from '../constants/IArticle';

export interface IArticleRowComponentsProps{
    article: IArticle;
    onEdit: (arg0: IArticle) => void;
    onDelete: (arg0: IArticle) => void;
}

const ArticleRowComponents: React.FunctionComponent<IArticleRowComponentsProps> = props => {
	const _date = new Date(props.article.date);

	const year = _date.getUTCFullYear();
	const month = _date.getUTCMonth() + 1;
	const day = _date.getUTCDate();

	const dateWithSlashes = [year, month, day].join('/');

	return (
		<div className="eb-article-row w-100">
			<div className="flex flex-between flex-justify-start  flex-align-start ">
				<div className="w-12  ma-0 pa-4 py-3 tx-smd tx-bold-400 show-md_x">
					{props.article.author}
				</div>
				<div className="w-20 eb-article-highlight ma-0 pa-4 py-3 tx-bold-400 eb-tx-darkgrey show-md_x " >
					{props.article.title}
				</div>
				<div className="flex-1 ma-0 pa-4 py-3 tx-md ">
					<div className="show-xs_md flex tx-sm mb-3">
						<div className=" tx-bold mr-2">
							{props.article.author}
						</div>
						<div className="tx-sm opacity-75">
							({dateWithSlashes})
						</div>
					</div>
					<div className="show-xs_md tx-lg mb-3">{props.article.title}</div>
					<div className="eb-tx-darkgrey tx-bold-400 tx-smd">{props.article.content}</div>
				</div>
				<div className="w-10 eb-article-highlight ma-0 pa-4 py-3 tx-bold-400 eb-tx-darkgrey show-md_x">
					{dateWithSlashes}
				</div>
				<div className="  ma-0  tx-bold flex-column" >

					<div className=" clickable pa-2 eb-tx-primary opacity-hover-50 " onClick={(e) => {
						props.onEdit(props.article)
					}}>
						Edit
					</div>
					<div className=" clickable  tx-xs  opacity-hover-25" onClick={(e) => {
						props.onDelete(props.article)
					}}>
						Delete
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleRowComponents;