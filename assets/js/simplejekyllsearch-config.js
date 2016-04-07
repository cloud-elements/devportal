SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  limit: 10,
  fuzzy: false,
  exclude: ['Cloud Elements'],
  searchResultTemplate: '<li class="results"><a href="{url}" title="{description}">{title} | <span>{heading}</span></a></li>',
  noResultsText: "<li class='noresults'>Sorry, we couldn't find any results for this search.<br /> Try another search or explore <a href='/docs/elements.html'>Supported Elements</a>.</li>"
})
