console.log(window.scrollY);

var h = $('.container').height();
console.log(h);

$('.hobby-sec-title-container').css({top: h-1});

var h2 = $('.hobby-sec-title-container').height();
var h3 = h + h2;
console.log('-'+h3+h2/2);
$('.hobby').css("padding-top", h3+30);
$('.hobby').css("margin-top",'-'+h3);
