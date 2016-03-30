!(function() {

	var parseQueryFromURL = function() {

		var searchQuery = window.location.search;
		if (!searchQuery) {
			return null;
		}

		var regex = /[?&]([^=#]+)=([^&#]*)/g,
			params = {},
			match;
		while (match = regex.exec(searchQuery)) {
			params[match[1]] = match[2];
		}

		if (!params.hasOwnProperty("query")) {
			return null;
		}

		return decodeURIComponent(params.query);

	};

	var scanPosts = function(posts, properties, query) {

		var results = [];
		posts.forEach(function(post) {
			var textToScan = "",
				regex = new RegExp(query, "ig");

			properties.forEach(function(property) {
				if (post.hasOwnProperty(property)) {
					textToScan += post[property];
				}
			});

			if (regex.test(textToScan)) {
				results.push(post);
			}
		});

		return results;

	};

	var outputResults = function(results, el, query) {

		var frag = document.createDocumentFragment();
		results.forEach(function(result) {

			var div = document.createElement("div");
			div.className = "search-result col-md-12 text-xs-left";

			var title = document.createElement("h4");
			var url = document.createElement("a");
			url.href = result.url;
			url.innerHTML = result.title +" | "+ result.heading+ "<br>" + "<span class='search-description'>" + result.description + "</span>";
			title.appendChild(url);

			div.appendChild(title);

			frag.appendChild(div);

		});

		el.appendChild(frag);

	};

  var Search = function(options) {

		options = options || {};

		if (!options.selector) {
			throw new Error("We need a selector to find");
		}

		this.el = document.querySelector(options.selector);
		if (!this.el) {
			throw new Error("We need a HTML element to output to");
		}

		this.posts = JEKYLL_POSTS;
		if (!this.posts) {
			return this.el.innerHTML = this.noResultsMessage;
		}

		var defaultMessage = "<span class='error-message'>" + "Sorry, no results were found for " + parseQueryFromURL() + "</span>" + "<br>" + "<p class='p-t'><strong>Search Suggestions</strong></p>" + "<ul>" + "<li>Check your spelling</li>" + "<li>Try more general words i.e. Salesforce or Element Builder</li>";
		this.noResultsMessage = options.noResultsMessage || defaultMessage;

		var defaultProperties = ["title"];
		this.properties = options.properties || defaultProperties;

		this.query = parseQueryFromURL();
		if (!this.query) {
			return this.el.innerHTML = this.noResultsMessage;
		}

		this.results = scanPosts(this.posts, this.properties, this.query);
		if (!this.results.length) {
			return this.el.innerHTML = this.noResultsMessage;
		}

		outputResults(this.results, this.el, this.query);

	};

	window.jekyllSearch = Search;

})();
