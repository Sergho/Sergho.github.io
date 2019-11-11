const consts = {
	dtime: 1000/60,
	fsize: 500
};
let ball = {
	x: 0,
	y: 0,
	xspeed: 0,
	yspeed: 10,
	ax: 0.5,
	ay: 0,
	k: 0.8,
	tr: 0.15,
	size: 30,
	dom: document.querySelector(".ball")
};
ball.dom.style.width = ball.dom.style.height = ball.size + "px";

let timer = setInterval(Update, consts.dtime);

function Update(){
	Move();
	Draw();
}
function Move(){
	ball.x += ball.xspeed;
	ball.y += ball.yspeed;
	if(ball.x <= 0){
		ball.x = 0;
		ball.xspeed = -ball.xspeed * ball.k;
		if(ball.yspeed > 0){
			if(ball.yspeed - ball.tr < 0) ball.yspeed = 0;
			ball.yspeed -= ball.tr;
		}
		if(ball.yspeed < 0){
			if(ball.yspeed + ball.tr > 0) ball.yspeed = 0;
			ball.yspeed += ball.tr;
		}
	}
	if(ball.y <= 0){
		ball.y = 0;
		ball.yspeed = -ball.yspeed * ball.k;
	}
	if(ball.x >= consts.fsize - ball.size){
		ball.x = consts.fsize - ball.size;
		ball.xspeed = -ball.xspeed * ball.k;
		if(ball.yspeed > 0){
			if(ball.yspeed - ball.tr < 0) ball.yspeed = 0;
			ball.yspeed -= ball.tr;
		}
		if(ball.yspeed < 0){
			if(ball.yspeed + ball.tr > 0) ball.yspeed = 0;
			ball.yspeed += ball.tr;
		}
	}
	if(ball.y >= consts.fsize - ball.size){
		ball.y = consts.fsize - ball.size;
		ball.yspeed = -ball.yspeed * ball.k;
	}
	ball.xspeed += ball.ax;
	ball.yspeed += ball.ay;
	console.log(ball.yspeed);
}
function Draw(){
	ball.dom.style.top  = ball.x + "px";
	ball.dom.style.left = ball.y + "px";
}