class Physic{
	constructor(canvas, objects){
		// Flag of gravitation
		this.gravTrig = false;
		// init canvas and array of objects
		this.canvas 	= canvas;
		this.objects 	= objects;
		this.simulate = false;
		this.fps 			= 120;
		// Friction force
		this.FFX			= 0;
		this.FFY			= 0;
		this.FFTrig		= false;
		// Checking button for click and then simulate
		this.Simulate();
	}
	Simulate(){
		// button of simulating
		const simulate = document.querySelector(".simulate button");
		// checking if button clicked
		simulate.onclick = () => {
			// changing the state of simulate flag
			this.simulate = !this.simulate;
			simulate.classList.toggle("active")
			if(this.simulate){
				simulate.innerHTML = 'Stop';
				// start interval if flag works
				console.log(this.objects);
				this.timer = setInterval(() => {
					// Making iteration with frequency of 60fps
					this.Iteration();
				}, 1000/this.fps);
			} else {
				simulate.innerHTML = 'Start';
				// clearing interval if flag was disabled
				clearInterval(this.timer);
				this.Return();
			}
		};
	}
	// One iteration
	Iteration(){
		// Clearing canvas
		this.canvas.Clear();
		// Doing action eith all of objects
		this.objects.forEach((obj) => {
			// Setting a new position
			if(!obj.fixed) obj.NewPos(obj.speedX / this.fps, obj.speedY / this.fps, true);
			// Setting a new speed
			if(!obj.fixed) obj.NewSpeed(obj.accelX / this.fps, obj.accelY / this.fps, true);
			// Drawing all
			this.canvas.DrawObj(obj);
		});
		// Collisions

		this.objects.forEach((obj1) => {
			this.objects.forEach((obj2) => {
				if(obj1.form == "circle" && !obj1.first){
					// ball and rect
					if(obj2.form == "rect" && !obj2.first){
						const thickness = 0.1; // Thickness of wall of rect
						// Rect is 4 lines, let's bind them with formulas 
						let lines = [obj2.posX, obj2.posX + +obj2.sizeX - 1 + 1, -obj2.posY, -obj2.posY - +obj2.sizeY + 1 - 1];
						// ForEach line put x or y into Circle formula (x-a)^2 + (y-b)^2 = r^2
						let radius = obj1.sizeX / 2;
						let a = obj1.posX + 0.5;
						let b = -obj1.posY - 0.5;
						for(let i = 0; i < 2; i++){
							// First two positions is x formulas
							// if circle is on the line
							if(radius * radius - Math.pow(lines[i] - a, 2) < 0) continue;
							else {
								// Solving formulas
								let first = Math.sqrt(radius * radius - Math.pow(lines[i] - a, 2)) + b;
								let second = -Math.sqrt(radius * radius - Math.pow(lines[i] - a, 2)) + b;
								// Checking intervals of lines
								if((first > lines[3] + thickness && first < lines[2] - thickness) || (second > lines[3] + thickness && second < lines[2] - thickness)) {
									if(i == 0) obj1.posX = lines[0] - 0.5 - obj1.sizeX / 2;
									if(i == 1) obj1.posX = lines[1] + +obj1.sizeX / 2 - 0.5;
									// change speed
									obj1.speedX = -obj1.speedX * 0.5;
									// friction force
									if(this.FFTrig){
										if(obj1.speedY > 0) obj1.speedY -= 0.1;
										if(obj1.speedY < 0) obj1.speedY += 0.1;
										if(Math.abs(obj1.speedY - 0.1) < 0) obj1.speedY = 0;
									}
									this.canvas.DrawAll(this.objects, true);
								}
							}
						}
						for(let i = 2; i < 4; i++){
							// First two positions is x formulas
							// if circle is on the line
							if(radius * radius - Math.pow(lines[i] - b, 2) < 0) continue;
							else {
								// Solving formulas
								let first = Math.sqrt(radius * radius - Math.pow(lines[i] - b, 2)) + a;
								let second = -Math.sqrt(radius * radius - Math.pow(lines[i] - b, 2)) + a;
								// Checking intervals of lines
								if((first > lines[0] && first < lines[1]) || (second > lines[0] && second < lines[1])) {
									if(i == 2) obj1.posY = -lines[2] - 0.5 - obj1.sizeX / 2;
									if(i == 3) obj1.posY = -lines[3] + +obj1.sizeX / 2 - 0.5;
									obj1.speedY = -obj1.speedY * 0.7;
									// friction force
									if(this.FFTrig){
										if(obj1.speedX > 0) obj1.speedX -= 0.1;
										if(obj1.speedX < 0) obj1.speedX += 0.1;
										if(Math.abs(obj1.speedX - 0.1) < 0) obj1.speedX = 0;
									}
									this.canvas.DrawAll(this.objects, true);
								}
							}
						}
					}
				}
			});
});

}
Return(){
		// Returning to start position and speed
		for(let i = 1; i < this.objects.length; i++){
			this.objects[i].NewPos(this.objects[i].StartPosX, this.objects[i].StartPosY, false);
			this.objects[i].NewSpeed(this.objects[i].StartSpeedX, this.objects[i].StartSpeedY, false);
		}
		// Drawing all
		this.canvas.DrawAll(this.objects);
	}
	ChangeGravitation(){	// Changing gravitation by checking value from gravTrigger
		if(this.gravTrig){	// if trigger is true adding g for all of objects
			this.objects.forEach((obj) => {
				obj.NewAcceleration(0, -9.81, true);
			});	
			// removing acceleration from start of coords
			this.objects[0].NewAcceleration(0, 0);
		} else {	// if no trigger removing g from all
			this.objects.forEach((obj) => {
				obj.NewAcceleration(0, 0);
			});	
		}
	}
}
