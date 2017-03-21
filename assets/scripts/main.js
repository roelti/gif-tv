var fullscreen = false;

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

function assign_bootstrap_mode() {
    width = $( window ).innerWidth();
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
    	window.location.replace("/m"); 
    }
}

// Show bar when mouse moves
function mousemover(e){
	if(barSuppressed){
		return;
	}
	$('body').addClass('show-tag');
	if(runningTimeout!==null){
		clearTimeout(runningTimeout);
		runningTimeout=null;
	}
	if (!forceBar) {
		runningTimeout = setTimeout(function(){ 
			$('body').removeClass('show-tag');
			runningTimeout = null;
		}, 5000);
	}
}
var runningTimeout = null;

var forceBar = false;
var barSuppressed = false;

function supressBar(e){
	$('body').removeClass('show-tag');
	barSuppressed = true;
	runningTimeout = setTimeout(function(){
		barSuppressed = false;
	}, 1000);
}

var background_image_1 = "";	
var background_image_2 = "";
var title = '';
var term = '';

// Set cycle to switch images
function cycle(){ 
	render(term);
}

var counter = 0;
function render(term){
	var url = "https://api.tenor.co/v1/trending?key=LIVDSRZULELA";

	if(term){
		url = 'https://api.tenor.co/v1/search?tag=' + encodeURIComponent(term) + '&key=LIVDSRZULELA';
	}

	$.getJSON(url, function(data){
		console.log(data, counter);
		var imgUrl = data.results[counter].media[0].gif.url;
		imgUrl = imgUrl.replace('http://', 'https://');
		if($('.image_1').css("z-index") == "10") {
			$('.image_1').css("z-index", "-1"); 
			$('.image_2').css("z-index", "10");
			background_image_1 = imgUrl;
			$('.image_1').attr("src",imgUrl);
			$('body').css("background-image","url(" + background_image_2 + ")");
		} else {	
			$('.image_2').css("z-index", "-1"); 
			$('.image_1').css("z-index", "10");
  			background_image_2 = imgUrl
    		$('.image_2').attr("src",imgUrl);
	    	$('body').css("background-image","url(" + background_image_1 + ")"); 
		}

	});
	
	counter++; 
}

//Function to apply custom tag
function customTag(keyword){
	supressBar();
	term = keyword;
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

	render(term);
}

// Set interval to 10s
setInterval(cycle, 10000);

$(document).ready(function(){

	render(term);
	render(term);

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

	$( "body" ).mousemove(mousemover);
	$('#tag-input').keypress(mousemover);

	$('.mo-closebtn').on('click', function(){
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
		customTag($("input").val());	
	});

	//Enter button to apply custom tag
	$('input').on('keydown', function(e){
		if (e.keyCode == 13){
			customTag($("input").val());
		}
	});

	// Back to random GIF's
	$(".randommode").click(function(e){
		$("input").val('');
		customTag('');
	});
	
	$('.gif').click(cycle);

	$('#tag-input').on('focus', function(){
		forceBar = true;
	});

	$('#tag-input').on('blur', function(){
		forceBar = false;
		mousemover();
	});

});




