import React from 'react';
import axios from 'axios';

import BlogForm from '../components/BlogForm';
import ArticlesSection from '../components/ArticlesSection';
import ArticlesTable from '../components/ArticlesTable';
import IArticle from '../interfaces/IArticle';

const {useEffect, useState} = React;
export interface IBlogPageProps {};

const BlogPage: React.FunctionComponent<IBlogPageProps> = props => {
	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
		
	const [_latestArticles, set_latestArticles] = useState<IArticle[]>([]);
	const [_articles, set_articles] = useState<IArticle[]>([]);
	const [currentlySelected, set_currentlySelected] = useState<IArticle>();

	const setCancelSelected = (_article: IArticle) => {
		set_currentlySelected(_article)
	}
	const setNewArticleToEdit = (_article: IArticle) => {
		console.log(_article);
		window.scrollTo(0, 0)
		set_currentlySelected(_article)
	}
	const getArticlesResults = async () => {
		// const _getArticlesResults = await axios.get("https://servicepad-post-api.herokuapp.com/articles/")

		// const _getArticlesResults = await axios({url:"https://randomuser.me/api", method: 'get',})
		// console.log("_getArticlesResults",_getArticlesResults.data.data.splice(0,4))
		// const randomName = _getArticlesResults.data.results[0].name
		// set_latestArticles([{name: `${randomName.first} ${randomName.last}`}]);

		
		try {
			const axiosRequestData = {url:"https://servicepad-post-api.herokuapp.com/articles/", method: 'get',};
			const _getArticlesResults = await axios(axiosRequestData)
			const lastArticles = _getArticlesResults.data.data
			set_articles(lastArticles)

			const last4Articles = _getArticlesResults.data.data.splice(0,4).reverse()
			console.log("last4Articles",last4Articles)
			set_latestArticles(last4Articles)
		} catch (error) {
			set_latestArticles([
				{
					"author": "Clarie Robinson",
					"content": "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
					"date": "2021-11-25T15:06:01.297620",
					"id": 1,
					"image_url": "https://picsum.photos/533/400?random=2",
					"title": "Receive money in any currency with no fees"
				},
				{
					"author": "Wilson Hutton",
					"content": "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
					"date": "2021-11-25T15:13:41.162381",
					"id": 2,
					"image_url": "https://picsum.photos/533/400?random=2",
					"title": "Treat yourself without worrying about money"
				},
				{
					"author": "Wilson Hutton",
					"content": "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...",
					"date": "2021-11-25T15:06:01.297620",
					"id": 3,
					"image_url": "https://picsum.photos/533/400?random=2",
					"title": "Take your Easybank card wherever you go"
				},
				{
					"author": "Clarie Robinson",
					"content": "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
					"date": "2021-11-25T15:13:41.162381",
					"id": 4,
					"image_url": "https://picsum.photos/533/400?random=2",
					"title": "Our invite-only Beta accounts are now live!"
				}
			]);
		}
	};

	useEffect(() => {
		return () => {
			getArticlesResults()
		};
	}, [])

	return (
		<div className="eb-blog-wrapper" >
			<div className="eb-blog">

				<BlogForm currentlySelected={currentlySelected} onCancelEdit={setCancelSelected} />

				<h1 className="eb-blog-previous-title">Previous Articles</h1>
				<div className="eb-blog-subtitle mb-8 pb-4">
					Review and edit previous blog posts published on to the homepage. 
				</div>

				<ArticlesTable articles={_articles} onEdit={setNewArticleToEdit} />
			</div>
			<ArticlesSection articles={_latestArticles} />
		</div>
	);
};

export default BlogPage;