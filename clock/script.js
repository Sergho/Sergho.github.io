var t = setInterval(Update, 10);


function Update(){

	Text();
	Circle();

}

function Text(){
	$(".hours").text(new Date().getHours() + ": ");
	$(".minutes").text(new Date().getMinutes() + ": ");
	$(".seconds").text(new Date().getSeconds() + ": ");
	$(".milliseconds").text(~~(new Date().getMilliseconds() / 100));
}

function Circle(){
	const hours = $(".h");
	const minutes = $(".m");
	const seconds = $(".s");
	const milliseconds = $(".ms");

	var hdA = hours.attr("r") * 2 * Math.PI;
	var hdO = function(){
		var val = new Date().getHours();
		if(val > 12) val -= 12;
		return hdA - (val / 12) * hdA;
	}
	var mdA = minutes.attr("r") * 2 * Math.PI;
	var mdO = function(){
		var val = new Date().getMinutes();
		return mdA - (val / 60) * mdA;
	}
	var sdA = seconds.attr("r") * 2 * Math.PI;
	var sdO = function(){
		var val = new Date().getSeconds();
		return sdA - (val / 60) * sdA;
	}
	var msdA = milliseconds.attr("r") * 2 * Math.PI;
	var msdO = function(){
		var val = new Date().getMilliseconds();
		return msdA - (val / 1000) * msdA;
	}

	hours.css("stroke-dasharray", hdA);
	hours.css("stroke-dashoffset", hdO);

	minutes.css("stroke-dasharray", mdA);
	minutes.css("stroke-dashoffset", mdO);

	seconds.css("stroke-dasharray", sdA);
	seconds.css("stroke-dashoffset", sdO);

	milliseconds.css("stroke-dasharray", msdA);
	milliseconds.css("stroke-dashoffset", msdO);
}