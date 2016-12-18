$(function() {

	$(".rslides").responsiveSlides({
		// nav: true,
		// pager: true,



	});

		$(".navigation > ul > li").hover(
            function(){ $(this).addClass('active-top') },
            function(){ $(this).removeClass('active-top') }
		)


    var heightLogo = $('#logo').outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= heightLogo) {
            $('.header_top').addClass('stickytop');
            if (!$('*').is('#newDiv')) {
                $('ul.rslides').before(function () {
                    return "<div id='newDiv' style='height: "+$('.header_top').outerHeight()+ "px' ></div>"

                });
            }


        } else {
            $('#newDiv').remove();
            $('.header_top').removeClass('stickytop');
        }
    });


	//SVG Fallback

	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail


	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


