/**
 * Created by parthaprotimkonwar on 15/03/17.
 */
myApp.controller('bannerDetailsController', ['$scope', '$http', function ($scope, $http) {

    //setting a default value to the select box
    $scope.peopleOrder = "name";

    $('#ex1').slider({
        formatter: function(value) {
            console.log(value);
            return 'Current value: ' + value;
        }
    });

    $("#ex2").slider({});

    $(function() {
        $('input[name="daterange"]').daterangepicker();
    });

    $(document).ready(function() {

        //Places API starts
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
        });
        //Places API ends




        var map;
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: new google.maps.LatLng(18.5204303,73.85674369999992),
            mapTypeId: 'roadmap'
        });

        var bannerLists = [
            {
                coordinates : {
                    latitide : "18.597059",
                    longitude : "73.71882329999994"
                },
                label : "Hinjewadi",
                price : "1000",
                currency : "INR",
                banner : {
                    width: 1000,
                    height: 2000
                },

                type : "owner",
                contact : {
                    name : "Ram Brijeswasi",
                    phone : "998876654"
                },
                image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwg6vJoeemnHVtpksVr8_6BoLa2Oys0hI5MKExKP_p5J34BsFE'
            },
            {
                coordinates : {
                    latitide : "18.5236317",
                    longitude : "73.84112260000006"
                },
                label : "FC Road",
                price : "2000",
                currency : "INR",
                banner : {
                    width: 2000,
                    height: 3000
                },

                type : "owner",
                contact : {
                    name : "Rahim Kejriwal",
                    phone : "998876654"
                },
                image : 'http://specarolinas.org/wp-content/uploads/2016/08/polymers-center-of-excellence-sign.jpg'
            },
            {
                coordinates : {
                    latitide : "18.4638133",
                    longitude : "73.86446439999997"
                },
                label : "Indiranagar",
                price : "4000",
                currency : "INR",
                banner : {
                    width: 2000,
                    height: 2500
                },
                type : "owner",
                contact : {
                    name : "Kamal Brijeswasi",
                    phone : "998876654"
                },
                image : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS56mAk7nvVrtVqV1m1B40Bg0uRIiXFrBWjLwNx044crnfokfZ0'
            },
            {
                coordinates : {
                    latitide : "18.560834",
                    longitude : "73.91121900000007"
                },
                label : "Tavisca Solutions",
                price : "6000",
                currency : "INR",
                banner : {
                    width: 4000,
                    height: 4500
                },
                type : "owner",
                contact : {
                    name : "Raghu Rahim",
                    phone : "998876654"
                },
                image : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQww6Cje-8nclPi3OKRFhpCPFcqgljAZnoAmOlWqsWekQ-NzyPa'

            }
        ];

        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();

        for (var i = 0; i < bannerLists.length; i++) {
            var data = bannerLists[i];
            var coords = data.coordinates;
            var myLatlng = new google.maps.LatLng(coords.latitide,coords.longitude);
            var marker = new google.maps.Marker({
                position: myLatlng,
                label: data.price,
                map: map
            });

            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    var image = 'http://fairland.com.au/images/developments/galleries/almondgrove/DSC_0052.JPG?Action=thumbnail&Width=128&Height=128&Algorithm=fill_proportional&USM=1';
                    infoWindow.setContent("<div style = 'width:200px;min-height:20px;font-size: medium; font-weight: bold'>"
                        + data.label + "</div> <img width='128px' height='128px' src='" + data.image +"'/><div style='padding-top: 5px'> " +
                        "<div style='padding-top: 5px;font-weight: bold'> Banner Details </div>Price : "
                        + data.currency + " " + data.price +"</div> <div> Banner Size : " + data.banner.width + " x "
                        + data.banner.height+"</div> <div style='padding-top: 5px;font-weight: bold'> Owner Details </div>" +
                        "<div>Name : " + data.contact.name +"</div><div> Contact : " +
                            data.contact.phone +
                        "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }

    });

}]);
