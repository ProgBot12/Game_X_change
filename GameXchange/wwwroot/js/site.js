$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1)
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#slideshow');
}, 4000);