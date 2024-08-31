
$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        
    prevArrow: $(".next-arow"),
    nextArrow: $(".prev-arow"),
        
  })

  $('.number').counterUp({
      delay: 10,
      time: 1000
  })

  $('#btn-poper-video').magnificPopup({
    type: 'inline',
    midClick: true
  })

  $('#container').imagesLoaded( function() {
    
    
    // filter items on button click
    

    var $grid  = $('.grid-isotop').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'fitRows',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        rowWidth: '.grid-item'
      }
    })

    $('.filter-button-group').on( 'click', 'button', function() {
      $(this).addClass('active').siblings().removeClass('active');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });


  });

  
});

  
  
