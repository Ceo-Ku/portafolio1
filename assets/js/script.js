$(function() {
    
    $('a').click(function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hashtag = this.hash;
            $('html, body, footer').animate({
                scrollTop: $(hashtag).offset().top
            }, 800, function() {
                window.location.hash = hashtag;
            });
        }
    })
});