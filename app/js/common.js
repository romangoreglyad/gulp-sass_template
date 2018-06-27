// Active menu links
jQuery(window).scroll(function(){
	var $sections = $('section');
	$sections.each(function(i,el){
		var top  = $(el).offset().top-40;
		var bottom = top +$(el).height();
		var scroll = $(window).scrollTop();
		var id = $(el).attr('id');
		if( scroll > top && scroll < bottom){
			$('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

		}
	})
});

// Magnific popup init
jQuery(document).ready(function($) {
	$('.popup-form').magnificPopup({
			type: 'inline',
			focus: '#f-name'
	});
});

$(function() {

	//Email Ajax send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Форма отправлена. Спасибо за обращение!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 300);
		});
		return false;
	});
	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	// Sticky Nav-bar and Scroll-to-top button
	$(window).scroll(function() {
		if($(this).scrollTop() >= 87) {
			$('.topmenu').addClass('stickytop');
			$('.scrolltop').addClass('visible');

		}
		else{
			$('.topmenu').removeClass('stickytop');
			$('.scrolltop').removeClass('visible');
		}
	});

	// Smooth scroll for menu links
	$("body").on("click",".topmenu li .topmenu-link, .scrolltop", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top - 0;
		$('body,html').animate({scrollTop: top}, 800);
	});

});



// Aos.js for animations
AOS.init();