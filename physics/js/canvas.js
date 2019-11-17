class Canvas{
	constructor(){	// constructor
		// Getting DOM canvas
		this.canvas = document.querySelector("canvas");
		// Setting canvas attributes
		this.canvas.width 	= window.innerWidth;
		this.canvas.height 	= window.innerHeight;
		// Getting canvas context
		this.ctx 		= this.canvas.getContext("2d");
	}
	DrawNet(){ //Drawing a coord net
		//Begin Path of net
		this.ctx.beginPath();
		// Horizontal
		for (let x = 0; x < this.canvas.width; x += zoom) {
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.canvas.height);
		}

		// Vertical
		for (let y = 0; y < this.canvas.height; y += zoom) {
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.canvas.width, y);
		}

		// Draw
		this.ctx.lineWidth = 0.2;
		this.ctx.strokeStyle = "black";
		this.ctx.stroke();
	}
	Clear(){
		// Clear screen
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}