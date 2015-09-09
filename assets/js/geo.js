<script>
	$(document).ready(function() {
			$.getJSON("http://www.telize.com/geoip?callback=?",
				function(json) {
		    		document.write("Geolocation information for IP address : ", json.ip);
		    		document.write("Country : ", json.country);
		    		document.write("Latitude : ", json.latitude);
			    	document.write("Longitude : ", json.longitude);
				}
			);
	});
</script>