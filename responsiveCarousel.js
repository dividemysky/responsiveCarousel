(function($) {

$.fn.responsiveCarousel = function(options) {

	//global
	var window_width = $(window).width();	//window width
	var $carousel = this;					//carousel element
	var carousel_pos;						//carousel position in the holder
	var carousel_width;						//width
	var carousel_item_width;				//% of carousel for each items width
	var carousel_item_padding;				//% of carousel for each items padding
	
	//settings
	var settings = $.extend({
		carousel_item_width_default: .16,
		carousel_item_padding_default: .02,
		carousel_item_width_481: .40,
		carousel_item_padding_481: .05,
		carousel_item_width_768: .27,
		carousel_item_padding_768: .03
	}, options);
	
	$(document).ready(function() {
		timerCarousel = setTimeout(function() { $carousel.find('.next').trigger( "click" ); },5000);	
		responsiveCarousel();
		
		//previous link
		$carousel.find('.prev').click(function(e) {
			e.preventDefault();
			
			if (carousel_pos < 0) {
				destination = (carousel_width*carousel_item_width)+((carousel_width*carousel_item_padding)*2);
				$carousel.find('.carousel_items').animate({left: carousel_pos+destination}, 700);
				carousel_pos = carousel_pos + destination;
			}
			
		});
		
		//next link - will loop around it on last item
		$carousel.find('.next').click(function(e) {
			e.preventDefault();
			
			if (Math.abs(carousel_pos)+carousel_width+
						(carousel_item_width*carousel_width)+
						((carousel_width*carousel_item_padding)*2) < $carousel.find('.carousel_items').width()) {
						
				destination = (carousel_width*carousel_item_width)+((carousel_width*carousel_item_padding)*2);
				$carousel.find('.carousel_items').animate({left: carousel_pos-destination}, 700);
				carousel_pos = carousel_pos - destination;
			} else {
				$carousel.find('.carousel_items').animate({left: 0}, 700);
				carousel_pos = 0;
			}
			
			//automatic clicks
			clearTimeout (timerCarousel);
			timerCarousel = setTimeout(function() { $carousel.find('.next').trigger( "click" ); },5000);
			
		});
		
	});
	
	//respond to screen changes
	$(window).resize(function() {
		$carousel.find('.carousel_items').css({'left':'0px'});
		responsiveCarousel();
	});
	
	function responsiveCarousel() {
		window_width = $(window).width();
		carousel_pos = $carousel.find('.carousel_items').position().left;		//carousel position in the holder
		carousel_width = $carousel.find('.carousel_items_holder').width();		//carousel holder width
		carousel_item_width = settings.carousel_item_width_default;				//default % width of carousel
		carousel_item_padding = settings.carousel_item_padding_default;			//default % width of carousel
		
		//repsonsive breakpoints
		if (window_width < 481) {
			carousel_item_width = settings.carousel_item_width_481;
			carousel_item_padding = settings.carousel_item_padding_481;
		} else if (window_width < 768) {
			carousel_item_width = settings.carousel_item_width_768;
			carousel_item_padding = settings.carousel_item_padding_768;
		}	
		
		//setup correct width of carousel link list (to setup bounds for scrollbars and establish image size responsively)
		$carousel.find('.carousel_items').each(function(e) {
			var $this = $(this);
			var totalWidth = 0;
			var carouselHeight = 0;
			
			//set image holder width, height & padding
			$this.children().each(function(e){
				$(this).width(carousel_width*carousel_item_width);
				$(this).css({'padding':'0 '+carousel_width*carousel_item_padding+'px'});
				
				totalWidth += Math.ceil($(this).width()+((carousel_width*carousel_item_padding)*2));
				
				if ($(this).height() > carouselHeight) {
					carouselHeight = $(this).height();
				}
			});
			
			$this.width(totalWidth);
			$carousel.height(carouselHeight);
		});
		
	}

};


}(jQuery));