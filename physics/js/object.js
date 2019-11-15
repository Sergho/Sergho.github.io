class Obj{
	constructor(posX, posY){
		// Setting a position of object
		this.posX = posX;
		this.posY = posY;
	}
	Draw(ctx, zoom){

		// Drawing object
		ctx.fillStyle = "red";
		ctx.fillRect(this.posX * zoom, this.posY * zoom, zoom, zoom);
	}
	NewPos(posX, posY){
		this.posX = posX;
		this.posY = posY;
	}
}