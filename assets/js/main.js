
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});

	function buscar(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}

	document.getElementById("encuentrame").addEventListener("click", buscar);
	var latitud, longitud;
	var funcionExito = function(posicion) {
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map
		});

		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}

	var funcionError = function (error) {
		alert("Tenemos un problema con encontrar tu ubicación");
	}





function initialize() {
    var pos;
    var latitud;
    var longitud;
    var dirinicial;
                       
   var directionsService = new google.maps.DirectionsService();
   var directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
   

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
       
        latitud = position.coords.latitude;
        longitud = position.coords.longitude;

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
      
      });


            
      map.setCenter(pos);
       
    }, function() {
      handleNoGeolocation(true);
    });
    
  } else {
  
    handleNoGeolocation(false);
  }
   
   var request = {
       origin:'Santiago', 
       destination: 'Rancagua',
       travelMode: google.maps.DirectionsTravelMode.DRIVING
   };   
directionsDisplay.setMap(map);
   directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {

   
         directionsDisplay.setDirections(response);
      }
   });
}

        function GetAddress(latlang) {
        
     var latlng = new google.maps.LatLng(latitud, longitud);
     var geocoder = geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        dirinicial= results[1].formatted_address;
                   
                    }
                }
            });
            
        }
        
        
function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
};


