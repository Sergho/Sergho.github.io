// zoom integer
let zoom = 30;
// Setup function 
function Main(){
	// Canvas
	const canv = new Canvas();

	// New object as start of coord
	let start = new Obj(Math.floor(canv.canvas.width / 2 / zoom) - 1, Math.floor(canv.canvas.height / 2 / zoom), "#ccc", true);

	// Objects
	let objects = [new Obj(1, 1, "red"), new Obj(2,1, "red"), new Obj(3,1, "red"), new Obj(2,2, "red")];

	Draw();

	// Moving by arrows (transition)
	document.onkeydown = MoveD;
	function MoveD(e){
		// delta x and delta y
		let dx = 0, dy = 0;
		// init deltas
		if(e.key == "ArrowDown") dy = -1;
		if(e.key == "ArrowUp") dy = 1;
		if(e.key == "ArrowRight") dx = -1;
		if(e.key == "ArrowLeft") dx = 1;
		
		// Drawing all
		Draw(dx, dy);
	}
	// coords of touch start
	let startX, startY;
	const debounce = 100;
	// Moving by swipes
	document.ontouchstart = MoveMStart;
	function MoveMStart(e){
		// init start touch coords
		startX = e.touches[0].screenX;
		startY = e.touches[0].screenY;
	}
	document.ontouchend = MoveMEnd;
	function MoveMEnd(e){
		// Get deltas
		let dx = startX - e.changedTouches[0].screenX;
		let dy = startY - e.changedTouches[0].screenY;
		dx = Math.floor(dx / 100);
		dy = Math.floor(dy / 100);
		// Draw
		Draw(dx, dy);
	}

	// Changing zoom on scroll with shift
	document.onmousewheel = ChangeZoom;
	function ChangeZoom(e){
		if(e.shiftKey){
			// Get Delta
			delta = e.wheelDeltaY / 120;
			// Change zoom
			zoom += delta;
			// Min and max control
			if(zoom < 10) 	zoom = 10;
			if(zoom > 100) 	zoom = 100;

			console.log(start.posX, start.posY);
			// Start to center
			start.NewPos(Math.floor(window.innerWidth / 2 / zoom) - 1, Math.floor(window.innerHeight / 2 / zoom), true)
			// Draw All
			Draw();
		}
	}

	// Function of drawing all
	function Draw(dx, dy){
		if(dx != undefined && dy != undefined) start.NewPos(start.posX + dx, start.posY + dy, true);
		// Clear All
		canv.Clear();
		// Draw a coord net
		canv.DrawNet();
		// Draw a start dot
		start.Draw(canv.ctx, zoom);
		// Draw all objects
		objects.forEach(function(obj){
			obj.Draw(canv.ctx, zoom);
		});
	}
}

// Setting Up )
Main();