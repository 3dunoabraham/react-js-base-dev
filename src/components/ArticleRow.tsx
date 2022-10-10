import React from 'react';

import IArticle from '../constants/IArticle';

export interface IArticleRowComponentsProps{
    article: IArticle;
    onEdit: (arg0: IArticle) => void;
}

const ArticleRowComponents: React.FunctionComponent<IArticleRowComponentsProps> = props => {
	const _date = new Date(props.article.date);

	const year = _date.getUTCFullYear();
	const month = _date.getUTCMonth() + 1;
	const day = _date.getUTCDate();

	const dateWithSlashes = [year, month, day].join('/');

	return (
		<div className="eb-article-row w-100">
			<div className="flex flex-between flex-justify-start flex-align-end ">
				<h6 className="eb-article-row-author ma-0 pa-4 py-3 tx-bold show-md_x">
					{props.article.author}
				</h6>
				<h4 className="eb-article-row-title eb-article-highlight ma-0 pa-4 tx-bold-200 show-md_x" >
					{props.article.title}
				</h4>
				<div className="eb-article-row-content ma-0 pa-4 tx-bold-200">
					<div className="show-xs_md flex tx-sm mb-3">
						<div className=" tx-bold mr-2">
							{props.article.author}
						</div>
						<div className="tx-sm opacity-75">
							({dateWithSlashes})
						</div>
					</div>
					<div className="show-xs_md tx-lg mb-3">{props.article.title}</div>
					<div>{props.article.content}</div>
				</div>
				<h4 className="eb-article-row-author eb-article-highlight ma-0 pa-4 tx-bold-200 show-md_x" style={{width:"10%"}}>
					{dateWithSlashes}
				</h4>
				<div className="eb-article-row-action eb-tx-primary ma-0 noborder clickable pa-4 opacity-hover--50 tx-bold-400" onClick={(e) => {
					props.onEdit(props.article)
				}}>
					Edit
				</div>
			</div>
		</div>
	);
};

export default ArticleRowComponents;