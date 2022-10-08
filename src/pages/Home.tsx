import React from 'react';
import axios from 'axios';
import ArticlesPage from './Articles';
import IArticle from '../interfaces/IArticle';

const {useEffect, useState} = React;

export interface IHomePageProps {};

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
	const [_latestArticles, set_latestArticles] = useState<IArticle[]>([]);

	const getArticlesResults = async () => {
		const _getArticlesResults = await axios.get("https://randomuser.me/api")
		// const _getArticlesResults = await axios.get("https://servicepad-post-api.herokuapp.com/articles/")
		console.log("_getArticlesResults",_getArticlesResults)
		const randomName = _getArticlesResults.data.results[0].name
		set_latestArticles([{name: `${randomName.first} ${randomName.last}`}]);
	};

	useEffect(() => {
		return () => {
			getArticlesResults()
		};
	}, [])

	return (
		<section>
			this home page
			<ArticlesPage items={_latestArticles} />
		</section>
	);
};

export default HomePage;