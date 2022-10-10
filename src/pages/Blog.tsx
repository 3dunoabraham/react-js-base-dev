import React from 'react';
import axios from 'axios';

import BlogForm from '../components/BlogForm';
import ArticlesSection from '../components/ArticlesSection';
import ArticlesTable from '../components/ArticlesTable';
import IArticle, { MockArticleList } from '../constants/IArticle';

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
		try {
			const axiosRequestData = {url:"https://servicepad-post-api.herokuapp.com/articles/", method: 'get',};
			const _getArticlesResults = await axios(axiosRequestData)
			// const lastArticles = _getArticlesResults.data.data
			const lastArticles = [..._getArticlesResults.data.data]
			.sort(function(a:IArticle,b:IArticle):any{console.log(Date.parse(b.date),Date.parse(a.date));return Date.parse(b.date) - Date.parse(a.date); });
			console.log("lastArticles",lastArticles)
			set_articles(lastArticles)

			const last4Articles = [..._getArticlesResults.data.data]
			.sort(function(a:IArticle,b:IArticle):any{console.log(Date.parse(b.date),Date.parse(a.date));return Date.parse(b.date) - Date.parse(a.date); })
			.splice(0,4)
			console.log("last4Articles",last4Articles)
			set_latestArticles(last4Articles)
		} catch (error) {
			console.log("MockArticleList",MockArticleList)
			set_latestArticles(MockArticleList);
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

				<h1 className="eb-blog-previous-title pa-4">Previous Articles</h1>
				<div className="eb-blog-subtitle mb-8 pa-4">
					Review and edit previous blog posts published on to the homepage. 
				</div>

				<ArticlesTable articles={_articles} onEdit={setNewArticleToEdit} />

				<div className="eb-articles-table-paginate flex-between mt-8 opacity-75">
					<div className="pa-5 eb-articles-table-prev tx-bold-400 flex eb-border-t flex-1 clickable opacity-hover--50" >
						<div className="pr-2">←</div>
						<div className="show-md_x">Previous</div>

					</div>
					<div className="eb-articles-table-pages flex tx-bold-400">
						<div className="px-4 py-5 clickable opacity-hover--50 eb-border-t-primary">
							1
						</div>
						{false && <div className="pa-5 px-0 eb-border-t">
							...
						</div>}
						<div className="flex">
							<div className="pa-5 px-4 clickable opacity-hover--50 eb-border-t">
								2
							</div>
							<div className="pa-5 px-4 clickable opacity-hover--50 eb-border-t">
								3
							</div>
							<div className="pa-5 px-4 clickable opacity-hover--50 eb-border-t">
								4
							</div>
						</div>
						<div className="pa-5 px-0 eb-border-t">
							...
						</div>
						<div className="pa-5 clickable opacity-hover--50 eb-border-t eb-border-t">
							10
						</div>
					</div>
					<div className="pa-5 eb-articles-table-next tx-bold-400 flex flex-1 eb-border-t flex flex-justify-end clickable opacity-hover--50" >
						<div className="show-md_x">Next</div>
						<div className="pl-2">→</div>
					</div>
				</div>
			</div>
			<ArticlesSection articles={_latestArticles} />
		</div>
	);
};

export default BlogPage;