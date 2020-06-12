setTilesPadding();

jQuery('button').click( function(e) {
    jQuery('.collapse').collapse('hide');
});

$('#experience').on('shown.bs.collapse', function () {
	$('.exp-heading').css('background-color', 'rgba(49,126,246,0.8)');
});
$('#experience').on('hidden.bs.collapse', function () {
	$('.exp-heading').css('background-color', 'rgba(0,0,0,1)');
});
$('#projects').on('shown.bs.collapse', function () {
	$('.proj-heading').css('background-color', 'rgba(49,126,246,0.8)');
});
$('#projects').on('hidden.bs.collapse', function () {
	$('.proj-heading').css('background-color', 'rgba(0,0,0,1)');
});

$(window).resize(function() {setTilesPadding();})
function setTilesPadding() {
	var h = $('.container').height();
	$('.padding').css("padding-top", h);
}
