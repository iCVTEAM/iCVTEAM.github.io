window.HELP_IMPROVE_VIDEOJS = false;

// var INTERP_BASE = "./static/interpolation/stacked";
// var NUM_INTERP_FRAMES = 240;

// var interp_images = [];
// function preloadInterpolationImages() {
//   for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
//     var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
//     interp_images[i] = new Image();
//     interp_images[i].src = path;
//   }
// }

// function setInterpolationImage(i) {
//   var image = interp_images[i];
//   image.ondragstart = function() { return false; };
//   image.oncontextmenu = function() { return false; };
//   $('#interpolation-image-wrapper').empty().append(image);
// }


//////

var INTERP_BASE_FINE_0 = "./static/ablation/fine-tuning/grapes";
var NUM_INTERP_FRAMES_FINE_0 = 100;

var interp_images_FINE_0 = [];
function preloadInterpolationImagesFine0() {
  for (var i = 0; i < NUM_INTERP_FRAMES_FINE_0; i++) {
    var path = INTERP_BASE_FINE_0 + '/' + String(i).padStart(4, '0') + '.png';
    interp_images_FINE_0[i] = new Image();
    interp_images_FINE_0[i].src = path;
  }
}

function setInterpolationImageFine0(i) {
  var image = interp_images_FINE_0[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-fine0').empty().append(image);
}

var INTERP_BASE_FINE_1 = "./static/ablation/fine-tuning/statue";
var NUM_INTERP_FRAMES_FINE_1 = 100;

var interp_images_FINE_1 = [];
function preloadInterpolationImagesFine1() {
  for (var i = 0; i < NUM_INTERP_FRAMES_FINE_1; i++) {
    var path = INTERP_BASE_FINE_1 + '/' + String(i).padStart(4, '0') + '.png';
    interp_images_FINE_1[i] = new Image();
    interp_images_FINE_1[i].src = path;
  }
}

function setInterpolationImageFine1(i) {
  var image = interp_images_FINE_1[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-fine1').empty().append(image);
}

var INTERP_BASE_FINE_2 = "./static/ablation/fine-tuning/wolf_statue";
var NUM_INTERP_FRAMES_FINE_2 = 100;

var interp_images_FINE_2 = [];
function preloadInterpolationImagesFine2() {
  for (var i = 0; i < NUM_INTERP_FRAMES_FINE_2; i++) {
    var path = INTERP_BASE_FINE_2 + '/' + String(i).padStart(4, '0') + '.png';
    interp_images_FINE_2[i] = new Image();
    interp_images_FINE_2[i].src = path;
  }
}

function setInterpolationImageFine2(i) {
  var image = interp_images_FINE_2[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-fine2').empty().append(image);
}

////

//////

var INTERP_BASE_HIGH_0 = "./static/ablation/high-passing/bird";
var NUM_INTERP_FRAMES_HIGH_0 = 100;

var interp_images_HIGH_0 = [];
function preloadInterpolationImagesHigh0() {
  for (var i = 0; i < NUM_INTERP_FRAMES_HIGH_0; i++) {
    var path = INTERP_BASE_HIGH_0 + '/' + String(i).padStart(4, '0') + '.png';
    interp_images_HIGH_0[i] = new Image();
    interp_images_HIGH_0[i].src = path;
  }
}

function setInterpolationImageHigh0(i) {
  var image = interp_images_HIGH_0[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-high0').empty().append(image);
}

var INTERP_BASE_HIGH_1 = "./static/ablation/high-passing/cat_statue";
var NUM_INTERP_FRAMES_HIGH_1 = 100;

var interp_images_HIGH_1 = [];
function preloadInterpolationImagesHigh1() {
  for (var i = 0; i < NUM_INTERP_FRAMES_HIGH_1; i++) {
    var path = INTERP_BASE_HIGH_1 + '/' + String(i).padStart(4, '0') + '.png';
    interp_images_HIGH_1[i] = new Image();
    interp_images_HIGH_1[i].src = path;
  }
}

function setInterpolationImageHigh1(i) {
  var image = interp_images_HIGH_1[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-high1').empty().append(image);
}

var INTERP_BASE_HIGH_2 = "./static/ablation/high-passing/teddy";
var NUM_INTERP_FRAMES_HIGH_2 = 100;

var interp_images_HIGH_2 = [];
function preloadInterpolationImagesHigh2() {
  for (var i = 0; i < NUM_INTERP_FRAMES_HIGH_2; i++) {
    var path = INTERP_BASE_HIGH_2 + '/' + String(i).padStart(4, '0') + '.png';
    interp_images_HIGH_2[i] = new Image();
    interp_images_HIGH_2[i].src = path;
  }
}

function setInterpolationImageHigh2(i) {
  var image = interp_images_HIGH_2[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-high2').empty().append(image);
}

////


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/

    // preloadInterpolationImages();

    // $('#interpolation-slider').on('input', function(event) {
    //   setInterpolationImage(this.value);
    // });
    // setInterpolationImage(0);
    // $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImagesHigh0();

    $('#interpolation-slider-high0').on('input', function(event) {
      setInterpolationImageHigh0(this.value);
    });
    setInterpolationImageHigh0(NUM_INTERP_FRAMES_HIGH_0/2);
    $('#interpolation-slider-high0').prop('max', NUM_INTERP_FRAMES_HIGH_0 - 1);

    preloadInterpolationImagesHigh1();

    $('#interpolation-slider-high1').on('input', function(event) {
      setInterpolationImageHigh1(this.value);
    });
    setInterpolationImageHigh1(NUM_INTERP_FRAMES_HIGH_1/2);
    $('#interpolation-slider-high1').prop('max', NUM_INTERP_FRAMES_HIGH_1 - 1);

    preloadInterpolationImagesHigh2();

    $('#interpolation-slider-high2').on('input', function(event) {
      setInterpolationImageHigh2(this.value);
    });
    setInterpolationImageHigh2(NUM_INTERP_FRAMES_HIGH_2/2);
    $('#interpolation-slider-high2').prop('max', NUM_INTERP_FRAMES_HIGH_2 - 1);

    preloadInterpolationImagesFine0();

    $('#interpolation-slider-fine0').on('input', function(event) {
      setInterpolationImageFine0(this.value);
    });
    setInterpolationImageFine0(NUM_INTERP_FRAMES_FINE_0/2);
    $('#interpolation-slider-fine0').prop('max', NUM_INTERP_FRAMES_FINE_0 - 1);

    preloadInterpolationImagesFine1();

    $('#interpolation-slider-fine1').on('input', function(event) {
      setInterpolationImageFine1(this.value);
    });
    setInterpolationImageFine1(NUM_INTERP_FRAMES_FINE_1/2);
    $('#interpolation-slider-fine1').prop('max', NUM_INTERP_FRAMES_FINE_1 - 1);

    preloadInterpolationImagesFine2();

    $('#interpolation-slider-fine2').on('input', function(event) {
      setInterpolationImageFine2(this.value);
    });
    setInterpolationImageFine2(NUM_INTERP_FRAMES_FINE_2/2);
    $('#interpolation-slider-fine2').prop('max', NUM_INTERP_FRAMES_FINE_2 - 1);

    bulmaSlider.attach();

})
