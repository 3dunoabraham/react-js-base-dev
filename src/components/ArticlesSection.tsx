import React from 'react';

import IArticle from '../interfaces/IArticle';

export interface IArticlesSectionComponentProps {
    items: IArticle[];
}
const ArticlesSectionComponent: React.FunctionComponent<IArticlesSectionComponentProps> = props => {
	if (!props.items.length)
	{
		return <div> No Items </div>;
	}
	
	return (
		<div>
			<p> this author:</p>
			<h3>
				<p> {props.items[0].name}</p>
			</h3>
		</div>
	);
};

export default ArticlesSectionComponent;