export default interface IPagination {
	pageLength: number;
	offset: number;
	index: number;
	maxPage: number,
}
export const BasePaginationObject: IPagination = {
	maxPage: 0,
	index: 1,
	offset: 1,
	pageLength: 6,
}