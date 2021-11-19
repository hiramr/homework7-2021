var vid = document.getElementById("player1");
var volume = vid.volume * 100 + "%";

/*document.querySelector("#slower").addEventListener("click", function() {
marchingvid.playbackRate(); console.log("Slower Video");
});

document.querySelector("#faster").addEventListener("click", function() {
marchingvid.playbackRate = ; console.log("Faster Video");
});

document.querySelector("#skip").addEventListener("click", function() {
marchingvid.play(); console.log("Play Video");
}); */

/*window.addEventListener("load", function() {
console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
}); */

window.addEventListener("load", function() {
console.log("Good job opening the window")
});
	
document.querySelector("#play").addEventListener("click", function(){
	vid.play();
	console.log("Play Video")
	document.getElementById("volume").innerHTML = volume;
});
		
document.querySelector("#pause").addEventListener("click", function(){
	vid.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function(){
	vid.playbackRate -= 0.05;
	console.log("Decrease Video Speed to:", vid.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	vid.playbackRate +=  0.05;
	console.log("Increase Video Speed to:", vid.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function(){
	if (vid.muted == false) {    
		vid.muted = true
		console.log("Video is muted")
		document.getElementById("mute").innerHTML = "Unmute"
		document.getElementById("volume").innerHTML = "0%"
		document.getElementById("slider").value = 0;
 	}

 	else {
	 vid.muted = false
	 console.log("Video is unmuted")
	 document.getElementById("mute").innerHTML = "Mute"
	 document.getElementById("volume").innerHTML = "100%"
	 document.getElementById("slider").value = 100;
 }
 });

/*document.querySelector("#slider").addEventListener("mousedown", function(){
	
}); */ 

document.getElementById("volume").innerHTML = document.getElementById("slider").value;
document.getElementById("slider").oninput = function () {
	document.getElementById("volume").innerHTML = this.value + "%"
	document.getElementById("volume") = this.value;
}



	
