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
	const isLongerList = props.pagination.maxPage > 5;
	const isLongList = props.pagination.maxPage > 4;
	const isOverLongIndex = props.pagination.index > 4;
	const isAtLastPage = props.pagination.maxPage == props.pagination.index;
	const isAtSecondToLastPage = props.pagination.maxPage-1 == props.pagination.index;
	if (props.pagination.maxPage > 1) {
		return (
			<div>
				<div className="eb-articles-table-paginate flex-between flex-column flex-sm_x-row mt-8 opacity-75">
					<div onClick={() => { props.prev() }} className="pa-5 eb-articles-table-prev tx-bold-400 flex eb-border-t flex-1 clickable opacity-hover--50" >
						<div className="pr-2">←</div>
						<div className="show-md_x">Previous</div>

					</div>
					<div className="eb-articles-table-pages flex  tx-bold-400" >
						{isLongList  && isOverLongIndex &&
							<div className={(1 != props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" px-4 py-5 clickable opacity-hover--50 eb-border-t-primary"}
								onClick={() => {props.setPage(1) }}
							>
								1
							</div>
						}
						{isLongList  && isOverLongIndex &&
							<div className="pa-5 px-0 eb-border-t">
								. . .
							</div>
						}
						
						<div className="flex">
							{(!isLongList || !isOverLongIndex) && Array.from(Array(4).keys())
								.map((i,index) => {
									// if (index == 0) return <></>
									if (!isLongList && index+1 == props.pagination.maxPage) return <></>
									return <div className={(index+1 != props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 px-4 clickable opacity-hover--50 "}
										key={index}
										onClick={() => {
											props.setPage(index+1)
										}}>
										{index+1}
									</div>
								})
							}
							{isLongList && isOverLongIndex &&
								Array.from(Array(3).keys())
									.map((i,index) => {
										if (index == 0) return <></>
										if (props.pagination.index+index-2 == props.pagination.maxPage) return <></>
										return <div className={(props.pagination.index+index-2 != props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 px-4 clickable opacity-hover--50 "}
											key={index}
											onClick={() => {
												props.setPage(props.pagination.index+index-2)
											}}>
											{props.pagination.index+index-2}
										</div>
									})
							}
						</div>
						{isLongerList && !isAtLastPage && !isAtSecondToLastPage && <div className="pa-5 px-0 eb-border-t">
							. . .
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
	}
	return <div className="mt-3">
		
	</div>
};

export default BlogPageNavigationComponents;