jQuery(document).ready(function($) {
    var siteUrl = 'http://'+(document.location.hostname||document.location.host);

    // Make sure that all clicked links that link to your internal website
    // don't just reload the page but execute a History.pushState call
    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
        e.preventDefault();
        History.pushState({}, "", this.pathname);
    });

    // Catch all History stateChange events
    History.Adapter.bind(window, 'statechange', function(){
        var State = History.getState();

        // Load the new state's URL via an Ajax Call
        $.get(State.url, function(data){
            // Replace the "<title>" tag's content
            document.title = $(data).find("title").text();

            // Replace the content of the main container (.content)
            // If you're using another div, you should change the selector
            $('.content').html($(data).find('.content'));

            // // If you're using Google analytics, make sure the pageview is registered!
            // _gaq.push(['_trackPageview', State.url]);
        });
    });
});