$(document).ready(function() {
	console.log('dom ready');



	//allows the background image to resize with the window
	//for responsive design

	// $(window).resize(function() {
	// 	var imageWidth = 1800;
	// 	var imageHeight = 2700;
	// 	var imageRatio = imageHeight / imageWidth;

	// 	var mainWidth = window.innerWidth;
	// 	var mainHeight = (imageHeight * mainWidth) / imageWidth;

	// 	$('main').css('height', mainHeight + 'px');
	// });




	//fade in main

	// $(window).load(function() {
	// 	$('body').fadeIn(1200)
	// 	$(window).resize()
	// });
	



	//Validate and run the contact form
	$('#submitButton').click(function(){
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

	new Photostack( document.getElementById( 'photostack-3' ), {
				callback : function( item ) {
					//console.log(item)
				}
			} );


	

})