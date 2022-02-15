const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const time = new Date('31 March 2022').getTime();

setInterval(() => {
	let current_time = Date.now();
	let dif = time - current_time;

	let secs = parseInt(dif / 1000) % 60;
	let mins = parseInt(parseInt(dif / (1000 * 60)) % 60);
	let hs = parseInt(parseInt(dif / (1000 * 60 * 60)) % 24);
	let ds = parseInt(dif / (1000 * 60 * 60 * 24));

	seconds.innerHTML = secs;
	minutes.innerHTML = mins;
	hours.innerHTML = hs;
	days.innerHTML = ds;
}, 1000);