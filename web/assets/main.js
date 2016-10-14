var fullscreen = false;

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

// Set vars for images
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

	// Set cycle to switch images
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

	// Screensize

	function assign_bootstrap_mode() {
	    width = $( window ).width();
	    var mode = '';
	    if (width<768) {
	        mode = "mode-xs";
	    }
	    else if (width<992) {
	        mode = "mode-sm";
	    }
	    else if (width<1200) {
	        mode = "mode-md";
	    }
	    else if (width>1200) {
	        mode = "mode-lg";
	    }
	    if (mode == 'mode-xs'){
	    	window.location.replace("/mobile.html"); 
	    }
	}
	assign_bootstrap_mode();



	// Set fullscreen button
	$(".fullscreen-button").click(function(element){
		if (fullscreen == false){
			launchFullscreen(document.documentElement);
			$('.fa-expand').removeClass('fa-expand').addClass('fa-compress');
			fullscreen = true;
		}
		else{
			exitFullscreen(document.documentElement);
			fullscreen = false;
			$('.fa-compress').removeClass('fa-compress').addClass('fa-expand');
		}
	});

	// Show bar when mouse moves
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

	//Function to apply custom tag

	function customTag(){
		applyClass();
		term = $("input").val();
		if (term == ''){
			document.title = 'Random GIFs';
			$(".keywordmode").removeClass('active');
			$(".change-button").removeClass('active');
			$(".randommode").addClass('active');
			$(".input_controls").addClass('hidden');
			$('body').find('.popup').addClass('hidden');
		}
		else {
			document.title = ' Now playing: ' + term + ' GIFs';
			$(".randommode").removeClass('active');
			$(".change-button").addClass('active');
			$(".keywordmode").addClass('active');
			$('body').find('.popup').addClass('hidden');
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

	$('.closebtn').on('click', function(){
   		$('body').find('.popup').addClass('hidden');
   	});

	$('.infopopup-button').on('click', function(){
   		$('body').find('.popup').removeClass('hidden');
   	});

	//Button to apply custom tag

	$(".keywordmode").click(function(e){
		$(".input_controls").removeClass('hidden');
		$(".randommode").removeClass('active');
		$(".keywordmode").addClass('active');
		$('body').find('.popup').addClass('hidden');
	});

	$(".change-button").click(function(e){
		customTag();	
	});

	//Enter button to apply custom tag

	$('input').on('keydown', function(e){
		if (e.keyCode == 13){
			customTag();
		}
	});

	// Back to random GIF's

	$(".randommode").click(function(e){
		$("input").val('');
		customTag();
	});

	// Set interval to 10s
	setInterval(cycle, 10000);
	
	$('.gif').click(cycle);
});




