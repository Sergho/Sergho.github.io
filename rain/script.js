var body = document.getElementsByTagName("body")[0];

var t = setInterval(Update, 25);

var length = 300;

var rains = [length];

for(var i = 0; i < length; i++){
	rains[i] = {
		x: ~~(Math.random() * 99),
		y: ~~(Math.random() * 30) - 30,
		width: 0.3,
		height: ~~(Math.random() * 5),
		obj: 0,
		Setup: function(){
			this.obj = document.createElement("div");
			this.obj.classList.add("rain");
			body.appendChild(this.obj);
		},
		yspeed: ~~(Math.random() * 4) + 1,
		Drop: function(){
			this.y += this.yspeed;
			if(this.y + this.height >= 100){
				this.y = ~~(Math.random() * 30) - 30;
				this.yspeed = ~~(Math.random() * 4) + 1;
			}
		},
		Draw: function(){
			this.obj.style.top = this.y + "vh";
			this.obj.style.left = this.x + "vw";
			this.obj.style.width = this.width + "vw";
			this.obj.style.height = this.height + "vh";
		}
	}
	rains[i].Setup();
}
function Update(){
	for(var i = 0; i < length; i++){
		rains[i].Drop();
		rains[i].Draw();
	}
}