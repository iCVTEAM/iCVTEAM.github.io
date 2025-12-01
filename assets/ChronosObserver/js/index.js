window.HELP_IMPROVE_VIDEOJS = false;

function preloadInterpolationImages(basePath, numFrames) {
  let images = [];
  for (let i = 0; i < numFrames; i++) {
    let path = basePath + '/' + String(i).padStart(3, '0') + '.png';
    images[i] = new Image();
    images[i].src = path;
  }
  return images;
}

function setInterpolationImage(images, wrapperId, index) {
  let image = images[index];
  image.ondragstart = () => false;
  image.oncontextmenu = () => false;
  $('#' + wrapperId).empty().append(image);
}

function setupSlider(basePath, numFrames, wrapperId, sliderId) {
  let images = preloadInterpolationImages(basePath, numFrames);

  $('#' + sliderId).on('input', function () {
    setInterpolationImage(images, wrapperId, this.value);
  });

  setInterpolationImage(images, wrapperId, Math.floor(numFrames / 2));
  $('#' + sliderId).prop('max', numFrames - 1);
  return images;
}

$(document).ready(function () {
  let datasets = [
    {
      base: "./assets/ChronosObserver/ablation/example1",
      wrapper: "interpolation-image-wrapper-ablation-1",
      slider: "interpolation-slider-ablation-1", num: 49
    },
    {
      base: "./assets/ChronosObserver/ablation/example2",
      wrapper: "interpolation-image-wrapper-ablation-2",
      slider: "interpolation-slider-ablation-2", num: 49
    },
    {
      base: "./assets/ChronosObserver/ablation/example3",
      wrapper: "interpolation-image-wrapper-ablation-3",
      slider: "interpolation-slider-ablation-3", num: 49
    },

  ];

  datasets.forEach(ds => {
    setupSlider(ds.base, ds.num, ds.wrapper, ds.slider);
  });

  $(".navbar-burger").click(function () {
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
  };

  var carousels = bulmaCarousel.attach('.carousel', options);
  carousels.forEach(c => c.on('before:show', state => console.log(state)));
  bulmaSlider.attach();
});
