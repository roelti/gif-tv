function launchFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function assign_bootstrap_mode(){width=$(window).innerWidth();var e="";width<768?e="mode-xs":width<992?e="mode-sm":width<1200?e="mode-md":width>1200&&(e="mode-lg"),"mode-xs"==e&&window.location.replace("/m")}function mousemover(e){barSuppressed||($("body").addClass("show-tag"),null!==runningTimeout&&(clearTimeout(runningTimeout),runningTimeout=null),forceBar||(runningTimeout=setTimeout(function(){$("body").removeClass("show-tag"),runningTimeout=null},5e3)))}function supressBar(e){$("body").removeClass("show-tag"),barSuppressed=!0,runningTimeout=setTimeout(function(){barSuppressed=!1},1e3)}function cycle(){render(term)}function render(e){if(gifs.length>0){var n=gifs.shift(),o=n.gif.url;"10"==$(".image_1").css("z-index")?($(".image_1").css("z-index","-1"),$(".image_2").css("z-index","10"),background_image_1=o,$(".image_1").attr("src",o),$("body").css("background-image","url("+background_image_2+")")):($(".image_2").css("z-index","-1"),$(".image_1").css("z-index","10"),background_image_2=o,$(".image_2").attr("src",o),$("body").css("background-image","url("+background_image_1+")"))}if(0==gifs.length&&!alreadyGetting){alreadyGetting=!0;var t="trending";e&&(t="search");var s="https://api.tenor.co/v1/"+t+"?key=LIVDSRZULELA&pos="+nextPos;e&&(s+="&tag="+encodeURIComponent(e)),$.getJSON(s,function(n){alreadyGetting=!1;for(index in n.results){var o=n.results[index];gifs.push(o.media[0])}nextPos=n.next,n.results.length>0&&(render(e),prevTerm!=e&&(prevTerm=e,render(e)))})}}function customTag(e){supressBar(),term=e,""===term?(document.title="Random GIFs",$(".keywordmode").removeClass("active"),$(".change-button").removeClass("active"),$(".randommode").addClass("active"),$(".input_controls").addClass("hidden"),$("body").find(".popup").addClass("hidden")):(document.title=" Now playing: "+term+" GIFs",$(".randommode").removeClass("active"),$(".change-button").addClass("active"),$(".keywordmode").addClass("active"),$("body").find(".popup").addClass("hidden")),gifs=[],nextPos="",clearInterval(cycleInterval),cycleInterval=setInterval(cycle,1e4),render(term)}var fullscreen=!1,runningTimeout=null,forceBar=!1,barSuppressed=!1,background_image_1="",background_image_2="",title="",term="",counter=0,pos="",gifs=[],nextPos="",alreadyGetting=!1,prevTerm=null,cycleInterval=setInterval(cycle,1e4);$(document).ready(function(){render(term),assign_bootstrap_mode(),$(".fullscreen-button").click(function(e){fullscreen===!1?(launchFullscreen(document.documentElement),$(".fa-expand").removeClass("fa-expand").addClass("fa-compress"),fullscreen=!0):(exitFullscreen(document.documentElement),fullscreen=!1,$(".fa-compress").removeClass("fa-compress").addClass("fa-expand"))}),$("body").mousemove(mousemover),$("#tag-input").keypress(mousemover),$(".mo-closebtn").on("click",function(){$("body").find(".popup").addClass("hidden")}),$(".infopopup-button").on("click",function(){$("body").find(".popup").removeClass("hidden")}),$(".keywordmode").click(function(e){$(".input_controls").removeClass("hidden"),$(".randommode").removeClass("active"),$(".keywordmode").addClass("active"),$("body").find(".popup").addClass("hidden")}),$(".change-button").click(function(e){customTag($("input").val())}),$("input").on("keydown",function(e){13==e.keyCode&&customTag($("input").val())}),$(".randommode").click(function(e){$("input").val(""),customTag("")}),$(".gif").click(cycle),$("#tag-input").on("focus",function(){forceBar=!0}),$("#tag-input").on("blur",function(){forceBar=!1,mousemover()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibGF1bmNoRnVsbHNjcmVlbiIsImVsZW1lbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJkb2N1bWVudCIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsImFzc2lnbl9ib290c3RyYXBfbW9kZSIsIndpZHRoIiwiJCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtb2RlIiwibG9jYXRpb24iLCJyZXBsYWNlIiwibW91c2Vtb3ZlciIsImUiLCJiYXJTdXBwcmVzc2VkIiwiYWRkQ2xhc3MiLCJydW5uaW5nVGltZW91dCIsImNsZWFyVGltZW91dCIsImZvcmNlQmFyIiwic2V0VGltZW91dCIsInJlbW92ZUNsYXNzIiwic3VwcmVzc0JhciIsImN5Y2xlIiwicmVuZGVyIiwidGVybSIsImdpZnMiLCJsZW5ndGgiLCJtZWRpYSIsInNoaWZ0IiwiaW1nVXJsIiwiZ2lmIiwidXJsIiwiY3NzIiwiYmFja2dyb3VuZF9pbWFnZV8xIiwiYXR0ciIsImJhY2tncm91bmRfaW1hZ2VfMiIsImFscmVhZHlHZXR0aW5nIiwibmV4dFBvcyIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldEpTT04iLCJkYXRhIiwiaW5kZXgiLCJyZXN1bHRzIiwicmVzdWx0IiwicHVzaCIsIm5leHQiLCJwcmV2VGVybSIsImN1c3RvbVRhZyIsImtleXdvcmQiLCJ0aXRsZSIsImZpbmQiLCJjbGVhckludGVydmFsIiwiY3ljbGVJbnRlcnZhbCIsInNldEludGVydmFsIiwiZnVsbHNjcmVlbiIsImNvdW50ZXIiLCJwb3MiLCJyZWFkeSIsImNsaWNrIiwiZG9jdW1lbnRFbGVtZW50IiwibW91c2Vtb3ZlIiwia2V5cHJlc3MiLCJvbiIsInZhbCIsImtleUNvZGUiXSwibWFwcGluZ3Mi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LFNBQUE3QyxHQUNBUCxFQUFBLFNBQUF5RCxJQUFBLElBQ0FoQixVQUFBLE1BR0F6QyxFQUFBLFFBQUFvRCxNQUFBcEMsT0FFQWhCLEVBQUEsY0FBQXdELEdBQUEsUUFBQSxXQUNBNUMsVUFBQSxJQUdBWixFQUFBLGNBQUF3RCxHQUFBLE9BQUEsV0FDQTVDLFVBQUEsRUFDQU4iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmdWxsc2NyZWVuID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBsYXVuY2hGdWxsc2NyZWVuKGVsZW1lbnQpIHtcclxuICBpZihlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgfSBlbHNlIGlmKGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcclxuICAgIGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICB9IGVsc2UgaWYoZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gIH0gZWxzZSBpZihlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4oKSB7XHJcbiAgaWYoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgfSBlbHNlIGlmKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcclxuICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcclxuICB9IGVsc2UgaWYoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NpZ25fYm9vdHN0cmFwX21vZGUoKSB7XHJcbiAgICB3aWR0aCA9ICQoIHdpbmRvdyApLmlubmVyV2lkdGgoKTtcclxuICAgIHZhciBtb2RlID0gJyc7XHJcbiAgICBpZiAod2lkdGg8NzY4KSB7XHJcbiAgICAgICAgbW9kZSA9IFwibW9kZS14c1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAod2lkdGg8OTkyKSB7XHJcbiAgICAgICAgbW9kZSA9IFwibW9kZS1zbVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAod2lkdGg8MTIwMCkge1xyXG4gICAgICAgIG1vZGUgPSBcIm1vZGUtbWRcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHdpZHRoPjEyMDApIHtcclxuICAgICAgICBtb2RlID0gXCJtb2RlLWxnXCI7XHJcbiAgICB9XHJcbiAgICBpZiAobW9kZSA9PSAnbW9kZS14cycpe1xyXG4gICAgXHR3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9tXCIpOyBcclxuICAgIH1cclxufVxyXG5cclxuLy8gU2hvdyBiYXIgd2hlbiBtb3VzZSBtb3Zlc1xyXG5mdW5jdGlvbiBtb3VzZW1vdmVyKGUpe1xyXG5cdGlmKGJhclN1cHByZXNzZWQpe1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHQkKCdib2R5JykuYWRkQ2xhc3MoJ3Nob3ctdGFnJyk7XHJcblx0aWYocnVubmluZ1RpbWVvdXQhPT1udWxsKXtcclxuXHRcdGNsZWFyVGltZW91dChydW5uaW5nVGltZW91dCk7XHJcblx0XHRydW5uaW5nVGltZW91dD1udWxsO1xyXG5cdH1cclxuXHRpZiAoIWZvcmNlQmFyKSB7XHJcblx0XHRydW5uaW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXHJcblx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2hvdy10YWcnKTtcclxuXHRcdFx0cnVubmluZ1RpbWVvdXQgPSBudWxsO1xyXG5cdFx0fSwgNTAwMCk7XHJcblx0fVxyXG59XHJcbnZhciBydW5uaW5nVGltZW91dCA9IG51bGw7XHJcblxyXG52YXIgZm9yY2VCYXIgPSBmYWxzZTtcclxudmFyIGJhclN1cHByZXNzZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHN1cHJlc3NCYXIoZSl7XHJcblx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaG93LXRhZycpO1xyXG5cdGJhclN1cHByZXNzZWQgPSB0cnVlO1xyXG5cdHJ1bm5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0YmFyU3VwcHJlc3NlZCA9IGZhbHNlO1xyXG5cdH0sIDEwMDApO1xyXG59XHJcblxyXG52YXIgYmFja2dyb3VuZF9pbWFnZV8xID0gXCJcIjtcdFxyXG52YXIgYmFja2dyb3VuZF9pbWFnZV8yID0gXCJcIjtcclxudmFyIHRpdGxlID0gJyc7XHJcbnZhciB0ZXJtID0gJyc7XHJcblxyXG4vLyBTZXQgY3ljbGUgdG8gc3dpdGNoIGltYWdlc1xyXG5mdW5jdGlvbiBjeWNsZSgpeyBcclxuXHRyZW5kZXIodGVybSk7XHJcbn1cclxuXHJcbnZhciBjb3VudGVyID0gMDtcclxudmFyIHBvcyA9ICcnO1xyXG5cclxuXHJcbnZhciBnaWZzID0gW107XHJcbnZhciBuZXh0UG9zID0gJyc7XHJcblxyXG52YXIgYWxyZWFkeUdldHRpbmcgPSBmYWxzZTtcclxuXHJcbnZhciBwcmV2VGVybSA9IG51bGw7XHJcblxyXG4vL1RPRE86IElmIGNvdW50ZXIgPSAwIGRhbiBnZXRKU09OIGVuIGNvdW50ZXIgcmVzZXR0ZW4gYmlqIHRlcm0gem9la2VuXHJcbmZ1bmN0aW9uIHJlbmRlcih0ZXJtKXtcclxuXHJcblx0XHJcblxyXG5cclxuXHRpZihnaWZzLmxlbmd0aCA+IDApe1xyXG5cclxuXHRcdHZhciBtZWRpYSA9IGdpZnMuc2hpZnQoKTtcclxuXHRcdFxyXG5cdFx0dmFyIGltZ1VybCA9IG1lZGlhLmdpZi51cmw7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2coZGF0YSwgY291bnRlcik7XHJcblx0XHQvL2ltZ1VybCA9IGltZ1VybC5yZXBsYWNlKCdodHRwOi8vJywgJ2h0dHBzOi8vJyk7XHJcblx0XHRpZigkKCcuaW1hZ2VfMScpLmNzcyhcInotaW5kZXhcIikgPT0gXCIxMFwiKSB7XHJcblx0XHRcdCQoJy5pbWFnZV8xJykuY3NzKFwiei1pbmRleFwiLCBcIi0xXCIpOyBcclxuXHRcdFx0JCgnLmltYWdlXzInKS5jc3MoXCJ6LWluZGV4XCIsIFwiMTBcIik7XHJcblx0XHRcdGJhY2tncm91bmRfaW1hZ2VfMSA9IGltZ1VybDtcclxuXHRcdFx0JCgnLmltYWdlXzEnKS5hdHRyKFwic3JjXCIsaW1nVXJsKTtcclxuXHRcdFx0JCgnYm9keScpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIixcInVybChcIiArIGJhY2tncm91bmRfaW1hZ2VfMiArIFwiKVwiKTtcclxuXHJcblx0XHR9IGVsc2Uge1x0XHJcblx0XHRcdCQoJy5pbWFnZV8yJykuY3NzKFwiei1pbmRleFwiLCBcIi0xXCIpOyBcclxuXHRcdFx0JCgnLmltYWdlXzEnKS5jc3MoXCJ6LWluZGV4XCIsIFwiMTBcIik7XHJcblx0XHRcdFx0YmFja2dyb3VuZF9pbWFnZV8yID0gaW1nVXJsO1xyXG5cdFx0XHQkKCcuaW1hZ2VfMicpLmF0dHIoXCJzcmNcIixpbWdVcmwpO1xyXG5cdCAgICBcdCQoJ2JvZHknKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIgKyBiYWNrZ3JvdW5kX2ltYWdlXzEgKyBcIilcIik7IFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYoZ2lmcy5sZW5ndGggPT0gMCl7XHJcblx0XHRpZighYWxyZWFkeUdldHRpbmcpe1xyXG5cclxuXHJcblx0XHRcdGFscmVhZHlHZXR0aW5nID0gdHJ1ZTtcclxuXHJcblx0XHRcdHZhciBtb2RlID0gJ3RyZW5kaW5nJztcclxuXHRcdFx0aWYodGVybSl7XHJcblx0XHRcdFx0bW9kZSA9ICdzZWFyY2gnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgdXJsID0gJ2h0dHBzOi8vYXBpLnRlbm9yLmNvL3YxLycgKyBtb2RlICsgJz9rZXk9TElWRFNSWlVMRUxBJyArICcmcG9zPScgKyBuZXh0UG9zO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYodGVybSl7XHJcblx0XHRcdFx0dXJsICs9ICcmdGFnPScgKyBlbmNvZGVVUklDb21wb25lbnQodGVybSk7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHQkLmdldEpTT04odXJsLCBmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0XHRhbHJlYWR5R2V0dGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvcihpbmRleCBpbiBkYXRhLnJlc3VsdHMpe1xyXG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IGRhdGEucmVzdWx0c1tpbmRleF07XHJcblx0XHRcdFx0XHRnaWZzLnB1c2gocmVzdWx0Lm1lZGlhWzBdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmV4dFBvcyA9IGRhdGEubmV4dDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoZGF0YS5yZXN1bHRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHJlbmRlcih0ZXJtKTtcclxuXHJcblx0XHRcdFx0XHRpZihwcmV2VGVybSAhPSB0ZXJtKXtcclxuXHRcdFx0XHRcdFx0cHJldlRlcm0gPSB0ZXJtO1xyXG5cdFx0XHRcdFx0XHRyZW5kZXIodGVybSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG4vL0Z1bmN0aW9uIHRvIGFwcGx5IGN1c3RvbSB0YWdcclxuZnVuY3Rpb24gY3VzdG9tVGFnKGtleXdvcmQpe1xyXG5cdHN1cHJlc3NCYXIoKTtcclxuXHR0ZXJtID0ga2V5d29yZDtcclxuXHRpZiAodGVybSA9PT0gJycpe1xyXG5cdFx0ZG9jdW1lbnQudGl0bGUgPSAnUmFuZG9tIEdJRnMnO1xyXG5cdFx0JChcIi5rZXl3b3JkbW9kZVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKFwiLmNoYW5nZS1idXR0b25cIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JChcIi5yYW5kb21tb2RlXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoXCIuaW5wdXRfY29udHJvbHNcIikuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG5cdFx0JCgnYm9keScpLmZpbmQoJy5wb3B1cCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRkb2N1bWVudC50aXRsZSA9ICcgTm93IHBsYXlpbmc6ICcgKyB0ZXJtICsgJyBHSUZzJztcclxuXHRcdCQoXCIucmFuZG9tbW9kZVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKFwiLmNoYW5nZS1idXR0b25cIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JChcIi5rZXl3b3JkbW9kZVwiKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCdib2R5JykuZmluZCgnLnBvcHVwJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHRcclxuXHRnaWZzID0gW107XHJcblx0bmV4dFBvcyA9ICcnO1xyXG5cclxuXHRjbGVhckludGVydmFsKGN5Y2xlSW50ZXJ2YWwpO1xyXG5cdGN5Y2xlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjeWNsZSwgMTAwMDApO1xyXG5cclxuXHRyZW5kZXIodGVybSk7XHJcbn1cclxuXHJcbi8vIFNldCBpbnRlcnZhbCB0byAxMHNcclxudmFyIGN5Y2xlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjeWNsZSwgMTAwMDApO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0cmVuZGVyKHRlcm0pO1xyXG5cclxuXHRhc3NpZ25fYm9vdHN0cmFwX21vZGUoKTtcclxuXHJcblx0Ly8gU2V0IGZ1bGxzY3JlZW4gYnV0dG9uXHJcblx0JChcIi5mdWxsc2NyZWVuLWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbihlbGVtZW50KXtcclxuXHRcdGlmIChmdWxsc2NyZWVuID09PSBmYWxzZSl7XHJcblx0XHRcdGxhdW5jaEZ1bGxzY3JlZW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuXHRcdFx0JCgnLmZhLWV4cGFuZCcpLnJlbW92ZUNsYXNzKCdmYS1leHBhbmQnKS5hZGRDbGFzcygnZmEtY29tcHJlc3MnKTtcclxuXHRcdFx0ZnVsbHNjcmVlbiA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRleGl0RnVsbHNjcmVlbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG5cdFx0XHRmdWxsc2NyZWVuID0gZmFsc2U7XHJcblx0XHRcdCQoJy5mYS1jb21wcmVzcycpLnJlbW92ZUNsYXNzKCdmYS1jb21wcmVzcycpLmFkZENsYXNzKCdmYS1leHBhbmQnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JCggXCJib2R5XCIgKS5tb3VzZW1vdmUobW91c2Vtb3Zlcik7XHJcblx0JCgnI3RhZy1pbnB1dCcpLmtleXByZXNzKG1vdXNlbW92ZXIpO1xyXG5cclxuXHQkKCcubW8tY2xvc2VidG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICBcdFx0JCgnYm9keScpLmZpbmQoJy5wb3B1cCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgXHR9KTtcclxuXHJcblx0JCgnLmluZm9wb3B1cC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICBcdFx0JCgnYm9keScpLmZpbmQoJy5wb3B1cCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgXHR9KTtcclxuXHJcblx0Ly9CdXR0b24gdG8gYXBwbHkgY3VzdG9tIHRhZ1xyXG5cdCQoXCIua2V5d29yZG1vZGVcIikuY2xpY2soZnVuY3Rpb24oZSl7XHJcblx0XHQkKFwiLmlucHV0X2NvbnRyb2xzXCIpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuXHRcdCQoXCIucmFuZG9tbW9kZVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKFwiLmtleXdvcmRtb2RlXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJ2JvZHknKS5maW5kKCcucG9wdXAnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcblx0fSk7XHJcblxyXG5cdCQoXCIuY2hhbmdlLWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdGN1c3RvbVRhZygkKFwiaW5wdXRcIikudmFsKCkpO1x0XHJcblx0fSk7XHJcblxyXG5cdC8vRW50ZXIgYnV0dG9uIHRvIGFwcGx5IGN1c3RvbSB0YWdcclxuXHQkKCdpbnB1dCcpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSl7XHJcblx0XHRpZiAoZS5rZXlDb2RlID09IDEzKXtcclxuXHRcdFx0Y3VzdG9tVGFnKCQoXCJpbnB1dFwiKS52YWwoKSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIEJhY2sgdG8gcmFuZG9tIEdJRidzXHJcblx0JChcIi5yYW5kb21tb2RlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdFx0JChcImlucHV0XCIpLnZhbCgnJyk7XHJcblx0XHRjdXN0b21UYWcoJycpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJy5naWYnKS5jbGljayhjeWNsZSk7XHJcblxyXG5cdCQoJyN0YWctaW5wdXQnKS5vbignZm9jdXMnLCBmdW5jdGlvbigpe1xyXG5cdFx0Zm9yY2VCYXIgPSB0cnVlO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcjdGFnLWlucHV0Jykub24oJ2JsdXInLCBmdW5jdGlvbigpe1xyXG5cdFx0Zm9yY2VCYXIgPSBmYWxzZTtcclxuXHRcdG1vdXNlbW92ZXIoKTtcclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIl19
