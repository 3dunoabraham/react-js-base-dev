import React from 'react';
import axios from 'axios';

import BlogPageNavigation from '../components/BlogPageNavigation';
import BlogForm from '../components/BlogForm';
import ArticlesSection from '../components/ArticlesSection';
import ArticlesTable from '../components/ArticlesTable';
import IArticle, { MockArticleList } from '../constants/IArticle';
import IPagination, { BasePaginationObject } from '../constants/IPagination';

const {useEffect, useState} = React;
export interface IBlogPageProps {};

const BlogPage: React.FunctionComponent<IBlogPageProps> = props => {
	const [pagination, set_pagination] = useState({...BasePaginationObject})
	const [_latestArticles, set_latestArticles] = useState<IArticle[]>([]);
	const [_allArticles, set_allArticles] = useState<IArticle[]>([]);
	const [_paginatedArticles, set_paginatedArticles] = useState<IArticle[]>([]);
	const [currentlySelected, set_currentlySelected] = useState<IArticle>();

	useEffect(() => {
	  window.scrollTo(0, 0)
		return () => {
			getArticlesResults()
		};
	}, [])
	const getArticlesResults = async () => {
		try {
			const axiosRequestData = {url:"https://servicepad-post-api.herokuapp.com/articles/", method: 'get',};
			const _getArticlesResults = await axios(axiosRequestData)
			const allArticles = [..._getArticlesResults.data.data]
			.sort(function(a:IArticle,b:IArticle):any{return Date.parse(b.date) - Date.parse(a.date); });
			console.log("set_allArticles",allArticles)
			set_allArticles(allArticles)
			const maxPage = getMaxPage(allArticles,pagination)
			console.log("set_allArticles, maxPage",maxPage)
			const newPagination = {...pagination, ...{maxPage}}
			set_pagination((current) => newPagination)

			setPaginatedArticles(allArticles, newPagination)
			// prevPage()
			// nextPage()


			const last4Articles = [...allArticles].splice(0,4)
			console.log("last4Articles",last4Articles)
			set_latestArticles(last4Articles)
		} catch (error) {
			console.log("MockArticleList",MockArticleList)
			set_allArticles(MockArticleList)
			const maxPage = getMaxPage(MockArticleList,pagination)
			console.log("set_allArticles, maxPage",maxPage)
			const newPagination = {...pagination, ...{maxPage}}
			set_pagination((current) => newPagination)
			setPaginatedArticles(MockArticleList,pagination)
			set_latestArticles([...MockArticleList].splice(0,4));
		}
	};

	const getMaxPage = (__articles:IArticle[],__pagination:IPagination) => {
		const maxPage = parseInt(((__articles.length-1)/__pagination.pageLength).toString())+1
		return maxPage
	}
	const setSpecificPage = (_index:number) => {
		const newPagination = {...pagination, ...{index: _index}};
		set_pagination((current) => (newPagination)) 
		setPaginatedArticles(_allArticles, newPagination)
	}

	const nextPage = () => {
		const maxPage = getMaxPage(_allArticles,pagination)
		console.log("max page",maxPage)
		if (pagination.index+1 > maxPage) return set_pagination((current) => ({...current, ...{index:current.index}}))

		const newPagination = {...pagination, ...{index:pagination.index+1,maxPage}}
		set_pagination((current) => newPagination)
		console.log(`new index ${(pagination.index+1)}`)
		setPaginatedArticles(_allArticles,newPagination)
	}
	const prevPage = () => {
		if (pagination.index <= 1) return set_pagination((current) => ({...current, ...{index:current.index}}))

		console.log(`prevPage current${(pagination.index)}`)
		const newPagination = {...pagination, ...{index:pagination.index-1}}
		set_pagination((current) => newPagination)
		console.log(`new index ${(pagination.index-1)}`)
		setPaginatedArticles(_allArticles,newPagination)
	}
	const setPaginatedArticles = (__allArticles:IArticle[],__newPagination:IPagination) => {
		const newOffset = (__newPagination.index-1)*__newPagination.pageLength
		console.log(newOffset,newOffset+__newPagination.pageLength)
		const paginatedArticles = [...__allArticles].splice(newOffset,__newPagination.pageLength)
		console.log("paginatedArticles",paginatedArticles)
		set_paginatedArticles(paginatedArticles)
	}

	const setCancelSelected = (_article: IArticle) => {
		set_currentlySelected(_article)
	}
	const setNewArticleToEdit = (_article: IArticle) => {
		console.log(_article);
		window.scrollTo(0, 0)
		set_currentlySelected(_article)
	}

	return (
		<div className="eb-blog-wrapper" >
			<div className="eb-blog">

				<BlogForm currentlySelected={currentlySelected} onCancelEdit={setCancelSelected} />

				<h1 className="eb-blog-previous-title pa-4">Previous Articles</h1>
				<div className="eb-blog-subtitle mb-8 pa-4">
					Review and edit previous blog posts published on to the homepage. 
				</div>

				<ArticlesTable articles={_paginatedArticles} onEdit={setNewArticleToEdit} />
				<BlogPageNavigation pagination={pagination} setPage={setSpecificPage} prev={prevPage} next={nextPage} />

			</div>
			<ArticlesSection articles={_latestArticles} />
		</div>
	);
};

export default BlogPage;