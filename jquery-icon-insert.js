/**
 * jQuery Icon Insert Plugin 1.2
 *
 * http://github.com/stephenway/jquery-icon-insert/
 *
 * Copyright (c) 2013 Stephen Way
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
	$.fn.service = function(service, user, type) {
		/* Extensions */
		if (service == "facebook" && type == "page")
			var extension= ".com/pages/";
		else if (service == "linkedin" || service == "linkedin" && type == "company")
			var extension = ".com/company/";
		else if (service == "linkedin" && type == "personal" || service == "linkedin" && type == "in")
			var extension = ".com/in/";
		else if (service == "picasa")
			var extension = "web.google.com/";
		else if (service == "ustream")
			var extension = ".tv/";
		else if (service == "yelp")
			var extension = ".com/biz/";
		else
			var extension= ".com/";

		/* Subdomains */
		if (service == "blogger")
			var href = "http://" + user + ".blogspot" + extension;
		else if (service == "tumblr" || service == "wordpress" || service == "github" && type == "page")
			var href = "http://" + user + "." + service + extension;
		else
			var href = "http://" + service + extension + user;

		/* DOM Injection */
		if (service == "yelp")
			var object = $("<a class='lsf-icon' title='star' href=" + href + "></a>");
		else
			var object = $("<a class='lsf-icon' title=" + service + " href=" + href + "></a>");

		object.appendTo(this);
		return this;

	};
})( jQuery );
