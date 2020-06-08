var n_images = 28;
var loaded = new Set();
$(window).scroll(function() {checkLoad();});
initImages();
checkLoad();


function initImages() {
	for (i = 1; i <= n_images; i++) {
		$("#im"+i).css("background-image", "url(\"img/loading.gif\")");
	}
}
function checkLoad() {
	var scrolled = $(window).scrollTop();
	var yBuffer = 100;
	console.log("Here");
	for (i = 1; i <= n_images; i++) {
		var el = $("#im"+i);
		var offset = el.offset().top;
		if (scrolled + $(window).height() + yBuffer > offset && !loaded.has(i)) {
			$("#im"+i).css("background-image", "url(\"img/photography/"+i+".JPG\")");
			loaded.add(i);
		}
	}

}
