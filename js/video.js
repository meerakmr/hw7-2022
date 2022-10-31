var video;
var volume;

// page load: onload
// turn off autoplay, turn off looping
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("video autoplay is set to " + video.autoplay
	  + "\nloop is set to " + video.loop);
});

// play button: onclick
// play video, update volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
})

// pause button: onclick
// pause the video
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
})

// slow down: onlick
// slow current video by 10%, log new speed to console
document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow down Video");
	video.playbackRate = 0.9*video.playbackRate;
	console.log("Speed is " + video.playbackRate);
})

// speed up: onclick
// increase speed by 10% (proportional to slow down), log new speed to console
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is " + video.playbackRate);
})

// skip ahead: onclick
// advance current video by 10sec; if video length has been exceeded, go to start of video, log new timestep to console
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.ended) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
})

// mute: onclick
// mute or unmute, update button text accordingly
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) { // we need to unmute
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else { // we need to mute
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})

// volume slider: 
// change volume, update volume information
document.querySelector("#slider").addEventListener("change", function () {
	video.volume = document.querySelector("#slider").value/100;
	console.log("The current value is " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
})

// styled: onclick
// utilize existing oldSchool class on video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.className += " oldSchool";
})

// original: onclick
// remove the oldSchool class from video element
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.className = "video";
})
