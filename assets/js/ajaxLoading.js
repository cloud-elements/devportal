jQuery(document).ready(function($) {
    const siteUrl = 'http://'+(document.location.hostname||document.location.host);

    // Make sure that all clicked links that link to your internal website
    // don't just reload the page but execute a History.pushState call
    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"],a[href^="./"]', "click", function(e) {
        e.preventDefault();
        History.pushState({"urlWithQuery": this.href}, "", this.href);
    });

    // This prevents the swagger from appending stuff to the url
    $(document).delegate('a[href^="#!"]', "click", function(e) {
        e.preventDefault();
    });

    // Catch all History stateChange events
    History.Adapter.bind(window, 'statechange', function(){
        let state = History.getState();
        // Load the new state's URL via an Ajax Call
        $.get(state.url, function(data){
            // Replace the "<title>" tag's content
            document.title = $(data).find("title").text();

            // Replace the content for individual element docs
            if($(data).find('.contentWrapper')[0].className.includes("elementDocContentWrapper") && 
                $('.contentWrapper')[0].className.includes("elementDocContentWrapper")){
                // Replace the sub wrapper for the element doc layout
                $('.elementDocContent').replaceWith($(data).find('.elementDocContent'));    

            }
            // Replace the whole content wrapper
            else {
                $('.contentWrapper').replaceWith($(data).find('.contentWrapper'));    
            }

            // // If you're using Google analytics, make sure the pageview is registered!
            // _gaq.push(['_trackPageview', State.url]);
        });
    });
});