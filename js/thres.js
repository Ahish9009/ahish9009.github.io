let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
let width = document.getElementById('width');
let height = document.getElementById('height');

inputElement.addEventListener('change', (e) => {
	imgElement.src = URL.createObjectURL(e.target.files[0]);
	$('.input-image').css('display', 'block');
}, false);
imgElement.onload = function() {
	getThres();
};

width.addEventListener('change', (e) => {
	getThres();
})
height.addEventListener('change', (e) => {
	getThres();
})


function getThres() {

	let src = cv.imread(imgElement);
	let dst = new cv.Mat();

	let w = document.getElementById('width').value;
	let h = document.getElementById('height').value;

	w = Number(w);
	h = Number(h);

	cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
	cv.adaptiveThreshold(src, dst,255,cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY,w,h);
	cv.imshow('canvasOutput', dst);
	$('.output-image').css('display', 'block');

	// Free memory 
	src.delete();
}
function onOpenCvReady() {
	document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}

function download() {
	if (!imgElement.src) return;

	var link = document.createElement('a'); 
	var thisCanvas = document.getElementsByTagName('canvas')[0];
	link.download = `thresholded.png`; 
	link.href = thisCanvas.toDataURL("image/png");
	link.click(); 
}
