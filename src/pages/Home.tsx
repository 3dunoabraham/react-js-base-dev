import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArticlesPage from './Articles';
import IArticle from '../interfaces/IArticle';

const {useEffect, useState} = React;

export interface IHomePageProps {};

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
	const _navigate = useNavigate();
	const [_latestArticles, set_latestArticles] = useState<IArticle[]>([]);

	const getArticlesResults = async () => {
		// const _getArticlesResults = await axios.get("https://servicepad-post-api.herokuapp.com/articles/")

		// const _getArticlesResults = await axios.get("https://randomuser.me/api")
		// console.log("_getArticlesResults",_getArticlesResults)
		// const randomName = _getArticlesResults.data.results[0].name
		// set_latestArticles([{name: `${randomName.first} ${randomName.last}`}]);

		set_latestArticles([{name: `hello world`}]);
	};

	useEffect(() => {
		return () => {
			getArticlesResults()
		};
	}, [])

	return (
		<section>
			<button onClick={() => { _navigate("/post") }}>
				<b>Post</b>
			</button>
			<hr />
			this home page
			<ArticlesPage items={_latestArticles} />
		</section>
	);
};

export default HomePage;