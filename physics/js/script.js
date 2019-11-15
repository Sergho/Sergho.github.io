// Draw a cordinat NET
function DrawAll(){
	// Clear screen
	ctx.clearRect(0, 0, canv.width, canv.height);
	//Begin Path of net
	ctx.beginPath();
	// Horizontal
	for (let x = 0; x < canv.width; x += zoom) {
		ctx.moveTo(x, 0);
		ctx.lineTo(x, canv.height);
	}

	// Vertical
	for (let y = 0; y < canv.height; y += zoom) {
		ctx.moveTo(0, y);
		ctx.lineTo(canv.width, y);
	}

	// Draw
	ctx.lineWidth = 0.2;
	ctx.strokeStyle = "black";
	ctx.stroke();

	//Drawing an object
	start.Draw(ctx, zoom);
}
// Change zoom by scrolling
function ChangeZoom(event){
	let delta = event.deltaY / 53 * 5; // 53 is maybe my mouse characteristics (step)
	zoom -= delta;
	if(zoom < 10) zoom = 10;
	if(zoom > 100) zoom = 100;
	// Checking the position of cursor when scrolling
	if(event.pageY >= canv.height / 2) start.posY--;
	else start.posY++;
	if(event.pageX >= canv.width / 2) start.posX--;
	else start.posX++;
	DrawAll();
}

// Getting canvas by DOM
const canv = document.querySelector("canvas");

// Changing Zoom when we scroll mouse on canvas with SHIFT
canv.addEventListener("wheel", function(e){
	if(e.shiftKey) ChangeZoom(e);
});

// Setting size of canvas - 100%
canv.height = window.innerHeight;
canv.width = window.innerWidth;

// Gettin context - 2d
let ctx = canv.getContext("2d");
let zoom = 100;

let start = new Obj(Math.floor(canv.width / 2 / zoom), Math.floor(canv.height / 2 / zoom)); // Center of coord

// Setup function 
function Setup(){
	// Draw a cordinat NET
	DrawAll();
}

// Setting Up )
Setup();