$(function () {

    // Responsive menu
    $('.nav-toggle').on('click', function () {
        $('.navigation').toggleClass('nav-toggle-show');
        $('#main-header').toggleClass('nav-toggle-bg');
    });

    // Google Map
    var map;
    var location_lat = "23.7555619";
    var location_lon = "90.3760557";
    $('.google-map').each(function () {
        var element = $(this).attr('id');
        map = new GMaps({
            el: '#' + element,
            center: new google.maps.LatLng(location_lat, location_lon),
            zoom: 18,
            // scrollwheel: false,
        });
        map.addMarker({
            lat: location_lat,
            lng: location_lon,
            title: 'JOOMSHAPER',
            // icon: 'assets/img/map-marker.png'
        });
    });

});