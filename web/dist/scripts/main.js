function launchFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function assign_bootstrap_mode(){width=$(window).innerWidth();var e="";width<768?e="mode-xs":width<992?e="mode-sm":width<1200?e="mode-md":width>1200&&(e="mode-lg"),"mode-xs"==e&&window.location.replace("/m")}function mousemover(e){barSuppressed||($("body").addClass("show-tag"),null!==runningTimeout&&(clearTimeout(runningTimeout),runningTimeout=null),forceBar||(runningTimeout=setTimeout(function(){$("body").removeClass("show-tag"),runningTimeout=null},5e3)))}function supressBar(e){$("body").removeClass("show-tag"),barSuppressed=!0,runningTimeout=setTimeout(function(){barSuppressed=!1},1e3)}function cycle(){render(term)}function render(e){var n="https://api.tenor.co/v1/trending?key=LIVDSRZULELA&pos="+pos;19==counter&&(counter=0,console.log("counter reset")),console.log(pos,n),e&&(n="https://api.tenor.co/v1/search?tag="+encodeURIComponent(e)+"&key=LIVDSRZULELA"+pos),$.getJSON(n,function(e){var n=e.results[counter].media[0].gif.url;console.log(e,counter),n=n.replace("http://","https://"),"10"==$(".image_1").css("z-index")?($(".image_1").css("z-index","-1"),$(".image_2").css("z-index","10"),background_image_1=n,$(".image_1").attr("src",n),$("body").css("background-image","url("+background_image_2+")")):($(".image_2").css("z-index","-1"),$(".image_1").css("z-index","10"),background_image_2=n,$(".image_2").attr("src",n),$("body").css("background-image","url("+background_image_1+")")),18==counter&&(pos=e.next,console.log(pos))}),counter++}function customTag(e){supressBar(),term=e,""==term?(document.title="Random GIFs",$(".keywordmode").removeClass("active"),$(".change-button").removeClass("active"),$(".randommode").addClass("active"),$(".input_controls").addClass("hidden"),$("body").find(".popup").addClass("hidden")):(document.title=" Now playing: "+term+" GIFs",$(".randommode").removeClass("active"),$(".change-button").addClass("active"),$(".keywordmode").addClass("active"),$("body").find(".popup").addClass("hidden")),render(term)}var fullscreen=!1,runningTimeout=null,forceBar=!1,barSuppressed=!1,background_image_1="",background_image_2="",title="",term="",counter=0,pos="";setInterval(cycle,1e4),$(document).ready(function(){render(term),render(term),assign_bootstrap_mode(),$(".fullscreen-button").click(function(e){0==fullscreen?(launchFullscreen(document.documentElement),$(".fa-expand").removeClass("fa-expand").addClass("fa-compress"),fullscreen=!0):(exitFullscreen(document.documentElement),fullscreen=!1,$(".fa-compress").removeClass("fa-compress").addClass("fa-expand"))}),$("body").mousemove(mousemover),$("#tag-input").keypress(mousemover),$(".mo-closebtn").on("click",function(){$("body").find(".popup").addClass("hidden")}),$(".infopopup-button").on("click",function(){$("body").find(".popup").removeClass("hidden")}),$(".keywordmode").click(function(e){$(".input_controls").removeClass("hidden"),$(".randommode").removeClass("active"),$(".keywordmode").addClass("active"),$("body").find(".popup").addClass("hidden")}),$(".change-button").click(function(e){customTag($("input").val())}),$("input").on("keydown",function(e){13==e.keyCode&&customTag($("input").val())}),$(".randommode").click(function(e){$("input").val(""),customTag("")}),$(".gif").click(cycle),$("#tag-input").on("focus",function(){forceBar=!0}),$("#tag-input").on("blur",function(){forceBar=!1,mousemover()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibGF1bmNoRnVsbHNjcmVlbiIsImVsZW1lbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJkb2N1bWVudCIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsImFzc2lnbl9ib290c3RyYXBfbW9kZSIsIndpZHRoIiwiJCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtb2RlIiwibG9jYXRpb24iLCJyZXBsYWNlIiwibW91c2Vtb3ZlciIsImUiLCJiYXJTdXBwcmVzc2VkIiwiYWRkQ2xhc3MiLCJydW5uaW5nVGltZW91dCIsImNsZWFyVGltZW91dCIsImZvcmNlQmFyIiwic2V0VGltZW91dCIsInJlbW92ZUNsYXNzIiwic3VwcmVzc0JhciIsImN5Y2xlIiwicmVuZGVyIiwidGVybSIsInVybCIsInBvcyIsImNvdW50ZXIiLCJjb25zb2xlIiwibG9nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0SlNPTiIsImRhdGEiLCJpbWdVcmwiLCJyZXN1bHRzIiwibWVkaWEiLCJnaWYiLCJjc3MiLCJiYWNrZ3JvdW5kX2ltYWdlXzEiLCJhdHRyIiwiYmFja2dyb3VuZF9pbWFnZV8yIiwibmV4dCIsImN1c3RvbVRhZyIsImtleXdvcmQiLCJ0aXRsZSIsImZpbmQiLCJmdWxsc2NyZWVuIiwic2V0SW50ZXJ2YWwiLCJyZWFkeSIsImNsaWNrIiwiZG9jdW1lbnRFbGVtZW50IiwibW91c2Vtb3ZlIiwia2V5cHJlc3MiLCJvbiIsInZhbCIsImtleUNvZGUiXSwibWFwcGluZ3MiOiJBQUVBLFFBQUFBLGtCQUFBQyxHQUNBQSxFQUFBQyxrQkFDQUQsRUFBQUMsb0JBQ0FELEVBQUFFLHFCQUNBRixFQUFBRSx1QkFDQUYsRUFBQUcsd0JBQ0FILEVBQUFHLDBCQUNB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QUFBLGNBQUFjLFlBQUEsYUFBQUwsU0FBQSxlQUNBK0IsWUFBQSxJQUdBOUMsZUFBQUMsU0FBQWlELGlCQUNBSixZQUFBLEVBQ0F4QyxFQUFBLGdCQUFBYyxZQUFBLGVBQUFMLFNBQUEsZ0JBSUFULEVBQUEsUUFBQTZDLFVBQUF2QyxZQUNBTixFQUFBLGNBQUE4QyxTQUFBeEMsWUFFQU4sRUFBQSxnQkFBQStDLEdBQUEsUUFBQSxXQUNBL0MsRUFBQSxRQUFBdUMsS0FBQSxVQUFBOUIsU0FBQSxZQUdBVCxFQUFBLHFCQUFBK0MsR0FBQSxRQUFBLFdBQ0EvQyxFQUFBLFFBQUF1QyxLQUFBLFVBQUF6QixZQUFBLFlBSUFkLEVBQUEsZ0JBQUEyQyxNQUFBLFNBQUFwQyxHQUNBUCxFQUFBLG1CQUFBYyxZQUFBLFVBQ0FkLEVBQUEsZUFBQWMsWUFBQSxVQUNBZCxFQUFBLGdCQUFBUyxTQUFBLFVBQ0FULEVBQUEsUUFBQXVDLEtBQUEsVUFBQTlCLFNBQUEsWUFHQVQsRUFBQSxrQkFBQTJDLE1BQUEsU0FBQXBDLEdBQ0E2QixVQUFBcEMsRUFBQSxTQUFBZ0QsU0FJQWhELEVBQUEsU0FBQStDLEdBQUEsVUFBQSxTQUFBeEMsR0FDQSxJQUFBQSxFQUFBMEMsU0FDQWIsVUFBQXBDLEVBQUEsU0FBQWdELFNBS0FoRCxFQUFBLGVBQUEyQyxNQUFBLFNBQUFwQyxHQUNBUCxFQUFBLFNBQUFnRCxJQUFBLElBQ0FaLFVBQUEsTUFHQXBDLEVBQUEsUUFBQTJDLE1BQUEzQixPQUVBaEIsRUFBQSxjQUFBK0MsR0FBQSxRQUFBLFdBQ0FuQyxVQUFBLElBR0FaLEVBQUEsY0FBQStDLEdBQUEsT0FBQSxXQUNBbkMsVUFBQSxFQUNBTiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZ1bGxzY3JlZW4gPSBmYWxzZTtcblxuZnVuY3Rpb24gbGF1bmNoRnVsbHNjcmVlbihlbGVtZW50KSB7XG4gIGlmKGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gIH0gZWxzZSBpZihlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9IGVsc2UgaWYoZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgfSBlbHNlIGlmKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuKCkge1xuICBpZihkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gIH0gZWxzZSBpZihkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICB9IGVsc2UgaWYoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbl9ib290c3RyYXBfbW9kZSgpIHtcbiAgICB3aWR0aCA9ICQoIHdpbmRvdyApLmlubmVyV2lkdGgoKTtcbiAgICB2YXIgbW9kZSA9ICcnO1xuICAgIGlmICh3aWR0aDw3NjgpIHtcbiAgICAgICAgbW9kZSA9IFwibW9kZS14c1wiO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aWR0aDw5OTIpIHtcbiAgICAgICAgbW9kZSA9IFwibW9kZS1zbVwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aWR0aDwxMjAwKSB7XG4gICAgICAgIG1vZGUgPSBcIm1vZGUtbWRcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAod2lkdGg+MTIwMCkge1xuICAgICAgICBtb2RlID0gXCJtb2RlLWxnXCI7XG4gICAgfVxuICAgIGlmIChtb2RlID09ICdtb2RlLXhzJyl7XG4gICAgXHR3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9tXCIpOyBcbiAgICB9XG59XG5cbi8vIFNob3cgYmFyIHdoZW4gbW91c2UgbW92ZXNcbmZ1bmN0aW9uIG1vdXNlbW92ZXIoZSl7XG5cdGlmKGJhclN1cHByZXNzZWQpe1xuXHRcdHJldHVybjtcblx0fVxuXHQkKCdib2R5JykuYWRkQ2xhc3MoJ3Nob3ctdGFnJyk7XG5cdGlmKHJ1bm5pbmdUaW1lb3V0IT09bnVsbCl7XG5cdFx0Y2xlYXJUaW1lb3V0KHJ1bm5pbmdUaW1lb3V0KTtcblx0XHRydW5uaW5nVGltZW91dD1udWxsO1xuXHR9XG5cdGlmICghZm9yY2VCYXIpIHtcblx0XHRydW5uaW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG5cdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGFnJyk7XG5cdFx0XHRydW5uaW5nVGltZW91dCA9IG51bGw7XG5cdFx0fSwgNTAwMCk7XG5cdH1cbn1cbnZhciBydW5uaW5nVGltZW91dCA9IG51bGw7XG5cbnZhciBmb3JjZUJhciA9IGZhbHNlO1xudmFyIGJhclN1cHByZXNzZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc3VwcmVzc0JhcihlKXtcblx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaG93LXRhZycpO1xuXHRiYXJTdXBwcmVzc2VkID0gdHJ1ZTtcblx0cnVubmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0YmFyU3VwcHJlc3NlZCA9IGZhbHNlO1xuXHR9LCAxMDAwKTtcbn1cblxudmFyIGJhY2tncm91bmRfaW1hZ2VfMSA9IFwiXCI7XHRcbnZhciBiYWNrZ3JvdW5kX2ltYWdlXzIgPSBcIlwiO1xudmFyIHRpdGxlID0gJyc7XG52YXIgdGVybSA9ICcnO1xuXG4vLyBTZXQgY3ljbGUgdG8gc3dpdGNoIGltYWdlc1xuZnVuY3Rpb24gY3ljbGUoKXsgXG5cdHJlbmRlcih0ZXJtKTtcbn1cblxudmFyIGNvdW50ZXIgPSAwO1xudmFyIHBvcyA9ICcnO1xuZnVuY3Rpb24gcmVuZGVyKHRlcm0pe1xuXHR2YXIgdXJsID0gXCJodHRwczovL2FwaS50ZW5vci5jby92MS90cmVuZGluZz9rZXk9TElWRFNSWlVMRUxBJnBvcz1cIiArIHBvcztcblx0aWYgKGNvdW50ZXIgPT0gMTkpe1xuXHRcdGNvdW50ZXIgPSAwO1xuXHRcdGNvbnNvbGUubG9nKCdjb3VudGVyIHJlc2V0Jyk7XG5cdH1cblx0XG5cdGNvbnNvbGUubG9nKHBvcywgdXJsKTtcblxuXHRpZih0ZXJtKXtcblx0XHR1cmwgPSAnaHR0cHM6Ly9hcGkudGVub3IuY28vdjEvc2VhcmNoP3RhZz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRlcm0pICsgJyZrZXk9TElWRFNSWlVMRUxBJyArIHBvcztcblx0fVxuXG5cdCQuZ2V0SlNPTih1cmwsIGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFxuXHRcdHZhciBpbWdVcmwgPSBkYXRhLnJlc3VsdHNbY291bnRlcl0ubWVkaWFbMF0uZ2lmLnVybDtcblxuXHRcdGNvbnNvbGUubG9nKGRhdGEsIGNvdW50ZXIpO1xuXHRcdGltZ1VybCA9IGltZ1VybC5yZXBsYWNlKCdodHRwOi8vJywgJ2h0dHBzOi8vJyk7XG5cdFx0aWYoJCgnLmltYWdlXzEnKS5jc3MoXCJ6LWluZGV4XCIpID09IFwiMTBcIikge1xuXHRcdFx0JCgnLmltYWdlXzEnKS5jc3MoXCJ6LWluZGV4XCIsIFwiLTFcIik7IFxuXHRcdFx0JCgnLmltYWdlXzInKS5jc3MoXCJ6LWluZGV4XCIsIFwiMTBcIik7XG5cdFx0XHRiYWNrZ3JvdW5kX2ltYWdlXzEgPSBpbWdVcmw7XG5cdFx0XHQkKCcuaW1hZ2VfMScpLmF0dHIoXCJzcmNcIixpbWdVcmwpO1xuXHRcdFx0JCgnYm9keScpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIixcInVybChcIiArIGJhY2tncm91bmRfaW1hZ2VfMiArIFwiKVwiKTtcblx0XHR9IGVsc2Uge1x0XG5cdFx0XHQkKCcuaW1hZ2VfMicpLmNzcyhcInotaW5kZXhcIiwgXCItMVwiKTsgXG5cdFx0XHQkKCcuaW1hZ2VfMScpLmNzcyhcInotaW5kZXhcIiwgXCIxMFwiKTtcbiAgXHRcdFx0YmFja2dyb3VuZF9pbWFnZV8yID0gaW1nVXJsXG4gICAgXHRcdCQoJy5pbWFnZV8yJykuYXR0cihcInNyY1wiLGltZ1VybCk7XG5cdCAgICBcdCQoJ2JvZHknKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIgKyBiYWNrZ3JvdW5kX2ltYWdlXzEgKyBcIilcIik7IFxuXHRcdH1cblx0XHRpZiAoY291bnRlciA9PSAxOCkge1xuXHRcdFx0cG9zID0gZGF0YS5uZXh0O1xuXHRcdFx0Y29uc29sZS5sb2cocG9zKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNvdW50ZXIrKzsgXG59XG5cbi8vRnVuY3Rpb24gdG8gYXBwbHkgY3VzdG9tIHRhZ1xuZnVuY3Rpb24gY3VzdG9tVGFnKGtleXdvcmQpe1xuXHRzdXByZXNzQmFyKCk7XG5cdHRlcm0gPSBrZXl3b3JkO1xuXHRpZiAodGVybSA9PSAnJyl7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSAnUmFuZG9tIEdJRnMnO1xuXHRcdCQoXCIua2V5d29yZG1vZGVcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoXCIuY2hhbmdlLWJ1dHRvblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JChcIi5yYW5kb21tb2RlXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQkKFwiLmlucHV0X2NvbnRyb2xzXCIpLmFkZENsYXNzKCdoaWRkZW4nKTtcblx0XHQkKCdib2R5JykuZmluZCgnLnBvcHVwJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gJyBOb3cgcGxheWluZzogJyArIHRlcm0gKyAnIEdJRnMnO1xuXHRcdCQoXCIucmFuZG9tbW9kZVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JChcIi5jaGFuZ2UtYnV0dG9uXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQkKFwiLmtleXdvcmRtb2RlXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQkKCdib2R5JykuZmluZCgnLnBvcHVwJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHR9XG5cblx0cmVuZGVyKHRlcm0pO1xufVxuXG4vLyBTZXQgaW50ZXJ2YWwgdG8gMTBzXG5zZXRJbnRlcnZhbChjeWNsZSwgMTAwMDApO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cdHJlbmRlcih0ZXJtKTtcblx0cmVuZGVyKHRlcm0pO1xuXG5cdGFzc2lnbl9ib290c3RyYXBfbW9kZSgpO1xuXG5cdC8vIFNldCBmdWxsc2NyZWVuIGJ1dHRvblxuXHQkKFwiLmZ1bGxzY3JlZW4tYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKGVsZW1lbnQpe1xuXHRcdGlmIChmdWxsc2NyZWVuID09IGZhbHNlKXtcblx0XHRcdGxhdW5jaEZ1bGxzY3JlZW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0XHRcdCQoJy5mYS1leHBhbmQnKS5yZW1vdmVDbGFzcygnZmEtZXhwYW5kJykuYWRkQ2xhc3MoJ2ZhLWNvbXByZXNzJyk7XG5cdFx0XHRmdWxsc2NyZWVuID0gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGV4aXRGdWxsc2NyZWVuKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cdFx0XHRmdWxsc2NyZWVuID0gZmFsc2U7XG5cdFx0XHQkKCcuZmEtY29tcHJlc3MnKS5yZW1vdmVDbGFzcygnZmEtY29tcHJlc3MnKS5hZGRDbGFzcygnZmEtZXhwYW5kJyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKCBcImJvZHlcIiApLm1vdXNlbW92ZShtb3VzZW1vdmVyKTtcblx0JCgnI3RhZy1pbnB1dCcpLmtleXByZXNzKG1vdXNlbW92ZXIpO1xuXG5cdCQoJy5tby1jbG9zZWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICBcdFx0JCgnYm9keScpLmZpbmQoJy5wb3B1cCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgIFx0fSk7XG5cblx0JCgnLmluZm9wb3B1cC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgXHRcdCQoJ2JvZHknKS5maW5kKCcucG9wdXAnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICBcdH0pO1xuXG5cdC8vQnV0dG9uIHRvIGFwcGx5IGN1c3RvbSB0YWdcblx0JChcIi5rZXl3b3JkbW9kZVwiKS5jbGljayhmdW5jdGlvbihlKXtcblx0XHQkKFwiLmlucHV0X2NvbnRyb2xzXCIpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcblx0XHQkKFwiLnJhbmRvbW1vZGVcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoXCIua2V5d29yZG1vZGVcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoJ2JvZHknKS5maW5kKCcucG9wdXAnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdH0pO1xuXG5cdCQoXCIuY2hhbmdlLWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbihlKXtcblx0XHRjdXN0b21UYWcoJChcImlucHV0XCIpLnZhbCgpKTtcdFxuXHR9KTtcblxuXHQvL0VudGVyIGJ1dHRvbiB0byBhcHBseSBjdXN0b20gdGFnXG5cdCQoJ2lucHV0Jykub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKXtcblx0XHRpZiAoZS5rZXlDb2RlID09IDEzKXtcblx0XHRcdGN1c3RvbVRhZygkKFwiaW5wdXRcIikudmFsKCkpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gQmFjayB0byByYW5kb20gR0lGJ3Ncblx0JChcIi5yYW5kb21tb2RlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdCQoXCJpbnB1dFwiKS52YWwoJycpO1xuXHRcdGN1c3RvbVRhZygnJyk7XG5cdH0pO1xuXHRcblx0JCgnLmdpZicpLmNsaWNrKGN5Y2xlKTtcblxuXHQkKCcjdGFnLWlucHV0Jykub24oJ2ZvY3VzJywgZnVuY3Rpb24oKXtcblx0XHRmb3JjZUJhciA9IHRydWU7XG5cdH0pO1xuXG5cdCQoJyN0YWctaW5wdXQnKS5vbignYmx1cicsIGZ1bmN0aW9uKCl7XG5cdFx0Zm9yY2VCYXIgPSBmYWxzZTtcblx0XHRtb3VzZW1vdmVyKCk7XG5cdH0pO1xuXG59KTtcblxuXG5cblxuIl19
