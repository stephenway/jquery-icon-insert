/**
 * jQuery Service Plugin 1.0
 *
 * http://github.com/stephenway/jquery-service/
 *
 * Copyright (c) 2012 Stephen Way
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
	$.fn.service = function(service, user, type) {
  
		if (service == "linkedin")
			var href = "http://" + service + ".com/company/" + user;
		else if (service == "linkedin" && type == "personal")
			var href = "http://" + service + ".com/in/" + user;
		else if (service == "tumblr")
			var href= "http://" + user + "." + service + ".com/";
		else if (service == "yelp")
			var href= "http://" + service + ".com/biz/" + user;
		else if (service == "blogger")
			var href= "http://" + user + ".blogspot.com/";
		else if (service == "wordpress")
			var href= "http://" + user + "." + service + ".com/";
		else if (service == "ustream")
			var href= "http://" + service + ".tv/" + user;
		else if (service == "picasa")
			var href= "http://" + service + "web.google.com/" + user;
		else if (service == "facebook" && type == "page")
			var href= "http://" + service + ".com/pages/" + user;
		else
			var href = "http://" + service + ".com/" + user;
		if (service == "yelp")
			var object = $("<a class='lsf-icon' title='star' href=" + href + "></a>");
		else
			var object = $("<a class='lsf-icon' title=" + service + " href=" + href + "></a>");
		object.appendTo(this);

		return this;

	};
})( jQuery );