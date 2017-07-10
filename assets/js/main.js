/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');

	$(document).ready(function(){
		var navOffset = $("nav").offset().top;
		// alert(navOffset);

		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();

			if(scrollPos >= navOffset){
				$("nav").addClass("fixed");
			}else{
				$("nav").removeClass("fixed");
			}

			if(scrollPos >= 10){
				var showfooter =$('.footer');
				showfooter.addClass('display');
			}else{
				var showfooter =$('.footer');
				showfooter.removeClass('display');
			}
		});

		var navOffset = $(".menubar").offset().top;
		// alert(navOffset);

		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();

			if(scrollPos > navOffset){
				$(".menubar").addClass("fixed");
			}else{
				$(".menubar").removeClass("fixed");
			}
		});


		$('nav li a').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    		&& location.hostname == this.hostname) {
     			var $target = $(this.hash);
     			$target = $target.length && $target
      			|| $('[name=' + this.hash.slice(1) +']');
      
      			if ($target.length) {
        			var targetOffset = $target.offset().top;
       				$('html,body')
        			.animate({scrollTop: targetOffset}, 1000);
       				return false;
      			}
    		}
  		});


	})


	var init = function(){
		console.log('Initializing app.');
		
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);