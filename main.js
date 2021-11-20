let game_data = {
	x: 0,
	y: 0,
	running: false,
	last_tick: null,
};

function callup() {
	game_data.running = !game_data.running;
	document.getElementById("generator").textContent = `generator ${game_data.running ? "on" : "off"}`;
}

function incy() {
	game_data.y++;
}

function main() {
	game_data.last_tick = Date.now();
	loop();    
}

function loop() {
	requestAnimationFrame(loop);
	const _dn = Date.now();
	const dt = (_dn - game_data.last_tick) * 0.001;
	game_data.last_tick = _dn;
	game_data.x += game_data.y * dt;
	document.getElementById("counter").textContent = Math.floor(game_data.x);
}

main();
