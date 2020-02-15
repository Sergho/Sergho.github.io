class Physic{
	constructor(canvas, objects){
		// Flag of gravitation
		this.gravTrig = false;
		// init canvas and array of objects
		this.canvas 	= canvas;
		this.objects 	= objects;
		this.simulate = false;
		this.fps 			= 120;
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
				if(obj1.form == "circle"){
					// ball and rect
					if(obj2.form.substring(0, 4) == "rect"){
						const thickness = 0.1; // Thickness of wall of rect
						let rect_width = +obj2.form.substring(4).split(':')[0] - 1;
						let rect_height = +obj2.form.substring(4).split(':')[1] - 1;
						// Rect is 4 lines, let's bind them with formulas 
						let lines = [obj2.posX, obj2.posX + rect_width + 1, -obj2.posY, -obj2.posY - rect_height - 1];
						// ForEach line put x or y into Circle formula (x-a)^2 + (y-b)^2 = r^2
						let radius = obj1.size / 2 / this.canvas.zoom;
						let a = obj1.posX + radius;
						let b = -obj1.posY - radius;
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
									if(i == 0) obj1.posX = lines[0] - 1;
									if(i == 1) obj1.posX = lines[1];
									obj1.speedX = -obj1.speedX * 0.7;
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
									if(i == 2) obj1.posY = -(lines[2] + 1);
									if(i == 3) obj1.posY = -lines[3];
									obj1.speedY = -obj1.speedY * 0.7;
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
