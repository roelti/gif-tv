function launchFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function assign_bootstrap_mode(){width=$(window).innerWidth();var e="";width<768?e="mode-xs":width<992?e="mode-sm":width<1200?e="mode-md":width>1200&&(e="mode-lg"),"mode-xs"==e&&window.location.replace("/m")}function mousemover(e){$("body").addClass("show-tag"),null!==runningTimeout&&(clearTimeout(runningTimeout),runningTimeout=null),runningTimeout=setTimeout(function(){$("body").removeClass("show-tag"),runningTimeout=null},5e3)}function applyClass(e){$("body").removeClass("show-tag"),$("body").unbind("mousemove"),runningTimeout=setTimeout(function(){$("body").bind("mousemove",mousemover)},1e3)}function cycle(){render(term)}function render(e){var n="http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";e&&(e+="&tag="+encodeURIComponent(e)),$.getJSON(n,function(e){var n=e.data.image_url;"10"==$(".image_1").css("z-index")?($(".image_1").css("z-index","-1"),$(".image_2").css("z-index","10"),background_image_1=n,$(".image_1").attr("src",n),$("body").css("background-image","url("+background_image_2+")")):($(".image_2").css("z-index","-1"),$(".image_1").css("z-index","10"),background_image_2=n,$(".image_2").attr("src",n),$("body").css("background-image","url("+background_image_1+")"))})}function customTag(e){applyClass(),term=e,""==term?(document.title="Random GIFs",$(".keywordmode").removeClass("active"),$(".change-button").removeClass("active"),$(".randommode").addClass("active"),$(".input_controls").addClass("hidden"),$("body").find(".popup").addClass("hidden")):(document.title=" Now playing: "+term+" GIFs",$(".randommode").removeClass("active"),$(".change-button").addClass("active"),$(".keywordmode").addClass("active"),$("body").find(".popup").addClass("hidden")),render(term)}var fullscreen=!1,runningTimeout=null,background_image_1="",background_image_2="",title="",term="";setInterval(cycle,1e4),$(document).ready(function(){render(term),assign_bootstrap_mode(),$(".fullscreen-button").click(function(e){0==fullscreen?(launchFullscreen(document.documentElement),$(".fa-expand").removeClass("fa-expand").addClass("fa-compress"),fullscreen=!0):(exitFullscreen(document.documentElement),fullscreen=!1,$(".fa-compress").removeClass("fa-compress").addClass("fa-expand"))}),$("body").mousemove(mousemover),$(".mo-closebtn").on("click",function(){$("body").find(".popup").addClass("hidden")}),$(".infopopup-button").on("click",function(){$("body").find(".popup").removeClass("hidden")}),$(".keywordmode").click(function(e){$(".input_controls").removeClass("hidden"),$(".randommode").removeClass("active"),$(".keywordmode").addClass("active"),$("body").find(".popup").addClass("hidden")}),$(".change-button").click(function(e){customTag($("input").val())}),$("input").on("keydown",function(e){13==e.keyCode&&customTag($("input").val())}),$(".randommode").click(function(e){$("input").val(""),customTag("")}),$(".gif").click(cycle)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibGF1bmNoRnVsbHNjcmVlbiIsImVsZW1lbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJkb2N1bWVudCIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsImFzc2lnbl9ib290c3RyYXBfbW9kZSIsIndpZHRoIiwiJCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtb2RlIiwibG9jYXRpb24iLCJyZXBsYWNlIiwibW91c2Vtb3ZlciIsImUiLCJhZGRDbGFzcyIsInJ1bm5pbmdUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlbW92ZUNsYXNzIiwiYXBwbHlDbGFzcyIsInVuYmluZCIsImJpbmQiLCJjeWNsZSIsInJlbmRlciIsInRlcm0iLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRKU09OIiwiZGF0YSIsImltZ1VybCIsImltYWdlX3VybCIsImNzcyIsImJhY2tncm91bmRfaW1hZ2VfMSIsImF0dHIiLCJiYWNrZ3JvdW5kX2ltYWdlXzIiLCJjdXN0b21UYWciLCJrZXl3b3JkIiwidGl0bGUiLCJmaW5kIiwiZnVsbHNjcmVlbiIsInNldEludGVydmFsIiwicmVhZHkiLCJjbGljayIsImRvY3VtZW50RWxlbWVudCIsIm1vdXNlbW92ZSIsIm9uIiwidmFsIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IkFBRUEsUUFBQUEsa0JBQUFDLEdBQ0FBLEVBQUFDLGtCQUNBRCxFQUFBQyxvQkFDQUQsRUFBQUUscUJBQ0FGLEVBQUFFLHVCQUNBRixFQUFBRyx3QkFDQUgsRUFBQUcsMEJBQ0FILEVBQUFJLHFCQUNBSixFQUFBSSxzQkFJQSxRQUFBQyxrQkFDQUMsU0FBQUQsZUFDQUMsU0FBQUQsaUJBQ0FDLFNBQUFDLG9C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WSxZQUFBLFVBQ0FaLEVBQUEsZ0JBQUFRLFNBQUEsVUFDQVIsRUFBQSxRQUFBZ0MsS0FBQSxVQUFBeEIsU0FBQSxZQUdBUixFQUFBLGtCQUFBb0MsTUFBQSxTQUFBN0IsR0FDQXNCLFVBQUE3QixFQUFBLFNBQUF3QyxTQUlBeEMsRUFBQSxTQUFBdUMsR0FBQSxVQUFBLFNBQUFoQyxHQUNBLElBQUFBLEVBQUFrQyxTQUNBWixVQUFBN0IsRUFBQSxTQUFBd0MsU0FLQXhDLEVBQUEsZUFBQW9DLE1BQUEsU0FBQTdCLEdBQ0FQLEVBQUEsU0FBQXdDLElBQUEsSUFDQVgsVUFBQSxNQUdBN0IsRUFBQSxRQUFBb0MsTUFBQXBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnVsbHNjcmVlbiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBsYXVuY2hGdWxsc2NyZWVuKGVsZW1lbnQpIHtcbiAgaWYoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgfSBlbHNlIGlmKGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH0gZWxzZSBpZihlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICB9IGVsc2UgaWYoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4oKSB7XG4gIGlmKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgfSBlbHNlIGlmKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gIH0gZWxzZSBpZihkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduX2Jvb3RzdHJhcF9tb2RlKCkge1xuICAgIHdpZHRoID0gJCggd2luZG93ICkuaW5uZXJXaWR0aCgpO1xuICAgIHZhciBtb2RlID0gJyc7XG4gICAgaWYgKHdpZHRoPDc2OCkge1xuICAgICAgICBtb2RlID0gXCJtb2RlLXhzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpZHRoPDk5Mikge1xuICAgICAgICBtb2RlID0gXCJtb2RlLXNtXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpZHRoPDEyMDApIHtcbiAgICAgICAgbW9kZSA9IFwibW9kZS1tZFwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aWR0aD4xMjAwKSB7XG4gICAgICAgIG1vZGUgPSBcIm1vZGUtbGdcIjtcbiAgICB9XG4gICAgaWYgKG1vZGUgPT0gJ21vZGUteHMnKXtcbiAgICBcdHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL21cIik7IFxuICAgIH1cbn1cblxuLy8gU2hvdyBiYXIgd2hlbiBtb3VzZSBtb3Zlc1xuZnVuY3Rpb24gbW91c2Vtb3ZlcihlKXtcblx0JCgnYm9keScpLmFkZENsYXNzKCdzaG93LXRhZycpO1xuXHRpZihydW5uaW5nVGltZW91dCE9PW51bGwpe1xuXHRcdGNsZWFyVGltZW91dChydW5uaW5nVGltZW91dCk7XG5cdFx0cnVubmluZ1RpbWVvdXQ9bnVsbDtcblx0fVxuXG5cdHJ1bm5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGFnJyk7XG5cdFx0cnVubmluZ1RpbWVvdXQgPSBudWxsO1xuXHR9LCA1MDAwKTtcbn1cbnZhciBydW5uaW5nVGltZW91dCA9IG51bGw7XG5cbmZ1bmN0aW9uIGFwcGx5Q2xhc3MoZSl7XG5cdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2hvdy10YWcnKTtcblx0JCgnYm9keScpLnVuYmluZCgnbW91c2Vtb3ZlJyk7XG5cdHJ1bm5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdCQoJ2JvZHknKS5iaW5kKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmVyKTtcblx0fSwgMTAwMCk7XG59XG5cbnZhciBiYWNrZ3JvdW5kX2ltYWdlXzEgPSBcIlwiO1x0XG52YXIgYmFja2dyb3VuZF9pbWFnZV8yID0gXCJcIjtcbnZhciB0aXRsZSA9ICcnO1xudmFyIHRlcm0gPSAnJztcblxuLy8gU2V0IGN5Y2xlIHRvIHN3aXRjaCBpbWFnZXNcbmZ1bmN0aW9uIGN5Y2xlKCl7IFxuXHRyZW5kZXIodGVybSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcih0ZXJtKXtcblx0dmFyIHVybCA9IFwiaHR0cDovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9yYW5kb20/YXBpX2tleT1kYzZ6YVRPeEZKbXpDXCI7XG5cblx0aWYodGVybSl7XG5cdFx0dGVybSArPSBcIiZ0YWc9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGVybSk7XG5cdH1cblxuXHQkLmdldEpTT04odXJsLCBmdW5jdGlvbihkYXRhKXtcblx0XHR2YXIgaW1nVXJsID0gZGF0YS5kYXRhLmltYWdlX3VybDtcblxuXHRcdGlmKCQoJy5pbWFnZV8xJykuY3NzKFwiei1pbmRleFwiKSA9PSBcIjEwXCIpIHtcblx0XHRcdCQoJy5pbWFnZV8xJykuY3NzKFwiei1pbmRleFwiLCBcIi0xXCIpOyBcblx0XHRcdCQoJy5pbWFnZV8yJykuY3NzKFwiei1pbmRleFwiLCBcIjEwXCIpO1xuXHRcdFx0YmFja2dyb3VuZF9pbWFnZV8xID0gaW1nVXJsO1xuXHRcdFx0JCgnLmltYWdlXzEnKS5hdHRyKFwic3JjXCIsaW1nVXJsKTtcblx0XHRcdCQoJ2JvZHknKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIgKyBiYWNrZ3JvdW5kX2ltYWdlXzIgKyBcIilcIik7XG5cdFx0fSBlbHNlIHtcdFxuXHRcdFx0JCgnLmltYWdlXzInKS5jc3MoXCJ6LWluZGV4XCIsIFwiLTFcIik7IFxuXHRcdFx0JCgnLmltYWdlXzEnKS5jc3MoXCJ6LWluZGV4XCIsIFwiMTBcIik7XG4gIFx0XHRcdGJhY2tncm91bmRfaW1hZ2VfMiA9IGltZ1VybFxuICAgIFx0XHQkKCcuaW1hZ2VfMicpLmF0dHIoXCJzcmNcIixpbWdVcmwpO1xuXHQgICAgXHQkKCdib2R5JykuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLFwidXJsKFwiICsgYmFja2dyb3VuZF9pbWFnZV8xICsgXCIpXCIpOyBcblx0XHR9XG5cblx0fSk7XG59XG5cbi8vRnVuY3Rpb24gdG8gYXBwbHkgY3VzdG9tIHRhZ1xuZnVuY3Rpb24gY3VzdG9tVGFnKGtleXdvcmQpe1xuXHRhcHBseUNsYXNzKCk7XG5cdHRlcm0gPSBrZXl3b3JkO1xuXHRpZiAodGVybSA9PSAnJyl7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSAnUmFuZG9tIEdJRnMnO1xuXHRcdCQoXCIua2V5d29yZG1vZGVcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoXCIuY2hhbmdlLWJ1dHRvblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JChcIi5yYW5kb21tb2RlXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQkKFwiLmlucHV0X2NvbnRyb2xzXCIpLmFkZENsYXNzKCdoaWRkZW4nKTtcblx0XHQkKCdib2R5JykuZmluZCgnLnBvcHVwJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gJyBOb3cgcGxheWluZzogJyArIHRlcm0gKyAnIEdJRnMnO1xuXHRcdCQoXCIucmFuZG9tbW9kZVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JChcIi5jaGFuZ2UtYnV0dG9uXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQkKFwiLmtleXdvcmRtb2RlXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHQkKCdib2R5JykuZmluZCgnLnBvcHVwJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHR9XG5cblx0cmVuZGVyKHRlcm0pO1xufVxuXG4vLyBTZXQgaW50ZXJ2YWwgdG8gMTBzXG5zZXRJbnRlcnZhbChjeWNsZSwgMTAwMDApO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cdHJlbmRlcih0ZXJtKTtcblx0YXNzaWduX2Jvb3RzdHJhcF9tb2RlKCk7XG5cblx0Ly8gU2V0IGZ1bGxzY3JlZW4gYnV0dG9uXG5cdCQoXCIuZnVsbHNjcmVlbi1idXR0b25cIikuY2xpY2soZnVuY3Rpb24oZWxlbWVudCl7XG5cdFx0aWYgKGZ1bGxzY3JlZW4gPT0gZmFsc2Upe1xuXHRcdFx0bGF1bmNoRnVsbHNjcmVlbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXHRcdFx0JCgnLmZhLWV4cGFuZCcpLnJlbW92ZUNsYXNzKCdmYS1leHBhbmQnKS5hZGRDbGFzcygnZmEtY29tcHJlc3MnKTtcblx0XHRcdGZ1bGxzY3JlZW4gPSB0cnVlO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0ZXhpdEZ1bGxzY3JlZW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0XHRcdGZ1bGxzY3JlZW4gPSBmYWxzZTtcblx0XHRcdCQoJy5mYS1jb21wcmVzcycpLnJlbW92ZUNsYXNzKCdmYS1jb21wcmVzcycpLmFkZENsYXNzKCdmYS1leHBhbmQnKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoIFwiYm9keVwiICkubW91c2Vtb3ZlKG1vdXNlbW92ZXIpO1xuXG5cdCQoJy5tby1jbG9zZWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICBcdFx0JCgnYm9keScpLmZpbmQoJy5wb3B1cCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgIFx0fSk7XG5cblx0JCgnLmluZm9wb3B1cC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgXHRcdCQoJ2JvZHknKS5maW5kKCcucG9wdXAnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICBcdH0pO1xuXG5cdC8vQnV0dG9uIHRvIGFwcGx5IGN1c3RvbSB0YWdcblx0JChcIi5rZXl3b3JkbW9kZVwiKS5jbGljayhmdW5jdGlvbihlKXtcblx0XHQkKFwiLmlucHV0X2NvbnRyb2xzXCIpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcblx0XHQkKFwiLnJhbmRvbW1vZGVcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoXCIua2V5d29yZG1vZGVcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoJ2JvZHknKS5maW5kKCcucG9wdXAnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdH0pO1xuXG5cdCQoXCIuY2hhbmdlLWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbihlKXtcblx0XHRjdXN0b21UYWcoJChcImlucHV0XCIpLnZhbCgpKTtcdFxuXHR9KTtcblxuXHQvL0VudGVyIGJ1dHRvbiB0byBhcHBseSBjdXN0b20gdGFnXG5cdCQoJ2lucHV0Jykub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKXtcblx0XHRpZiAoZS5rZXlDb2RlID09IDEzKXtcblx0XHRcdGN1c3RvbVRhZygkKFwiaW5wdXRcIikudmFsKCkpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gQmFjayB0byByYW5kb20gR0lGJ3Ncblx0JChcIi5yYW5kb21tb2RlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdCQoXCJpbnB1dFwiKS52YWwoJycpO1xuXHRcdGN1c3RvbVRhZygnJyk7XG5cdH0pO1xuXHRcblx0JCgnLmdpZicpLmNsaWNrKGN5Y2xlKTtcblxufSk7XG5cblxuXG5cbiJdfQ==
