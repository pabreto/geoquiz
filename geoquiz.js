var geocoder;

function showDiv(toggle) {
				var e = document.getElementById(toggle);
				e.style.display = ((e.style.display!='none') ? 'none' : 'block');
				var deadline = new Date(Date.parse(new Date()) + 90 * 1000);
				initializeClock('clockdiv', deadline);
}

function hideDiv (toggle) {
			var e = document.getElementById(toggle);
		  e.style.display = 'none';
}

function initializeClock(id, endtime) {
					var clock = document.getElementById(id);
					var minutesSpan = clock.querySelector('.minutes');
					var secondsSpan = clock.querySelector('.seconds');

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
					function updateClock() {
						var t = getTimeRemaining(endtime);

						minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
						secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

						if (t.total <= 0) {
								clearInterval(timeinterval);
								alert("Time is over");
								hideDiv('cestparti')
						}
					}

					updateClock();
					var timeinterval = setInterval(updateClock, 1000);
				}


function random_letter(letter){
				letter = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
				document.write(letter);
				return letter

}

function initialize() {
    var prop = {
    center:new google.maps.LatLng(0,0),
    zoom:1,
    };
		geocoder = new google.maps.Geocoder();
    map=new google.maps.Map(document.getElementById("map"), prop);
}

function loadcity(letter) {
  var address = document.getElementById('address1').value;
	function compare_strings(string1,string2) {
		var lower_string1 = string1.toLowerCase()
		var lower_string2 = string2.toLowerCase()
		return lower_string1.localeCompare(lower_string2)
//		document.write(lower_string1,lower_string2,lower_string1.localeCompare(lower_string2))
	}
	if( compare_strings(address[0],letter) != 0 ){
		alert(address +" doesn't start with " + letter + ". Don't cheat!");
	}
	else{
		codeAddress();
	}

	function codeAddress(){
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
					label: address,
      });
		//	map.results[0].geometry.location(address)

		//	marker.showInfoWindow();
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
}

////function getDistanceFromLatLonInKm() {
  //var R = 6371; // Radius of the earth in km
//	d=google.maps.geometry.spherical(address.LatLng,)
//  var dLat = deg2rad(lat2-lat1);  // deg2rad below
//  var dLon = deg2rad(lon2-lon1);
//  var a =
  //  Math.sin(dLat/2) * Math.sin(dLat/2) +
    //Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
  //  Math.sin(dLon/2) * Math.sin(dLon/2)
    //;

//  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  //var d = R * c; // Distance in km
//  return distance;

//}

//function deg2rad(deg) {
//  return deg * (Math.PI/180)
//}

function computeScore(){
	var score = 0;
//	geocoder.geocode( { 'address': address}, function(results, status) {
//    if (status == 'OK') {
//    var score = map.results[0].geometry.location(address);

		//	marker.showInfoWindow();
//    } else {
//      alert('Geocode was not successful for the following reason: ' + status);
//    }
//  });
//	var score = google.maps.geometry.spherical(map.results[0].geometry.location(address),"[0,0]");

	document.write(score);
	return score;
}


//google.maps.event.addDomListener(window, 'load', initialize);
