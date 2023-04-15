$(document).ready(function() {	

	$('.logo-line').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		lidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase:'linear',
        infinite: true,
        prevArrow: "",
        nextArrow: "",
        responsive: [
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
	    ]
	});

	$('button, li').on('mouseover', function(){
		$('#cursor').css({
			"background-color": "rgba(255, 255, 255, 0.5)",
			"border-color": "rgba(255, 255, 255, 0.5)"
		})
	});

	$('button, li').on('mouseleave', function(){
		$('#cursor').css({
			"background-color": "transparent",
			"border-color": "#fff"
		})
	});

	$('.hamburher').on('click', function(){
		$(this).toggleClass('active');
		$('.mobile-nav').toggleClass('is-open');
	});

	$('.mobile-nav__link').on('click', function(){
		$('.mobile-nav').removeClass('is-open');
		$('.hamburher').removeClass('active');
	});
});