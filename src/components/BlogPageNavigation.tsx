import React from 'react';

import IPagination from '../constants/IPagination';

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
	const isAtLastPage = props.pagination.maxPage === props.pagination.index;
	const isAtSecondToLastPage = props.pagination.maxPage-1 === props.pagination.index;
	if (props.pagination.maxPage > 1) {
		return (
			<div className="w-100">
				<div className="eb-articles-table-paginate flex-between flex-row mt-8  eb-tx-grey">
					<div onClick={() => { props.prev() }} className=" eb-articles-table-prev tx-bold-4 flex eb-border-t flex-1 clickable opac-hover--50" >
						<div className="py-5  px-2">←</div>
						<div className="show-md_x pa-5">Previous</div>

					</div>
					<div className="eb-articles-table-pages flex  tx-bold-4" >
						{isLongList  && isOverLongIndex &&
							<div className={(1 !== props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" py-5 px-3 clickable opac-hover--50 eb-border-t-primary"}
								onClick={() => {props.setPage(1) }}
							>
								1
							</div>
						}
						{isLongList  && isOverLongIndex &&
							<div className="pa-5 px-0 eb-border-t">
								...
							</div>
						}
						
						<div className="flex">
							{(!isLongList || !isOverLongIndex) && Array.from(Array(4).keys())
								.map((i,index) => {
									// if (index === 0) return <></>
									if (!isLongList && index+1 === props.pagination.maxPage) return <div key={index+1}></div>
									return <div className={(index+1 !== props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 px-3 clickable opac-hover--50 "}
										key={index+1}
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
										if (index === 0) return <div key={props.pagination.index+index-2} ></div>
										if (props.pagination.index+index-2 === props.pagination.maxPage) return <div key={props.pagination.index+index-2} ></div>
										return <div className={(props.pagination.index+index-2 !== props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 px-3 clickable opac-hover--50 "}
											key={props.pagination.index+index-2}
											onClick={() => {
												props.setPage(props.pagination.index+index-2)
											}}>
											{props.pagination.index+index-2}
										</div>
									})
							}
						</div>
						{isLongerList && !isAtLastPage && !isAtSecondToLastPage && <div className="pa-5 px-0 eb-border-t">
							...
						</div>}
						<div onClick={() => {props.setPage(props.pagination.maxPage) }} className={(props.pagination.maxPage !== props.pagination.index ? "eb-border-t" : "eb-border-t-primary")+" pa-5 px-3 clickable opac-hover--50 "} >
							{props.pagination.maxPage}
						</div>
					</div>
					<div onClick={() => { props.next() }} className=" eb-articles-table-next tx-bold-4 flex flex-1 eb-border-t flex flex-justify-end clickable opac-hover--50" >
						<div className="show-md_x pa-5">Next</div>
						<div className=" py-5 px-2">→</div>
					</div>
				</div>
			</div>
		);
	}
	return <div className="mt-3">
		
	</div>
};

export default BlogPageNavigationComponents;