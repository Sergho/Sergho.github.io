class Obj{
	// Coordinates of start of coordinates
	static StartX;
	static StartY;
	// Canvas
	static canvas;
	// Flag if object is first object (will returned to false after each object construct)
	static first = true;
	constructor(posX, posY, color, form, fixed, canvas){
		// Bind canvas
		this.BindCanvas(canvas);
		// Start postion of objects to return after simulating
		this.StartPosX = posX;
		this.StartPosY = posY;
		// Start speed of object
		this.StartSpeedX = 0;
		this.StartSpeedY = 0;
		// Setting a position and color and flag of object
		this.posX 	= posX;
		this.posY 	= Obj.first ? posY : -posY;
		this.color 	= color;
		this.first  = Obj.first;
		// Static or dinamic object
		this.fixed = fixed;
		// Setting a form of object
		this.form 	= form;
		// Speed x and y
		this.speedX = 0;
		this.speedY = 0;
		// Acceleration x and y
		this.accelX = 0;
		this.accelY = 0;
		// Size of object;
		this.size = Obj.canvas.zoom;
		// Setting static coord of start point
		if(this.first){
			Obj.StartX = posX;
			Obj.StartY = posY;
			Obj.first  = false;
		}
	}
	BindCanvas(canvas){
		if(canvas) Obj.canvas = canvas;
	}
	NewPos(posX, posY, delta, start){	// New position for object
		// Checking delta, if true - incrementing position
		if(!delta){
			this.posX = posX;
			this.posY = this.first ? posY : -posY;
		} else {		// else setting a new position
			this.posX += posX;
			this.posY += this.first ? posY : -posY;
		}
		if(start){				// Setting start speed if start flag is true
			this.StartPosX = posX;
			this.StartPosY = posY;
		}
		if(this.first){		// if it is the start point - setting new start of coordinates
			Obj.StartX = this.posX;
			Obj.StartY = this.posY;
		}
	}
	NewSpeed(speedX, speedY, delta, start){	// New speed and start speed for objects nearly same with position, so check it higher
		if(!delta){
			this.speedX = speedX;
			this.speedY = speedY;
		} else {
			this.speedX += speedX;
			this.speedY += speedY;
		}
		if(start){				// Setting start speed if start flag is true
			this.StartSpeedX = speedX;
			this.StartSpeedY = speedY;
		}
	}
	NewAcceleration(accelX, accelY, delta){	// Setting a new acceleration for object
		if(!delta){
			this.accelX = accelX;
			this.accelY = accelY;
		} else {
			this.accelX += accelX;
			this.accelY += accelY;
		}
	}
}