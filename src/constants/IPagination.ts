export default interface IPagination {
	pageLength: number;
	offset: number;
	index: number;
}
export const BasePaginationObject: IPagination = {
	index: 1,
	offset: 1,
	pageLength: 6,
}