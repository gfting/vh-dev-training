/* eslint-disable */ // just to prevent it from annoying us forever
import fetch from 'node-fetch';
import { SpotPerson } from './hw-solution';

// to call this function, you'll need to do two things
// 1st, the function that is called in must have the keyword "async" before the parameters
// 2nd when you call it, you must preface it with "await"
// like in the below example
const getDataFromAPI = (url: string): Promise<SpotPerson[]> =>
	new Promise((res, rej) => {
		fetch(url)
			.then(data => data.json())
			.then(json => {
				// the json variable here is just the stuff you see in the browser
				res(json);
			})
			.catch(err => rej(err));
	});

const objectively = async (): Promise<void> => {
	// put all this in your "objectively" function after you make it
	const q1 = (): void => console.log(console);
	const getNthHighestByUniqueSpots = async (n: number): Promise<SpotPerson> =>
		(await getDataFromAPI('https://spot.benc.me/?time=1549939921')).sort(
			(a, b) => b.unique - a.unique
		)[n - 1];
};
// all these parantheses and braces creates and instantly calls a function.
// This is known as an Instantly Invoked Function Expression (IIFE).
// It has a lot of uses but in this case, since await can only be used in async functions, it's needed

const awry = async (): Promise<void> => {
	const docTester = [];
	// fill docTester with 1000 random integers between 0 and 99
	for (let i = 0; i < 1000; i++) docTester[i] = Math.floor(Math.random() * 100);

	let docTesterIndex = [];

	docTesterIndex = docTester.map((el, idx) => el + idx);
	console.log(`Error is ${549000 - docTesterIndex.reduce((acc, el) => acc + el, 0)}`);

	const getNthHighestByUniqueSpotsFiltered = async (n: number): Promise<SpotPerson> =>
		(await getDataFromAPI('https://spot.benc.me/?time=1549939921'))
			.filter(el => el.spotted === 0 || el.spotted >= 3)
			.sort((a, b) => b.unique - a.unique)[n - 1];
};

(async () => {
	// objectively();
	// awry();
})();

//console.log(docTester); // uncomment this to see the array logged
