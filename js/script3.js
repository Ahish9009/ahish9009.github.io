setTilesPadding();

$('.empty-button').click( function(e) {
    $('.collapse').collapse('hide');
});

$('#experience').on('shown.bs.collapse', function () {
	$('.exp-heading').css('background-color', 'rgba(49,150,246,0.8)');
	$('.content-wrap').scrollTop(0);
});
$('#experience').on('hidden.bs.collapse', function () {
	$('.exp-heading').css('background-color', 'rgba(0,0,0,1)');
});
$('#projects').on('shown.bs.collapse', function () {
	$('.proj-heading').css('background-color', 'rgba(49,150,246,0.8)');
	$('.content-wrap').scrollTop(0);
});
$('#projects').on('hidden.bs.collapse', function () {
	$('.proj-heading').css('background-color', 'rgba(0,0,0,1)');
	$('html, body').delay('200').animate({
    }, 200);
});

$(window).resize(function() {setTilesPadding();})
function setTilesPadding() {
	var h = $('.container').height();
	$('.tabs').css("top", h);
	var h2 = $('.stick').height();
	$('.padding').css("padding-top", h+h2+20);
}

