// JavaScript Document
$(function() {
	"use strict";
	
	    $(document).mousemove(function (event) {
        var leftEdge = $("#inner-wrapper").offset().left;
        var topEdge = $("#inner-wrapper").offset().top;

        var wrapperCenterX = leftEdge + $("#inner-wrapper").width() / 2;
        var wrapperCenterY = topEdge + $("#inner-wrapper").height() / 2;
			
		var leftAlert = Math.abs(event.pageX - wrapperCenterX);
		var topAlert = Math.abs(event.pageY - wrapperCenterY);

		if((leftAlert >= 500) || (topAlert >= 500)){
			$('.heart').stop().css({animation: 'heartSize 2s infinite'});
			$('.beat-1').stop().css({animation: 'beatOne 2s infinite'});
			$('.beat-2').stop().css({animation: 'beatTwo 2s infinite'});
		}else if((leftAlert < 500 && leftAlert >= 300) || (topAlert < 500 && topAlert >= 300)){
			$('.heart').stop().css({animation: 'heartSize 1.5s infinite'});
			$('.beat-1').stop().css({animation: 'beatOne 1.5s infinite'});
			$('.beat-2').stop().css({animation: 'beatTwo 1.5s infinite'});
		}else if((leftAlert < 300 && leftAlert >= 100) || (topAlert < 300 && topAlert >= 100)){
			$('.heart').stop().css({animation: 'heartSize 1s infinite'});
			$('.beat-1').stop().css({animation: 'beatOne 1s infinite'});
			$('.beat-2').stop().css({animation: 'beatTwo 1s infinite'});
		}else if((leftAlert < 100) || (topAlert < 100)){
			$('.heart').stop().css({animation: 'heartSize 5s infinite'});
			$('.beat-1').stop().css({animation: 'beatOne 5s infinite'});
			$('.beat-2').stop().css({animation: 'beatTwo 5s infinite'});
		}
			
    });
	
});
