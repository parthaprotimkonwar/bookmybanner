/**
 * Created by parthaprotimkonwar on 07/03/17.
 */

/*A Controller controlles a small unit of the modules.*/

myApp.controller('queryController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    /*$http.get('js/data.json').success(function (data) {
     $scope.authors = data;
     });*/

    //setting a default value to the select box
    $scope.peopleOrder = "name";

    $(function() {
        $('input[name="daterange"]').daterangepicker();
    });

    $('#ex1').slider({
        formatter: function(value) {
            console.log(value);
            return 'Current value: ' + value;
        }
    });

    $scope.listBanners = function () {

        $location.path("/banner/lists/map");
    };

    $(document).ready(function() {



        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {

            var geocoder = new google.maps.Geocoder();
            var address = document.getElementById('pac-input').value;

            geocoder.geocode({ 'address': address }, function (results, status) {

                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();

                    console.log("Lat : " + latitude);
                    console.log("Lon : " + longitude);
                }
            });



            /*var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach(function(marker) {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {

                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                console.log(place.geometry.location);

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });*/
        });

    });


}]);

