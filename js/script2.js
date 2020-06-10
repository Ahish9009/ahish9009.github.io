//------------------------------
//GLOBAL
//params
var n_images = 70;
var nCarouselLL = 2;
//stores id's of already loaded images
var loaded = new Set();
var carouselLoaded = new Set();
//------------------------------

//------------------------------
//CALLS ON LOAD START
$(window).scroll(function() {
	loadTiles();
	moveCarousel();
});

//lazy-load tile pics
loadTiles();

//set carousel size
sizeCarousel();

//lazy load first few carousel images
carouselLoadImg();

//set appropriate padding for tiled images
setTilesPadding();
//------------------------------

//------------------------------
//EVENT HANDLING
//handle pics being clicked
$('.pic').click(function() {
	var e = this.id;
	if ($("#imgShowCarousel").css("display") == "none") {
		showCarousel(e.slice(2));
	}
	else { hideCarousel(); }	
});
//closes carousel if clicked outside
$('.notCarousel').click(function() {hideCarousel();});
//lazy load carousel images
$('#imgShowCarousel').on('slid.bs.carousel', function() {carouselLoadImg();})
//------------------------------

//------------------------------
//FUNCTIONS
function loadTiles() {
	var scrolled = $(window).scrollTop();
	var yBuffer = 100;
	for (i = 1; i <= n_images; i++) {
		var el = $("#im"+i);
		var offset = el.offset().top;
		if (scrolled + $(window).height() + yBuffer > offset && !loaded.has(i)) {
			$("#im"+i).css("background-image", "url(\"img/photography/"+i+".JPG\")");
			loaded.add(i);
		}
	}
}
function sizeCarousel() {
	var w = $(window).width();
	var h = $(window).height();

	if (w > h) {
		$('.carousel-ele').css("height", "100%");
	}
	else {
		$('.carousel-ele').css("width", "100%");

	}
}
function carouselLoadImg() {
	var currIndex = $('div.active').index();

	for (i=0; i < nCarouselLL; i++) {
		currIndex++; //works on first case as index() is 0 indexed, id is 1 indexed
		if (!carouselLoaded.has(currIndex)) {
			$('#cim'+currIndex).css("background-image", "url(\"img/photography/"+currIndex+".JPG\")");
			carouselLoaded.add(currIndex);
		}
	}
}
function hideCarousel() {
	if ($('#imgShowCarousel').css("display") != "none") { 
		$('#imgShowCarousel').css("display", "none");
	}
}
function showCarousel(e) {
	$("#imgShowCarousel").carousel(parseInt(e)-1);
	$("#imgShowCarousel").css("display", "block");
	carouselLoadImg();
}
function moveCarousel() {
	var h = $(window).scrollTop();
	var newPos = h + 0.1*$(window).height();
	$('#imgShowCarousel').css("top", newPos+"px");
}
function setTilesPadding() {
	var h = $('.container').height();
	$('.padding').css("padding-top", h);
}
//------------------------------
