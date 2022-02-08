let vx = 15;
let vy = 0;
let ax = 0;
let ay = 0.3;
let px = 0;
let py = 0;
let s = 70;
let loss = 0.4;
let frict = 0.1;
let stop_speed = 0.5;
const fps = 60;

let path = []

let mode = false;
const ball = document.querySelector(".ball");

function Draw(){
	ball.style.top = py + "px";
	ball.style.left = px + "px";
}

function Update(){
	// BORDERS
	if(px < 0){
		px = 0;
		vx = -vx * (1 - loss);
	}
	if(py < 0){
		py = 0;
		vy = -vy * (1 - loss);
	}
	if(px > window.innerWidth - s){
		px = window.innerWidth - s;
		vx = -vx * (1 - loss);
	}
	if(py > window.innerHeight - s || py < 0){
		py = window.innerHeight - s;
		vy = -vy * (1 - loss);
	}
	// FRICTION
	if(Math.round(py) == window.innerHeight - s){
		vx = vx * (1 - frict)
	}
	// STOP
	if(Math.abs(vx) < stop){
		vx = 0;
	}
	if(Math.abs(vy) < stop){
		vy = 0;
	}
	// SPEED
	vx += ax;
	vy += ay;
	// POS
	px += vx;
	py += vy;
}

function onMove(e){
	x = e.x - s/2;
	y = e.y - s/2;
	px = x;
	py = y;
	path.push([x, y])
}

function Interact(){
	ball.addEventListener("mousedown", (e) => {
		vx = 0;
		vy = 0;
		mode = true;
	});
	document.addEventListener("mouseup", (e) => {
		if(path.length != 0){
			vx = path[path.length - 1][0] - path[path.length - 2][0];
			vy = path[path.length - 1][1] - path[path.length - 2][1];
			path = [];
		}
		mode = false;
		console.log(vx, vy)
	});
	if(mode){
		document.addEventListener("mousemove", onMove);
	} else {
		document.removeEventListener("mousemove", onMove)
	}
}

function Main(){
	Interact();
	Update();
	Draw();
}

setInterval(() => {Main()}, 1000/fps);