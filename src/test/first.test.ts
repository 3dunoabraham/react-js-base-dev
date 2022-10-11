interface wordOcurrence {
	word: string;
	occurrences: number;
}
describe("logic tests",() => {
	it("solves for any number in the fibonacci series", () => {
		function binet(n:number) {
			return Math.round((Math.pow(1.618033988749895, n) - Math.pow(-0.6180339887498949, n)) / 2.23606797749979);
		}
		const _res = binet(11);
		expect(_res).toBe(89);
	});
	it("displays the number of repetitions of each word", () => {
		const testString = "Hi how are things? How are you?Are you a developer? I am also a developer";

		let repetitionsPerWorld: {[key:string]: wordOcurrence} = {}
		const wordList = testString.match(/\b(\w+)\b/g)!.map(item => item.toLowerCase());
		const uniqueWordList = wordList.filter((item, index) => wordList.indexOf(item) === index);
		uniqueWordList.map((item, index) => {
			const occurrences:number = wordList.reduce((n:number, val:string) => {
				return n + (val === item ? 1 : 0);
			}, 0);
			repetitionsPerWorld[item] = {
				word: item,
				occurrences,
			}
		})
		console.table(repetitionsPerWorld);
	});
	it("displays the numbers from 1 to 100 with a catch", () => {

		const numberList = [...Array(100)]
		let surpriseNumberList:string[] = []
		numberList.map((item, index) => {
			let calculatedSurprise = index+1+""
			if ((index+1)%3 == 0)
			{
				calculatedSurprise = "fizz";
				if ((index+1)%5 == 0)
				{
					calculatedSurprise = "fizz buzz";
				}
			} else {
				if ((index+1)%5 == 0)
				{
					calculatedSurprise = "buzz";
				}
			}

			surpriseNumberList.push(calculatedSurprise);
		})
		console.table(surpriseNumberList);
	});
});

export{};