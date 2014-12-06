$(document).ready(function() {
	//all code here
	//$ = jquery
	//document = selector

	//allows the background image to resize with the window
	//for responsive design
	$(window).resize(function() {
		var imageWidth = 1800;
		var imageHeight = 2700;
		var imageRatio = imageHeight / imageWidth;

		var mainWidth = window.innerWidth;
		var mainHeight = (imageHeight * mainWidth) / imageWidth;

		$('main').css('height', mainHeight + 'px');
	});

	//fade out load page, fade in main
	$(window).load(function() {
		setTimeout(function() {
			$('.loading').fadeOut(400, function() {

				$(window).resize()

				$('main').fadeIn(1200)
			})
		}, 3000);
	});

	//allows you to show or hide
	//the nav bar
	// $('#navButton').click(function() {
	// 	$('nav').fadeToggle(1200, function() {
	// 		$('#navButton').hide('opacity' .5);
	// 	})
	// });

	

})