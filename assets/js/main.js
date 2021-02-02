$(document).ready(function($){
	"use strict";
	
	// WOW Js Active
	// new WOW().init();
	
	// ---- Active
    
    $(".owl-carousel").owlCarousel({
		items:2,
		loop:true,
		margin:25,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
				
			},
			1000:{
				items:2
			}
		}
	});
	
	// countdown
	$('#example').countdown({
		date: '04/18/2022 23:59:59'
		}, function () {
		alert('We Are Done !');
	});
	

	
	/* scrollUp Minimum setup */
	$(function () {
		$.scrollUp();
	});
	
}(jQuery));