jQuery(document).ready(function($) {
    const siteUrl = 'http://'+(document.location.hostname||document.location.host);

    // Make sure that all clicked links that link to your internal website
    // don't just reload the page but execute a History.pushState call
    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
        e.preventDefault();
        console.log("this: ",this);
        History.pushState({"urlWithQuery": this.href}, "", this.href);
    });

    // Catch all History stateChange events
    History.Adapter.bind(window, 'statechange', function(){
        let state = History.getState();
        console.log('the state: ', state);
        // Load the new state's URL via an Ajax Call
        $.get(state.url, function(data){
            // Replace the "<title>" tag's content
            document.title = $(data).find("title").text();

            // Replace the content of the main container (.contentWrapper)
            $('.contentWrapper').replaceWith($(data).find('.contentWrapper'));

            // // If you're using Google analytics, make sure the pageview is registered!
            // _gaq.push(['_trackPageview', State.url]);
        });
    });
});