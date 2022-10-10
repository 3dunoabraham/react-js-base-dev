import React from 'react';
import axios from 'axios';

import BlogForm from '../components/BlogForm';
import ArticlesSection from '../components/ArticlesSection';
import ArticlesTable from '../components/ArticlesTable';
import IArticle, { MockArticleList } from '../constants/IArticle';
import IPagination, { BasePaginationObject } from '../constants/IPagination';

const {useEffect, useState} = React;
export interface IBlogPageProps {};

const BlogPage: React.FunctionComponent<IBlogPageProps> = props => {
	const [pagination, set_pagination] = useState({...BasePaginationObject})

	const setSpecificPage = (_index:number) => {
		const newPagination = {...pagination, ...{index: _index}};
		set_pagination((current) => (newPagination)) 
		setPaginatedArticles(_allArticles, newPagination)
	}

	const nextPage = () => {
		const maxPage = parseInt((_allArticles.length/pagination.pageLength).toString())+1
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

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
		
	const [_latestArticles, set_latestArticles] = useState<IArticle[]>([]);
	const [_allArticles, set_allArticles] = useState<IArticle[]>([]);
	const [_paginatedArticles, set_paginatedArticles] = useState<IArticle[]>([]);
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
			const allArticles = [..._getArticlesResults.data.data]
			.sort(function(a:IArticle,b:IArticle):any{return Date.parse(b.date) - Date.parse(a.date); });
			set_allArticles(allArticles)
			const maxPage = parseInt(Math.floor(allArticles.length/pagination.pageLength).toString())+1
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
			const maxPage = parseInt(Math.floor(MockArticleList.length/pagination.pageLength).toString())+1
			console.log("set_allArticles, maxPage",maxPage)
			const newPagination = {...pagination, ...{maxPage}}
			set_pagination((current) => newPagination)
			setPaginatedArticles(MockArticleList,pagination)
			set_latestArticles([...MockArticleList].splice(0,4));
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

				<ArticlesTable articles={_paginatedArticles} onEdit={setNewArticleToEdit} />

				<div className="eb-articles-table-paginate flex-between mt-8 opacity-75">
					<div onClick={() => { prevPage() }} className="pa-5 eb-articles-table-prev tx-bold-400 flex eb-border-t flex-1 clickable opacity-hover--50" >
						<div className="pr-2">←</div>
						<div className="show-md_x">Previous</div>

					</div>
					<div className="eb-articles-table-pages flex tx-bold-400">
						{false && <div className="px-4 py-5 clickable opacity-hover--50 eb-border-t-primary">
							{pagination.index}
						</div>}
						
						{false && <div className="pa-5 px-0 eb-border-t">
							...
						</div>}
						<div className="flex">
							{pagination.maxPage > 1 && Array.from(Array(pagination.maxPage-1).keys())
								.map((i,index) => {
									if (true)
									{
										return <div className={(index+1 != pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 px-4 clickable opacity-hover--50 "}
											key={index}
											onClick={() => {
												setSpecificPage(index+1)
											}}>
											{index+1}
										</div>
									}
								})
							}
						</div>
						{false && <div className="pa-5 px-0 eb-border-t">
							...
						</div>}
						<div onClick={() => {setSpecificPage(pagination.maxPage) }} className={(pagination.maxPage != pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 clickable opacity-hover--50 "} >
							{pagination.maxPage}
						</div>
					</div>
					<div onClick={() => { nextPage() }} className="pa-5 eb-articles-table-next tx-bold-400 flex flex-1 eb-border-t flex flex-justify-end clickable opacity-hover--50" >
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