$(function () {
	$('img,body').hide();
	$('body').fadeIn(500);
	$('img').fadeIn(1500);

	//menu
	function closeMenuIfMobile() {
		if (window.innerWidth <= 768) {
			$('#menu ul').fadeOut();
		}
	}

	var buttons = $('#menu').find('a');
	buttons.click(function () {
		var id = $(this).attr('href').substr(1);
		$('html,body').animate({ scrollTop: $("#" + id).offset().top - 45 }, 1000);
		closeMenuIfMobile();
		return false;
	});

	// mobile menu
	$('.menu-btn').click(function () {
		$('#menu ul').is(":visible") ? $('#menu ul').fadeOut() : $('#menu ul').fadeIn();
	});

	/*
	 * Homepage
	 */

	// hp slideshow
	$('.slideshow ul').cycle();

	// hp galeria - prepinanie
	var img = $('.galeria').find('li').find('img');

	img.click(function () {
		var jpg = $(this).attr('src').split('.');

		$('.curr_img').fadeOut('fast', function () {
			$(this).attr('src', jpg[0] + "." + jpg[1]).fadeIn('fast');
		});

	});

	// homepage galeria - slide sidebar
	function hpGallerySlide() {
		var ul = $('.sidebar ul');
		ul.find('li:first').delay('2000').animate({ marginTop: '-79%' }, 3000, function () {
			var li_removed = ul.find('li:first').detach();

			li_removed.css({ marginTop: 0 });
			li_removed.appendTo(ul);
			hpGallerySlide();
		});
	};
	hpGallerySlide();

	/*
	 * References
	 */

	// References - slide list of images under main image
	function referencesGallerySlide() {
		var side_ul = $('#ref .wrap_2 ul');
		side_ul.delay('2000').animate({ left: - 105 }, 2000, function () {
			side_ul.css({ left: 0 }).find('li:first').detach().appendTo(side_ul);
			referencesGallerySlide();
		});
	};
	referencesGallerySlide();

	// References  - mainslide
	$('.wrap_2 ul li img').click(function () {
		var class_id = $(this).attr('class');
		var ul = $('.wrap_1').find('ul');

		ul.find('li:visible').fadeOut('fast', function () {
			$('.wrap_1 ul').find('li[class=' + class_id + ']').fadeIn('fast');
		});
	});


	// Kontakt - detail certifikatu
	$('.csn-9001-logo a, .csn-9001-logo img').click(function (event) {
		event.preventDefault();
		$('.certifikat-detail').fadeIn('fast');

		$('.certifikat-detail *').click(function (event) {
			event.preventDefault();
			if (event.target.tagName != 'IMG') {
				$('.certifikat-detail').fadeOut('fast');
			}
		})
		// var class_id = $(this).attr('class');
		// var ul = $('.wrap_1').find('ul');

		// ul.find('li:visible').fadeOut('fast', function () {
		// 	$('.wrap_1 ul').find('li[class=' + class_id + ']').fadeIn('fast');
		// });
	});

})