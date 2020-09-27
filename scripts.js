/*
Carousel
*/
$('#carousel-popular-tutorials').on('slide.bs.carousel', function (e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('.carousel-inner-popular-tutorials-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('.carousel-inner-popular-tutorials-item').eq(i).appendTo('.carousel-inner-popular-tutorials');
      }
      else {
        $('.carousel-inner-popular-tutorials-item').eq(0).appendTo('.carousel-inner-popular-tutorials');
      }
    }
  }
});

$('#carousel-latest-videos').on('slide.bs.carousel', function (e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('.carousel-inner-latest-videos-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('.carousel-inner-latest-videos-item').eq(i).appendTo('.carousel-inner-latest-videos');
      }
      else {
        $('.carousel-inner-latest-videos-item').eq(0).appendTo('.carousel-inner-latest-videos');
      }
    }
  }
});
