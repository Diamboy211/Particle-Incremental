let game_data = {
    x: 0,
    y: 0,
    running: false,
    last_tick: null,
    time_until_increment: 0.001,
};

function callup() {
    game_data.running = !game_data.running;
}

function incy() {
    game_data.y++
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
    
    if (game_data.is_running) {
        game_data.time_until_increment -= dt;
        if (game_data.time_until_increment <= 0) {
            game_data.x += game_data.y;
            document.getElementById("counter").textContent = x;
        }
    }
}

main();
