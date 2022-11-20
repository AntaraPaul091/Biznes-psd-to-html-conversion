 
var container = document.querySelector('.gallery');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    }
});

	  $(document).ready(function(){


	  	// owl
	  	$(".owl-carousel").owlCarousel({
		  	autoplay: true,
		  	loop: true,
		  	smartSpeed: 300,
		  	autoplayHoverPause: true,
		  	responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		  });

	  	// go to top
	  	$('.top').click(function(){
	    $("html, body").animate({
	    	scrollTop: 0,
		    }, 1000)

		});

		$(window).scroll(function(){
			var ourWindow = $(this).scrollTop();
			if (ourWindow<500) {
				$('.top').fadeOut();
			} else{
				$('.top').fadeIn();
			}

			// menu
			if (ourWindow>100) {
				$('body').addClass('fixed');
			} else {
				$('body').removeClass('fixed')
			}
		});

		$('.navbar-nav li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});


		$('.navbar-nav a[href^="#"]').click(function(e){
			e.preventDefault();

			var target = this.hash;
			$('html, body').animate({
				scrollTop: $(target).offset().top - 61
			}, 1000);
		});

		$('.navbar-nav a[href="#Home"]').click(function(){
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
		});

		$('body a[href^="#"]').click(function(e){
			e.preventDefault();
		});
	  })
		
	