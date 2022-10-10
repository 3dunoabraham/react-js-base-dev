import React from 'react';
import axios from 'axios';

import IArticle from '../constants/IArticle';
import IPagination from '../constants/IPagination';

const {useEffect, useState, useRef} = React;
export interface IBlogPageNavigationComponentsProps {
	pagination: IPagination;
    prev: () => void;
    next: () => void;
    setPage: (arg0: number) => void;
};

const BlogPageNavigationComponents: React.FunctionComponent<IBlogPageNavigationComponentsProps> = props => {

	return (
		<div>
			<div className="eb-articles-table-paginate flex-between mt-8 opacity-75">
				<div onClick={() => { props.prev() }} className="pa-5 eb-articles-table-prev tx-bold-400 flex eb-border-t flex-1 clickable opacity-hover--50" >
					<div className="pr-2">←</div>
					<div className="show-md_x">Previous</div>

				</div>
				<div className="eb-articles-table-pages flex tx-bold-400">
					{false && <div className="px-4 py-5 clickable opacity-hover--50 eb-border-t-primary">
						{props.pagination.index}
					</div>}
					
					{false && <div className="pa-5 px-0 eb-border-t">
						...
					</div>}
					<div className="flex">
						{props.pagination.maxPage > 1 && Array.from(Array(props.pagination.maxPage-1).keys())
							.map((i,index) => {
								if (true)
								{
									return <div className={(index+1 != props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 px-4 clickable opacity-hover--50 "}
										key={index}
										onClick={() => {
											props.setPage(index+1)
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
					<div onClick={() => {props.setPage(props.pagination.maxPage) }} className={(props.pagination.maxPage != props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 clickable opacity-hover--50 "} >
						{props.pagination.maxPage}
					</div>
				</div>
				<div onClick={() => { props.next() }} className="pa-5 eb-articles-table-next tx-bold-400 flex flex-1 eb-border-t flex flex-justify-end clickable opacity-hover--50" >
					<div className="show-md_x">Next</div>
					<div className="pl-2">→</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPageNavigationComponents;