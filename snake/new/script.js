
let ai   = false;
let dark = false

function Snake() {
	let max = 1;

	const t = setInterval(Update, 1000/20); 

	const pixel = document.body.offsetWidth > 1440 ? 20 : 15

	let food = {
		x: 0,
		y: 0,
		dom: new function(){
			let elem = document.createElement('div');
			elem.classList.add("food");
			document.querySelector(".field").appendChild(elem);
			return elem;
		}
	}

	let snake = [
	{
		x: ~~(Math.random() * 40),
		y: ~~(Math.random() * 25),
		dom: new function(){
			let elem = document.createElement('div');
			elem.classList.add("snake");
			document.querySelector(".field").appendChild(elem);
			return elem;
		}
	}
	]
	let velocity = "none";

	function FoodNew(){
		food.x              = ~~(Math.random() * 40);
		food.y              = ~~(Math.random() * 25);
		snake.forEach((obj) => {
			while(obj.x == food.x && obj.y == food.y){
				food.x              = ~~(Math.random() * 40);
				food.y              = ~~(Math.random() * 25);
			}
		});
		food.dom.style.top  = food.y * pixel + 'px';
		food.dom.style.left = food.x * pixel + 'px';
	}

	function SnakeUpdate(){
		snake.forEach((obj) => {
			obj.dom.style.top  = obj.y * pixel + 'px';
			obj.dom.style.left = obj.x * pixel + 'px';
		});
	}

	function CheckBtn(e){
		if(e.key == "ArrowUp" && velocity != "down")    velocity = "up";
		if(e.key == "ArrowLeft" && velocity != "right")  velocity = "left";
		if(e.key == "ArrowDown" && velocity != "up")  velocity = "down";
		if(e.key == "ArrowRight" && velocity != "left") velocity = "right";
	}

	function Move(){
		let head = snake[0];
		if(velocity == "up") {
			snake.unshift({
				x: head.x,
				y: head.y - 1,
				dom: new function(){
					let elem = document.createElement('div');
					elem.classList.add("snake");
					document.querySelector(".field").appendChild(elem);
					return elem;
				}
			});
		}
		if(velocity == "down") {
			snake.unshift({
				x: head.x,
				y: head.y + 1,
				dom: new function(){
					let elem = document.createElement('div');
					elem.classList.add("snake");
					document.querySelector(".field").appendChild(elem);
					return elem;
				}
			});
		}
		if(velocity == "left") {
			snake.unshift({
				x: head.x - 1,
				y: head.y,
				dom: new function(){
					let elem = document.createElement('div');
					elem.classList.add("snake");
					document.querySelector(".field").appendChild(elem);
					return elem;
				}
			});
		}
		if(velocity == "right") {
			snake.unshift({
				x: head.x + 1,
				y: head.y,
				dom: new function(){
					let elem = document.createElement('div');
					elem.classList.add("snake");
					document.querySelector(".field").appendChild(elem);
					return elem;
				}
			});
		}

		if(snake[0].x >= 40) snake[0].x = 0;
		if(snake[0].x < 0) snake[0].x = 40;
		if(snake[0].y >= 25) snake[0].y = 0;
		if(snake[0].y < 0) snake[0].y = 25;
		if(velocity != "none" && !(snake[0].x == food.x && snake[0].y == food.y)){
			snake[snake.length - 1].dom.remove();
			snake.pop();
		}
		if(snake[0].x == food.x && snake[0].y == food.y) FoodNew();
		snake.forEach((obj, i) => {
			if(snake[0].x == obj.x && snake[0].y == obj.y && i != 0) for(let j = i - 1; j > 0; j--){
				snake[j].dom.remove();
				snake.splice(j, 1);
			}
		});

		const size = document.querySelector(".score p:nth-child(1)");
		const best = document.querySelector(".score p:nth-child(2)");

		if(snake.length > max) max = snake.length;

		size.innerHTML = "Size: " + snake.length;
		best.innerHTML = "Best: " + max;
	}

	function AI(){
		if(snake[0].y > food.y && velocity != "down") velocity = "up";
		if(snake[0].y < food.y && velocity != "up") velocity = "down";
		if(snake[0].x > food.x && velocity != "right") velocity = "left";
		if(snake[0].x < food.x && velocity != "left") velocity = "right";
		snake.forEach((elem) => {
			if(velocity == "up" && snake[0].x == elem.x && snake[0].y - elem.y == 1) velocity = "left";
			if(velocity == "down" && snake[0].x == elem.x && elem.y - snake[0].y == 1) velocity = "right";
			if(velocity == "left" && snake[0].y == elem.y && snake[0].x - elem.x == 1) velocity = "down";
			if(velocity == "right" && snake[0].y == elem.y && elem.x - snake[0].x == 1) velocity = "up";
		});
	}

	function Update(){
		if(!ai) document.onkeydown = CheckBtn;
		else AI();
		Move();
		SnakeUpdate();
	}

	FoodNew();

}

function Switchers(){
	const ai_sw   = document.querySelector(".AI button");
	const dark_sw = document.querySelector(".dark input");
	
	ai_sw.addEventListener('click', () => {
		if(ai) {
			ai = false;
			ai_sw.innerHTML = "Start AI";
		}	else {
			ai = true;
			ai_sw.innerHTML = "Stop AI";
		}
	});

	dark_sw.addEventListener('click', () => {
		const round   = document.querySelector(".dark .point");
		const back    = document.querySelector(".dark .toggle");
		const wrapper = document.getElementById("wrapper");
		const field   = document.querySelector(".field");
		const menu    = document.querySelector(".menu");
		const heading = document.querySelector(".heading");
		const food    = document.querySelector(".food");
		const score   = document.querySelector(".score");

		if(dark_sw.checked){
			dark                          = true;
			round.style.transform         = "translate(30px, 0)";
			back.style.backgroundColor    = "lime";
			wrapper.style.backgroundColor = "black";
			field.style.backgroundColor   = "#bbb";
			menu.style.backgroundColor    = "#333";
			heading.style.color           = "white";
			food.style.backgroundColor    = "red";
			score.style.color             = "white";
		} else {
			dark                          = false;
			round.style.transform         = "translate(0, 0)";
			back.style.backgroundColor    = "#E4FFCA";
			wrapper.style.backgroundColor = "#f8f8f8";
			field.style.backgroundColor   = "black";
			menu.style.backgroundColor    = "#eee";
			heading.style.color           = "black";
			food.style.backgroundColor    = "orange";
			score.style.color             = "black";
		}
		console.log(dark)
	});
}

Snake();
Switchers();