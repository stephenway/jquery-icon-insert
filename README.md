jQuery Service Icon Injection
=============================

jQuery DOM Injection for [Ligature Symbols](http://kudakurage.com/ligature_symbols/)

## Install

Download and include [Ligature Symbols](http://kudakurage.com/ligature_symbols/) in your project's stylesheet.

Include the script

	<script src="jquery.service.js"></script>

Place a tag for adding service icons in your layout
	
	<div class="social"></div>


## Usage

	$(function() {

	$("div.social").service("facebook", "stephenway")
			   	   .service("linkedin", "stephenway", "personal")
			  	   .service("twitter", "stephencway");

	});

## Support

Right now the library supports most popular services in the US. Create an issue or pull request for any extra services you would want included.

## License

Copyright (c) 2012 Stephen Way Licensed under the MIT license.