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

###CSS

```CSS
#carousel { height: auto; }
#carousel ul { list-style: none; padding: 0; margin: 0; }
#carousel li { margin: 0; padding: 0; float: left; display: block; }
#carousel img { width: 100% !important; height: auto !important; }
#carousel .nav { display: block; width: 4%; height: 100%; float: left; text-indent: -9999px; }
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