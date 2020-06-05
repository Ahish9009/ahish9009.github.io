changeSizes();

function changeSizes() {

	var h = $('.container').height();
	$('.hobby-sec-title-container').css({top: h-1});

	var h2 = $('.hobby-sec-title-container').height();
	var h3 = h + h2;
	$('.hobby').css("padding-top", h3+15);
	$('.adj-margin').css("margin-top",'-'+h3);

}

