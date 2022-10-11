import React from 'react';
import axios from 'axios';

import IArticle from '../constants/IArticle';
import LoadingFloater from './LoadingFloater';

const {useEffect, useState, useRef} = React;

export interface IBlogComponentsLoading {
	add: boolean;
	reFetch: boolean;
}
export interface IBlogFormComponentsProps {
	currentlySelected?: IArticle;
    setLoading?: (arg0: IBlogComponentsLoading) => void;
    onCancelEdit?: (arg0: IArticle) => void;
    reFetch?: () => void;
    loading?: IBlogComponentsLoading;
};

const BlogFormComponents: React.FunctionComponent<IBlogFormComponentsProps> = props => {
	const nullArticle = {
		author: "",
		content: "",
		date: "",
		id: -1,
		image_url: "",
		title: "",
	};
	const [_currentArticle, set_currentArticle] = useState<IArticle>({...nullArticle});

	useEffect(() => {
		// return () => {
			if (props.currentlySelected)
			{
				// console.log("detected new selected article")
				set_currentArticle(props.currentlySelected)
			} else {
				// console.log("detected empty article selection")
			}
		// };
	}, [props.currentlySelected])

	const bannerTitle = () => {
		if (props.currentlySelected) {
			return (
				<div className="pa-4">
					<h1 className="eb-blog-title " >Update Blog Article</h1>
					<div className="eb-blog-subtitle">
						Change an existing blog article to update its content.
					</div>
				</div>
			);
		}
		return (
			<div className="pa-4">
				<h1 className="eb-blog-title">Add New Blog Article</h1>
				<div className="eb-blog-subtitle">
					Publish a new blog article to feature in the Easybank homepage.
				</div>
			</div>
		);
	}

	const executeRequestButton = () => {
		if (props.currentlySelected && props.currentlySelected.id > 0) {
			return (
				<div>
					<div className="eb-form-save-button eb-form-update-button" onClick={() => {
						sendUpdateRequestForm()
					}}>
						Update
					</div>
					<div className="eb-form-save-button eb-form-update-button mt-0 " style={{opacity:"0.5",filter:"saturate(0)"}} onClick={() => {
						cancelUpdateForm()
					}}>
						Cancel
					</div>
				</div>
			);
		}
		return (
			<div className="eb-form-save-button  " onClick={() => {
				sendCreateRequestForm()
			}}>
				Save
			</div>
		);
	}

	const cancelUpdateForm = () => {
		// set_currentArticle({...nullArticle})
		props.onCancelEdit!({...nullArticle})
	}

	const sendCreateRequestForm = async () => {
		try {
			const _data = {
				author: _currentArticle.author,
				title: _currentArticle.title,
				content: _currentArticle.content,
			}
			const promptResult = prompt(`Type YES to add new article`)
			if (promptResult && promptResult.toLowerCase() == "yes")
			{
				props.setLoading!({...props.loading!,...{add:true,reFetch:true}})
				const _postArticlesResult = await axios({url:"https://servicepad-post-api.herokuapp.com/articles/", method: 'post',
					data: _data
				})
				console.log("_postArticlesResult", _postArticlesResult)
				
				// if (_postArticlesResult.message == "article inserted")
				{
					alert("success");
					props.onCancelEdit!({...nullArticle})
					props.setLoading!({...props.loading!,...{add:false}})
					props.reFetch!();
				}
			}
		} catch (error) {
			alert("error");
		}
	}
	const sendUpdateRequestForm = async () => {
		try {
			const _data = {
				author: _currentArticle.author,
				title: _currentArticle.title,
				content: _currentArticle.content,
			}
			const promptResult = prompt(`Type YES to add update article`)
			if (promptResult && promptResult.toLowerCase() == "yes")
			{
				const _postArticlesResult = await axios({url:`https://servicepad-post-api.herokuapp.com/articles/${_currentArticle.id}`, method: 'put',
					data: _data
				})
				console.log("_postArticlesResult", _postArticlesResult)
				
				// if (_postArticlesResult.message == "article inserted")
				{
					alert("success");
					props.onCancelEdit!({...nullArticle})
					props.setLoading!({...props.loading!,...{add:false}})
					props.reFetch!();
				}
			}
		} catch (error) {
			alert("error");
		}
	}

	return (
		<div>

			{bannerTitle()}

			<div className="eb-blog-form-wrapper">
				<div className="eb-blog-form">
					{props.loading!.add && <div className="pb-4 w-100 flex flex-center"><LoadingFloater />New Article...</div> }
					<div>
						<div className="pb-1">
							<span className="tx-bold-400">Author</span>
							<div className="opac-50">
								{props.currentlySelected && props.currentlySelected.author}
							</div>
						</div>
						<input type="text" className="eb-input eb-blog-form-author" 
						value={_currentArticle.author}
						onChange={
							(e) => {
								set_currentArticle(
									(current) => ({...current,...{author:e.target.value}})
								)
							}}
						/>
					</div>
					<div>
						<div className="pb-1">
							<span className="tx-bold-400">Blog Title</span>
							<div className="opac-50">
								{props.currentlySelected && props.currentlySelected.title}
							</div>
						</div>
						<input type="text" className="eb-input eb-blog-form-title"
						value={_currentArticle.title}
						onChange={
							(e) => {
								set_currentArticle(
									(current) => ({...current,...{title:e.target.value}})
								)
							}}
						/>
					</div>
					<div style={_currentArticle.content.length > 50 ? {color: "red"} : {}}>
						<div className="pb-1" >
							<span className="tx-bold-400">Blog Content</span>
							({_currentArticle.content.length}/50)
							{_currentArticle.content.length > 50 && " *Too many characters*"}
							<div className="opac-50">
								{props.currentlySelected && props.currentlySelected.content}
							</div>
						</div>
						<textarea className="eb-input eb-blog-form-content" 
							value={_currentArticle.content}
							onChange={
								(e) => {
									set_currentArticle(
										(current) => ({...current,...{content:e.target.value}})
									)
								}
							}
						/>
					</div>
					{executeRequestButton()}
					{props.loading!.add && <div className="pb-4 w-100 flex flex-center"><LoadingFloater />New Article...</div> }
				</div>
			</div>
		</div>
	);
};

export default BlogFormComponents;