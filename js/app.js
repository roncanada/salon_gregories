$(document).ready(function() {
	console.log('dom ready');

	// Create, append class, and links to NavBar
	var navLinks = $("#navLinks");
	if (navLinks) {

		console.log(navLinks);
		var table = jQuery('<table/>')
		var tbody = jQuery('<tbody/>').appendTo(table)
		var tr = jQuery('<tr/>').appendTo(tbody)

		var items = [
			{
				title: "Home",
				href: "index.html"
			}, {
				title: "Pricing",
				href: "pricing.html"
			}, {
				title: "Stylists",
				href: "stylists.html"
			}, {
				title: "Our Work",
				href: "gallery.html"
			}, {
				title: "Contact",
				href: "contact.html"
			}
		]

		for (var i = 0; i < items.length; i++) {
			var currentItem = items[i];
			var td = jQuery('<td/>').appendTo(tr);
			var a = jQuery('<a/>').attr('href', currentItem.href).addClass('navLink').appendTo(td);
			var p = jQuery('<p/>').text(currentItem.title).appendTo(a);
			console.log(td);
		}

		table.appendTo(navLinks);
	} else {
		console.log("Couldn't set up nav bar: no #navLinks element found.")
	}

	//Validate and run the contact form
	$('#submitButton').click(function() {
		var valid = true;
		$(".form-input").each(function() {
			if ($(this).val().length == 0 && valid) {
				alert("Please fill in the " + $(this).attr('display-name') + " field before continuing.");
				valid = false;
			}
		});
		if (valid) {
			$("#contactForm").submit();
		}
	})

	//Polaroid java script 
	new Photostack(document.getElementById('photostack-3'), {
		callback: function(item) {
		}
	});
})

	//Google Maps API on contact page
	function initialize() {
		var mapCanvas = document.getElementById('googleMaps');
		var salonGregories = new google.maps.LatLng(33.612422,-117.874326);
		var mapOptions = {
			center: new google.maps.LatLng(33.612422,-117.874326),
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions)

		var marker = new google.maps.Marker({
		    position: salonGregories,
		    map: map,
		    title: 'Salon Gregories'  
  		});
		$('#googleMaps').click(function() {
			window.open('http://maps.apple.com/?q=SalonGregories Newport Beach');
		})
	}
	google.maps.event.addDomListener(window, 'load', initialize);

