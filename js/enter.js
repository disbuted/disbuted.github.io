document.getElementById("enter").addEventListener("click", function() {
	var audio = document.getElementById('audio');
    var video = document.getElementById("bgvid");  
    const target = document.getElementById("enter");
    target.style.opacity = '0.5';
    target.addEventListener('transitionend', () => target.remove());
    if (typeof window.orientation == 'undefined') {
        audio.play();
		video.play();
    }
	
});