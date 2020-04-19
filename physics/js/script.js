// Setup function
function Main(){
	// Canvas
	const canv 	= new Canvas(30);
	// Objects
	let objects = [new Obj(Math.floor(canv.canvas.width / 2 / canv.zoom), Math.floor(canv.canvas.height / 2 / canv.zoom), "#ccc", "rect", "1:1", false, canv)];
	objects[0].BindCanvas(canv);

	// Drawing all
	canv.DrawAll(objects);

	// Physic lib
	const physic = new Physic(canv, objects);
	// User interface
	const ui = new UI(physic);

}

// Setting Up )
Main();
