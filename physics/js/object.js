class Obj{
	static StartX;
	static StartY;
	constructor(posX, posY, color, start){
		// Setting a position and color and flag of object
		this.posX 	= posX;
		this.posY 	= start ? posY : -posY;
		this.color 	= color;
		this.start 	= start;
		// Setting static coord of start point
		if(start){
			Obj.StartX = posX;
			Obj.StartY = posY;
		}
	}
	Draw(ctx, zoom){
		// Drawing object
		ctx.fillStyle = this.color;
		if(this.start) ctx.fillRect(this.posX * zoom, this.posY * zoom, zoom, zoom);
		else ctx.fillRect((Obj.StartX + this.posX) * zoom, (Obj.StartY + this.posY) * zoom, zoom, zoom)
	}
	NewPos(posX, posY, start){
		this.posX = posX;
		this.posY = posY;
		if(start){
			Obj.StartX = posX;
			Obj.StartY = posY;
		}
	}
}