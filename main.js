let game_data = {
	particles: 0,
	increment: 0,
	running: false,
	last_tick: null,
};

function callup() {
	game_data.running = !game_data.running;
	document.getElementById("generator").textContent = `generator ${game_data.running ? "on" : "off"}`;
}

function incy() {
	game_data.increment++;
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
	game_data.particles += game_data.increment * dt;
	const disp_particles = Math.floor(game_data.particles);
	document.getElementById("counter").textContent = `${disp_particles} particle${disp_particles == 1 ? 's' : ''}`;
}

main();
