import React from 'react';

import IArticle from '../interfaces/IArticle';

export interface IArticlesPageProps {
    items: IArticle[];
}
const ArticlesPage: React.FunctionComponent<IArticlesPageProps> = props => {
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

export default ArticlesPage;