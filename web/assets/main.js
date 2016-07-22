// Find the right method, call on correct element
function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function dumpFullscreen() {
  console.log("document.fullscreenElement is: ", document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
  console.log("document.fullscreenEnabled is: ", document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
}

// Add different events for fullscreen

$(document).ready(function(){
var background_image_1 = "";	
var background_image_2 = "";
var title = '';
var term = 'Random GIFs';

$.getJSON("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + term, function(data){
	background_image_1 = data.data.image_url
	$('.image_1').attr("src",data.data.image_url);
	$('body').css("background-image","url(" + data.data.image_url + ")");
	});

	$.getJSON("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + term, function(data){
		background_image_2 = data.data.image_url
	$('.image_2').attr("src",data.data.image_url);
	});


function cycle(){ 
	if($('.image_1').css("z-index") == "10") {
			$('.image_1').css("z-index", "-1"); 
			$('.image_2').css("z-index", "10");
			$.getJSON("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + term, function(data){
			background_image_1 = data.data.image_url
			$('.image_1').attr("src",data.data.image_url);
			$('body').css("background-image","url(" + background_image_2 + ")");
			
		});
	}
	else {
			$.getJSON("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + term, function(data){
			$('.image_2').css("z-index", "-1"); 
			$('.image_1').css("z-index", "10");
	  		background_image_2 = data.data.image_url
	    	$('.image_2').attr("src",data.data.image_url);
	    	$('body').css("background-image","url(" + background_image_1 + ")"); 
  		});
		}
}

function mousemover(e){
	$('body').addClass('show-tag');
	if(runningTimeout!==null){
		clearTimeout(runningTimeout);
		runningTimeout=null;
	}

	runningTimeout = setTimeout(function(){ 
		$('body').removeClass('show-tag');
		runningTimeout = null;
	}, 5000);
}

var runningTimeout = null;
$( "body" ).mousemove(mousemover);

function applyClass(e){
	$('body').removeClass('show-tag');
	$('body').unbind('mousemove');
	runningTimeout = setTimeout(function(){
		$('body').bind('mousemove', mousemover);
	}, 1000);
}

function customTag(){
	applyClass();
	term = $("input").val();
	if (term == ''){
		document.title = 'Random GIFs';
		$(".change-button").removeClass('active');
		$(".reset-button").addClass('active');
	}
	else {
		document.title = ' Now playing: ' + term + ' GIFs';
		$(".reset-button").removeClass('active');
		$(".change-button").addClass('active');
	}
	$.getJSON("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + term, function(data){
		background_image_1 = data.data.image_url
		$('.image_1').attr("src",data.data.image_url);
		$('body').css("background-image","url(" + data.data.image_url + ")");
		});

	$.getJSON("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + term, function(data){
		background_image_2 = data.data.image_url
		$('.image_2').attr("src",data.data.image_url);
		});
}

$(".change-button").click(function(e){
	customTag();	
});

$('input').on('keydown', function(e){
	if (e.keyCode == 13){
		customTag();
	}
});

$(".reset-button").click(function(e){
	$("input").val('');
	customTag();
});

setInterval(cycle, 10000);
	$('.gif').click(cycle);
});