responsiveCarousel
==================

A simple responsive carousel plugin for jQuery.

This plugin defaults to 3 responsive breakpoints; < 481, < 768 and a default desktop size.

##Usage

To use this plugin, simply incude after jquery, and use the following HTML/CSS/JS Markup:

###JS

```JavaScript
$(document).ready(function() {
	$('#carousel').responsiveCarousel();
});
```

###JS Options

You can pass in an object of options for the following parameters:

Parameter  | Values
------------- | -------------
carousel_item_width_default  | (decimal) for the % width of the container each carousel items consumes by default (desktop) [5 items visible]
carousel_item_padding_default  | (decimal) for the % padding of the container each carousel items consumes by default (desktop)
carousel_item_width_481  | (decimal) for the % width of the container each carousel items consumes when the window is < 481px [2 items visible]
carousel_item_padding_481  | (decimal) for the % padding of the container each carousel items consumes when the window is < 481px
carousel_item_width_768  | (decimal) the % width of the container each carousel items consumes when the window is < 768px > 481px [3 items visible]
carousel_item_padding_768  | (decimal) for the % padding of the container each carousel items consumes when the window is < 768px > 481px

###CSS

```CSS
#carousel { height: auto; }
#carousel ul { list-style: none; padding: 0; margin: 0; }
#carousel li { margin: 0; padding: 0; float: left; display: block; }
#carousel img { width: 100% !important; height: auto !important; }
#carousel .nav { display: block; width: 4%; height: 100%; float: left; }
#carousel .carousel_items_holder { width:92%; overflow: hidden; float: left;  height: 100%; position: relative; }
#carousel .carousel_items { position: absolute; }
```

###HTML

```HTML
<div id="carousel">
	<a class="nav prev" href="#">prev</a>
	
	<div class="carousel_items_holder">
	  	<ul class="carousel_items">
	  		<li><a href="#"><img src="/path/to/img1.png" /></a></li>
	  		<li><a href="#"><img src="/path/to/img2.png" /></a></li>
	  		<li><a href="#"><img src="/path/to/img3.png" /></a></li>
	  		<li><a href="#"><img src="/path/to/img4.png" /></a></li>
	  		<li><a href="#"><img src="/path/to/img5.png" /></a></li>
	  		<li><a href="#"><img src="/path/to/img6.png" /></a></li>
	  		<li><a href="#"><img src="/path/to/img7.png" /></a></li>
	  	</ul>
	</div>
	
	<a class="nav next" href="#">next</a>
</div>
```