function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);

	translate(width / 2, height / 2);
	rotate(-HALF_PI);

	let s = second() / 60;
	let m = minute() / 60;
	let h = hour() / 12;

	let x = Math.min(width, height) * 0.8;
	let x2 = x * 0.7;
	let x3 = x * 0.4;

	strokeCap(ROUND);
	strokeWeight(150 / 1000 * x);
	noFill();

	stroke('red');
	arc(0, 0, x, x, 0, s * TAU);
	stroke('yellow');
	arc(0, 0, x2, x2, 0, m * TAU);
	stroke('blue');
	arc(0, 0, x3, x3, 0, h * TAU);
}
