var geocoder;

function showDiv(toggle) {
				var e = document.getElementById(toggle);
				e.style.display = ((e.style.display!='none') ? 'none' : 'block');
				var deadline = new Date(Date.parse(new Date()) + 90 * 1000);
				initializeClock('clockdiv', deadline);
		}

function getTimeRemaining(endtime) {
					var t = Date.parse(endtime) - Date.parse(new Date());
					var seconds = Math.floor((t / 1000) % 60);
					var minutes = Math.floor((t / 1000 / 60) % 60);
					var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
					var days = Math.floor(t / (1000 * 60 * 60 * 24));
					return {
						'total': t,
						'days': days,
						'hours': hours,
						'minutes': minutes,
						'seconds': seconds
					};
				}

function initializeClock(id, endtime) {
					var clock = document.getElementById(id);
					var minutesSpan = clock.querySelector('.minutes');
					var secondsSpan = clock.querySelector('.seconds');

					function updateClock() {
						var t = getTimeRemaining(endtime);

						minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
						secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

						if (t.total <= 0) {
								clearInterval(timeinterval);
						}
					}

					updateClock();
					var timeinterval = setInterval(updateClock, 1000);
				}


function random_letter(id){
				letter = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
				document.write(letter);
				return letter

}

function initialize() {
    var prop = {
    center:new google.maps.LatLng(0,0),
    zoom:1,
    };
    var map=new google.maps.Map(document.getElementById("map"), prop);
}

function loadcity() {
  var address = document.getElementById('address').value;
	function compare_strings(string1,string2){
		var lower_string1 = string1.toLowerCase()
		var lower_string2 = string2.toLowerCase()
		return lower_string1.localeCompare(lower_string2)
		document.write(lower_string1,lower_string2,lower_string1.localeCompare(lower_string2))
	}
	if( compare_strings(address[0],lettre1) != 0 ){
		alert("Wrong letter");
	}
	else{
		codeAddress();
	}
	function codeAddress(){}
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

//google.maps.event.addDomListener(window, 'load', initialize);

	//	    function get_distance(ville1, ville2) {
	//			dlon = lon2 - lon1
	//			dlat = lat2 - lat1
	//			a = (sin(dlat/2))^2 + cos(lat1) * cos(lat2) * (sin(dlon/2))^2
	//			c = 2 * atan2( sqrt(a), sqrt(1-a) )
	//			d = R * c (where R is the radius of the Earth)
	//	   }
