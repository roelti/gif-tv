function launchFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function assign_bootstrap_mode(){width=$(window).innerWidth();var e="";width<768?e="mode-xs":width<992?e="mode-sm":width<1200?e="mode-md":width>1200&&(e="mode-lg"),"mode-xs"==e&&window.location.replace("/m")}function mousemover(e){barSuppressed||($("body").addClass("show-tag"),null!==runningTimeout&&(clearTimeout(runningTimeout),runningTimeout=null),forceBar||(runningTimeout=setTimeout(function(){$("body").removeClass("show-tag"),runningTimeout=null},5e3)))}function supressBar(e){$("body").removeClass("show-tag"),barSuppressed=!0,runningTimeout=setTimeout(function(){barSuppressed=!1},1e3)}function cycle(){render(term)}function render(e){var n="https://api.tenor.co/v1/trending?key=LIVDSRZULELA&pos=&pos="+pos;19==counter&&(counter=0),e&&(n="https://api.tenor.co/v1/search?tag="+encodeURIComponent(e)+"&key=LIVDSRZULELA&pos="+pos,console.log(n)),$.getJSON(n,function(e){var n=e.results[counter].media[0].gif.url;console.log(e,counter),n=n.replace("http://","https://"),"10"==$(".image_1").css("z-index")?($(".image_1").css("z-index","-1"),$(".image_2").css("z-index","10"),background_image_1=n,$(".image_1").attr("src",n),$("body").css("background-image","url("+background_image_2+")")):($(".image_2").css("z-index","-1"),$(".image_1").css("z-index","10"),background_image_2=n,$(".image_2").attr("src",n),$("body").css("background-image","url("+background_image_1+")")),18==counter&&(pos=e.next)}),counter++}function customTag(e){supressBar(),term=e,""===term?(document.title="Random GIFs",$(".keywordmode").removeClass("active"),$(".change-button").removeClass("active"),$(".randommode").addClass("active"),$(".input_controls").addClass("hidden"),$("body").find(".popup").addClass("hidden")):(document.title=" Now playing: "+term+" GIFs",$(".randommode").removeClass("active"),$(".change-button").addClass("active"),$(".keywordmode").addClass("active"),$("body").find(".popup").addClass("hidden")),counter=0,render(term)}var fullscreen=!1,runningTimeout=null,forceBar=!1,barSuppressed=!1,background_image_1="",background_image_2="",title="",term="",counter=0,pos="";setInterval(cycle,1e4),$(document).ready(function(){render(term),render(term),assign_bootstrap_mode(),$(".fullscreen-button").click(function(e){fullscreen===!1?(launchFullscreen(document.documentElement),$(".fa-expand").removeClass("fa-expand").addClass("fa-compress"),fullscreen=!0):(exitFullscreen(document.documentElement),fullscreen=!1,$(".fa-compress").removeClass("fa-compress").addClass("fa-expand"))}),$("body").mousemove(mousemover),$("#tag-input").keypress(mousemover),$(".mo-closebtn").on("click",function(){$("body").find(".popup").addClass("hidden")}),$(".infopopup-button").on("click",function(){$("body").find(".popup").removeClass("hidden")}),$(".keywordmode").click(function(e){$(".input_controls").removeClass("hidden"),$(".randommode").removeClass("active"),$(".keywordmode").addClass("active"),$("body").find(".popup").addClass("hidden")}),$(".change-button").click(function(e){customTag($("input").val())}),$("input").on("keydown",function(e){13==e.keyCode&&customTag($("input").val())}),$(".randommode").click(function(e){$("input").val(""),customTag("")}),$(".gif").click(cycle),$("#tag-input").on("focus",function(){forceBar=!0}),$("#tag-input").on("blur",function(){forceBar=!1,mousemover()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibGF1bmNoRnVsbHNjcmVlbiIsImVsZW1lbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJkb2N1bWVudCIsIm1vekNhbmNlbEZ1bGxTY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsImFzc2lnbl9ib290c3RyYXBfbW9kZSIsIndpZHRoIiwiJCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtb2RlIiwibG9jYXRpb24iLCJyZXBsYWNlIiwibW91c2Vtb3ZlciIsImUiLCJiYXJTdXBwcmVzc2VkIiwiYWRkQ2xhc3MiLCJydW5uaW5nVGltZW91dCIsImNsZWFyVGltZW91dCIsImZvcmNlQmFyIiwic2V0VGltZW91dCIsInJlbW92ZUNsYXNzIiwic3VwcmVzc0JhciIsImN5Y2xlIiwicmVuZGVyIiwidGVybSIsInVybCIsInBvcyIsImNvdW50ZXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0SlNPTiIsImRhdGEiLCJpbWdVcmwiLCJyZXN1bHRzIiwibWVkaWEiLCJnaWYiLCJjc3MiLCJiYWNrZ3JvdW5kX2ltYWdlXzEiLCJhdHRyIiwiYmFja2dyb3VuZF9pbWFnZV8yIiwibmV4dCIsImN1c3RvbVRhZyIsImtleXdvcmQiLCJ0aXRsZSIsImZpbmQiLCJmdWxsc2NyZWVuIiwic2V0SW50ZXJ2YWwiLCJyZWFkeSIsImNsaWNrIiwiZG9jdW1lbnRFbGVtZW50IiwibW91c2Vtb3ZlIiwia2V5cHJlc3MiLCJvbiIsInZhbCIsImtleUNvZGUiXSwibWFwcGluZ3MiOiJBQUVBLFFBQUFBLGtCQUFBQyxHQUNBQSxFQUFBQyxrQkFDQUQsRUFBQUMsb0JBQ0FELEVBQUFFLHFCQUNBRixFQUFBRSx1QkFDQUYsRUFBQUcsd0JBQ0FILEVBQUFHLDBCQUNB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QixZQUFBLElBR0E5QyxlQUFBQyxTQUFBaUQsaUJBQ0FKLFlBQUEsRUFDQXhDLEVBQUEsZ0JBQUFjLFlBQUEsZUFBQUwsU0FBQSxnQkFJQVQsRUFBQSxRQUFBNkMsVUFBQXZDLFlBQ0FOLEVBQUEsY0FBQThDLFNBQUF4QyxZQUVBTixFQUFBLGdCQUFBK0MsR0FBQSxRQUFBLFdBQ0EvQyxFQUFBLFFBQUF1QyxLQUFBLFVBQUE5QixTQUFBLFlBR0FULEVBQUEscUJBQUErQyxHQUFBLFFBQUEsV0FDQS9DLEVBQUEsUUFBQXVDLEtBQUEsVUFBQXpCLFlBQUEsWUFJQWQsRUFBQSxnQkFBQTJDLE1BQUEsU0FBQXBDLEdBQ0FQLEVBQUEsbUJBQUFjLFlBQUEsVUFDQWQsRUFBQSxlQUFBYyxZQUFBLFVBQ0FkLEVBQUEsZ0JBQUFTLFNBQUEsVUFDQVQsRUFBQSxRQUFBdUMsS0FBQSxVQUFBOUIsU0FBQSxZQUdBVCxFQUFBLGtCQUFBMkMsTUFBQSxTQUFBcEMsR0FDQTZCLFVBQUFwQyxFQUFBLFNBQUFnRCxTQUlBaEQsRUFBQSxTQUFBK0MsR0FBQSxVQUFBLFNBQUF4QyxHQUNBLElBQUFBLEVBQUEwQyxTQUNBYixVQUFBcEMsRUFBQSxTQUFBZ0QsU0FLQWhELEVBQUEsZUFBQTJDLE1BQUEsU0FBQXBDLEdBQ0FQLEVBQUEsU0FBQWdELElBQUEsSUFDQVosVUFBQSxNQUdBcEMsRUFBQSxRQUFBMkMsTUFBQTNCLE9BRUFoQixFQUFBLGNBQUErQyxHQUFBLFFBQUEsV0FDQW5DLFVBQUEsSUFHQVosRUFBQSxjQUFBK0MsR0FBQSxPQUFBLFdBQ0FuQyxVQUFBLEVBQ0FOIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnVsbHNjcmVlbiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBsYXVuY2hGdWxsc2NyZWVuKGVsZW1lbnQpIHtcbiAgaWYoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgfSBlbHNlIGlmKGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH0gZWxzZSBpZihlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICB9IGVsc2UgaWYoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4oKSB7XG4gIGlmKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgfSBlbHNlIGlmKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gIH0gZWxzZSBpZihkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduX2Jvb3RzdHJhcF9tb2RlKCkge1xuICAgIHdpZHRoID0gJCggd2luZG93ICkuaW5uZXJXaWR0aCgpO1xuICAgIHZhciBtb2RlID0gJyc7XG4gICAgaWYgKHdpZHRoPDc2OCkge1xuICAgICAgICBtb2RlID0gXCJtb2RlLXhzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpZHRoPDk5Mikge1xuICAgICAgICBtb2RlID0gXCJtb2RlLXNtXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpZHRoPDEyMDApIHtcbiAgICAgICAgbW9kZSA9IFwibW9kZS1tZFwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aWR0aD4xMjAwKSB7XG4gICAgICAgIG1vZGUgPSBcIm1vZGUtbGdcIjtcbiAgICB9XG4gICAgaWYgKG1vZGUgPT0gJ21vZGUteHMnKXtcbiAgICBcdHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL21cIik7IFxuICAgIH1cbn1cblxuLy8gU2hvdyBiYXIgd2hlbiBtb3VzZSBtb3Zlc1xuZnVuY3Rpb24gbW91c2Vtb3ZlcihlKXtcblx0aWYoYmFyU3VwcHJlc3NlZCl7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCQoJ2JvZHknKS5hZGRDbGFzcygnc2hvdy10YWcnKTtcblx0aWYocnVubmluZ1RpbWVvdXQhPT1udWxsKXtcblx0XHRjbGVhclRpbWVvdXQocnVubmluZ1RpbWVvdXQpO1xuXHRcdHJ1bm5pbmdUaW1lb3V0PW51bGw7XG5cdH1cblx0aWYgKCFmb3JjZUJhcikge1xuXHRcdHJ1bm5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2hvdy10YWcnKTtcblx0XHRcdHJ1bm5pbmdUaW1lb3V0ID0gbnVsbDtcblx0XHR9LCA1MDAwKTtcblx0fVxufVxudmFyIHJ1bm5pbmdUaW1lb3V0ID0gbnVsbDtcblxudmFyIGZvcmNlQmFyID0gZmFsc2U7XG52YXIgYmFyU3VwcHJlc3NlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzdXByZXNzQmFyKGUpe1xuXHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Nob3ctdGFnJyk7XG5cdGJhclN1cHByZXNzZWQgPSB0cnVlO1xuXHRydW5uaW5nVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRiYXJTdXBwcmVzc2VkID0gZmFsc2U7XG5cdH0sIDEwMDApO1xufVxuXG52YXIgYmFja2dyb3VuZF9pbWFnZV8xID0gXCJcIjtcdFxudmFyIGJhY2tncm91bmRfaW1hZ2VfMiA9IFwiXCI7XG52YXIgdGl0bGUgPSAnJztcbnZhciB0ZXJtID0gJyc7XG5cbi8vIFNldCBjeWNsZSB0byBzd2l0Y2ggaW1hZ2VzXG5mdW5jdGlvbiBjeWNsZSgpeyBcblx0cmVuZGVyKHRlcm0pO1xufVxuXG52YXIgY291bnRlciA9IDA7XG52YXIgcG9zID0gJyc7XG5cbi8vVE9ETzogSWYgY291bnRlciA9IDAgZGFuIGdldEpTT04gZW4gY291bnRlciByZXNldHRlbiBiaWogdGVybSB6b2VrZW5cbmZ1bmN0aW9uIHJlbmRlcih0ZXJtKXtcblx0dmFyIHVybCA9ICdodHRwczovL2FwaS50ZW5vci5jby92MS90cmVuZGluZz9rZXk9TElWRFNSWlVMRUxBJnBvcz0nICsgJyZwb3M9JyArIHBvcztcblx0aWYgKGNvdW50ZXIgPT0gMTkpe1xuXHRcdGNvdW50ZXIgPSAwO1xuXHR9XG5cblx0aWYodGVybSl7XG5cdFx0dXJsID0gJ2h0dHBzOi8vYXBpLnRlbm9yLmNvL3YxL3NlYXJjaD90YWc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0ZXJtKSArICcma2V5PUxJVkRTUlpVTEVMQScgKyAnJnBvcz0nICsgcG9zO1xuXHRcdGNvbnNvbGUubG9nKHVybCk7XG5cdH1cblxuXHQkLmdldEpTT04odXJsLCBmdW5jdGlvbihkYXRhKXtcblx0XHRcblx0XHR2YXIgaW1nVXJsID0gZGF0YS5yZXN1bHRzW2NvdW50ZXJdLm1lZGlhWzBdLmdpZi51cmw7XG5cblx0XHRjb25zb2xlLmxvZyhkYXRhLCBjb3VudGVyKTtcblx0XHRpbWdVcmwgPSBpbWdVcmwucmVwbGFjZSgnaHR0cDovLycsICdodHRwczovLycpO1xuXHRcdGlmKCQoJy5pbWFnZV8xJykuY3NzKFwiei1pbmRleFwiKSA9PSBcIjEwXCIpIHtcblx0XHRcdCQoJy5pbWFnZV8xJykuY3NzKFwiei1pbmRleFwiLCBcIi0xXCIpOyBcblx0XHRcdCQoJy5pbWFnZV8yJykuY3NzKFwiei1pbmRleFwiLCBcIjEwXCIpO1xuXHRcdFx0YmFja2dyb3VuZF9pbWFnZV8xID0gaW1nVXJsO1xuXHRcdFx0JCgnLmltYWdlXzEnKS5hdHRyKFwic3JjXCIsaW1nVXJsKTtcblx0XHRcdCQoJ2JvZHknKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ1cmwoXCIgKyBiYWNrZ3JvdW5kX2ltYWdlXzIgKyBcIilcIik7XG5cdFx0fSBlbHNlIHtcdFxuXHRcdFx0JCgnLmltYWdlXzInKS5jc3MoXCJ6LWluZGV4XCIsIFwiLTFcIik7IFxuXHRcdFx0JCgnLmltYWdlXzEnKS5jc3MoXCJ6LWluZGV4XCIsIFwiMTBcIik7XG4gIFx0XHRcdGJhY2tncm91bmRfaW1hZ2VfMiA9IGltZ1VybDtcbiAgICBcdFx0JCgnLmltYWdlXzInKS5hdHRyKFwic3JjXCIsaW1nVXJsKTtcblx0ICAgIFx0JCgnYm9keScpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIixcInVybChcIiArIGJhY2tncm91bmRfaW1hZ2VfMSArIFwiKVwiKTsgXG5cdFx0fVxuXHRcdGlmIChjb3VudGVyID09IDE4KSB7XG5cdFx0XHRwb3MgPSBkYXRhLm5leHQ7XG5cdFx0fVxuXHR9KTtcblxuXHRjb3VudGVyKys7IFxufVxuXG4vL0Z1bmN0aW9uIHRvIGFwcGx5IGN1c3RvbSB0YWdcbmZ1bmN0aW9uIGN1c3RvbVRhZyhrZXl3b3JkKXtcblx0c3VwcmVzc0JhcigpO1xuXHR0ZXJtID0ga2V5d29yZDtcblx0aWYgKHRlcm0gPT09ICcnKXtcblx0XHRkb2N1bWVudC50aXRsZSA9ICdSYW5kb20gR0lGcyc7XG5cdFx0JChcIi5rZXl3b3JkbW9kZVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JChcIi5jaGFuZ2UtYnV0dG9uXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKFwiLnJhbmRvbW1vZGVcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoXCIuaW5wdXRfY29udHJvbHNcIikuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHRcdCQoJ2JvZHknKS5maW5kKCcucG9wdXAnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSAnIE5vdyBwbGF5aW5nOiAnICsgdGVybSArICcgR0lGcyc7XG5cdFx0JChcIi5yYW5kb21tb2RlXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKFwiLmNoYW5nZS1idXR0b25cIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoXCIua2V5d29yZG1vZGVcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQoJ2JvZHknKS5maW5kKCcucG9wdXAnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG5cdH1cblx0Y291bnRlciA9IDA7XG5cdHJlbmRlcih0ZXJtKTtcbn1cblxuLy8gU2V0IGludGVydmFsIHRvIDEwc1xuc2V0SW50ZXJ2YWwoY3ljbGUsIDEwMDAwKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuXHRyZW5kZXIodGVybSk7XG5cdHJlbmRlcih0ZXJtKTtcblxuXHRhc3NpZ25fYm9vdHN0cmFwX21vZGUoKTtcblxuXHQvLyBTZXQgZnVsbHNjcmVlbiBidXR0b25cblx0JChcIi5mdWxsc2NyZWVuLWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbihlbGVtZW50KXtcblx0XHRpZiAoZnVsbHNjcmVlbiA9PT0gZmFsc2Upe1xuXHRcdFx0bGF1bmNoRnVsbHNjcmVlbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXHRcdFx0JCgnLmZhLWV4cGFuZCcpLnJlbW92ZUNsYXNzKCdmYS1leHBhbmQnKS5hZGRDbGFzcygnZmEtY29tcHJlc3MnKTtcblx0XHRcdGZ1bGxzY3JlZW4gPSB0cnVlO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0ZXhpdEZ1bGxzY3JlZW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0XHRcdGZ1bGxzY3JlZW4gPSBmYWxzZTtcblx0XHRcdCQoJy5mYS1jb21wcmVzcycpLnJlbW92ZUNsYXNzKCdmYS1jb21wcmVzcycpLmFkZENsYXNzKCdmYS1leHBhbmQnKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoIFwiYm9keVwiICkubW91c2Vtb3ZlKG1vdXNlbW92ZXIpO1xuXHQkKCcjdGFnLWlucHV0Jykua2V5cHJlc3MobW91c2Vtb3Zlcik7XG5cblx0JCgnLm1vLWNsb3NlYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgIFx0XHQkKCdib2R5JykuZmluZCgnLnBvcHVwJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgXHR9KTtcblxuXHQkKCcuaW5mb3BvcHVwLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICBcdFx0JCgnYm9keScpLmZpbmQoJy5wb3B1cCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgIFx0fSk7XG5cblx0Ly9CdXR0b24gdG8gYXBwbHkgY3VzdG9tIHRhZ1xuXHQkKFwiLmtleXdvcmRtb2RlXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdCQoXCIuaW5wdXRfY29udHJvbHNcIikucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXHRcdCQoXCIucmFuZG9tbW9kZVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JChcIi5rZXl3b3JkbW9kZVwiKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnYm9keScpLmZpbmQoJy5wb3B1cCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcblx0fSk7XG5cblx0JChcIi5jaGFuZ2UtYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdGN1c3RvbVRhZygkKFwiaW5wdXRcIikudmFsKCkpO1x0XG5cdH0pO1xuXG5cdC8vRW50ZXIgYnV0dG9uIHRvIGFwcGx5IGN1c3RvbSB0YWdcblx0JCgnaW5wdXQnKS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe1xuXHRcdGlmIChlLmtleUNvZGUgPT0gMTMpe1xuXHRcdFx0Y3VzdG9tVGFnKCQoXCJpbnB1dFwiKS52YWwoKSk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBCYWNrIHRvIHJhbmRvbSBHSUYnc1xuXHQkKFwiLnJhbmRvbW1vZGVcIikuY2xpY2soZnVuY3Rpb24oZSl7XG5cdFx0JChcImlucHV0XCIpLnZhbCgnJyk7XG5cdFx0Y3VzdG9tVGFnKCcnKTtcblx0fSk7XG5cdFxuXHQkKCcuZ2lmJykuY2xpY2soY3ljbGUpO1xuXG5cdCQoJyN0YWctaW5wdXQnKS5vbignZm9jdXMnLCBmdW5jdGlvbigpe1xuXHRcdGZvcmNlQmFyID0gdHJ1ZTtcblx0fSk7XG5cblx0JCgnI3RhZy1pbnB1dCcpLm9uKCdibHVyJywgZnVuY3Rpb24oKXtcblx0XHRmb3JjZUJhciA9IGZhbHNlO1xuXHRcdG1vdXNlbW92ZXIoKTtcblx0fSk7XG5cbn0pO1xuXG5cblxuXG4iXX0=
