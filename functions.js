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
					var daysSpan = clock.querySelector('.days');
					var hoursSpan = clock.querySelector('.hours');
					var minutesSpan = clock.querySelector('.minutes');
					var secondsSpan = clock.querySelector('.seconds');

					function updateClock() {
						var t = getTimeRemaining(endtime);

						daysSpan.innerHTML = t.days;
						hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
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
				let letter = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
				document.write(letter);
		   }
		   
//			function initMap() {
//				map = new google.maps.Map(document.getElementById('map'), {
//					zoom: 7,
//					center: {lat: 41.591158, lng: 1.520862}
//				};
//			}
			
	//	    function get_distance(ville1, ville2) {
	//			dlon = lon2 - lon1 
	//			dlat = lat2 - lat1 
	//			a = (sin(dlat/2))^2 + cos(lat1) * cos(lat2) * (sin(dlon/2))^2 
	//			c = 2 * atan2( sqrt(a), sqrt(1-a) ) 
	//			d = R * c (where R is the radius of the Earth)
	//	   }
	
	