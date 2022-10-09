

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

		let repetitionsPerWorld = {}
		const wordList = testString.match(/\b(\w+)\b/g).map(item => item.toLowerCase());
		const uniqueWordList = wordList.filter((item, index) => wordList.indexOf(item) === index);
		uniqueWordList.map((item, index) => {
			const occurrences = wordList.reduce(function(n, val) {return n + (val === item); }, 0);
			repetitionsPerWorld[item] = occurrences
		})
		console.table(repetitionsPerWorld);
	});
});

export{};