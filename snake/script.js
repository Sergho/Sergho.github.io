var container = document.getElementsByClassName('game-container')[0];

var t = setInterval(Update, 120);

var r = setInterval(Rel, 50);

var pause = false;

var vector = "none";

var pixel = 40;

var snake = [];

snake[0] = {
	x: 10,
	y: 10
};

var snake_DOM = [];

snake_DOM[0] = document.createElement('div');
snake_DOM[0].classList.add('snake-item');
container.appendChild(snake_DOM[0])


var food = {
	x: ~~(Math.random() * 21),
	y: ~~(Math.random() * 21)
}

while(food.x == snake[0].x && food.y == snake[0].y){
	food.x = ~~(Math.random() * 21);
	food.y = ~~(Math.random() * 21);
}

var food_DOM = document.getElementsByClassName('food')[0];


function Rel(){
	document.onkeydown = Reload;
}

function Reload(e){

	if(e.keyCode == "82"){
		location.reload();
	}
	if(e.keyCode == "80"){
		if(!pause) {
			clearInterval(t);
			pause = true;
		}
		else{
			t = setInterval(Update, 120);
			pause = false;
		}
	}

}

function Update(){
	document.onkeyup = Check;
	Move();
	Draw();
	IsLose();
}

function Draw(){
	for(var i = 0; i < snake.length; i++){
		snake_DOM[i].style.top = snake[i].x * pixel + "px";
		snake_DOM[i].style.left = snake[i].y * pixel + "px";
	}
	food_DOM.style.top = food.x * pixel + "px";
	food_DOM.style.left = food.y * pixel + "px";
}

function Check(e){
	if(e.keyCode == "37" && vector != "right") vector = "left";
	if(e.keyCode == "38" && vector != "down") vector = "up";
	if(e.keyCode == "39" && vector != "left") vector = "right";
	if(e.keyCode == "40" && vector != "up") vector = "down";
}

function Move(){
	var LastX = snake[0].x;
	var LastY = snake[0].y;

	if(vector == "up"){
		snake.unshift({x: LastX - 1, y: LastY});
	}
	if(vector == "down"){
		snake.unshift({x: LastX + 1, y: LastY});
	}
	if(vector == "left"){
		snake.unshift({x: LastX, y: LastY - 1});
	}
	if(vector == "right"){
		snake.unshift({x: LastX, y: LastY + 1});
	}

	if(vector != "none" && (food.x != snake[0].x || food.y != snake[0].y)){
		snake.pop();
	}

	if(food.x == snake[0].x && food.y == snake[0].y){
		food.x = ~~(Math.random() * 21);
		food.y = ~~(Math.random() * 21);
		for(var i = 0; i < snake.length; i++){
			if(snake[i].x == food.x && snake[i].y == food.y){
				food.x = ~~(Math.random() * 21);
				food.y = ~~(Math.random() * 21);
				i = 0;
			}
		}
		snake_DOM.push(document.createElement('div'));
		snake_DOM[snake_DOM.length - 1].classList.add('snake-item');
		container.appendChild(snake_DOM[snake_DOM.length - 1])
	}

	snake_DOM[0].style.background = "crimson";
}

function IsLose(){
	if(snake[0].x < 0 || snake[0].y < 0 || snake[0].x > 20 || snake[0].y > 20){
		clearInterval(t);
		alert("YOUR SCORE IS " + snake.length);
	}
	for(var i = 1; i < snake.length; i++){
		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
			clearInterval(t);
			alert("YOUR SCORE IS " + snake.length);
		}
	}
}