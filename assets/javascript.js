$(function(){
	$('img,body').hide();
	$('body').fadeIn(500);
	$('img').fadeIn(1500);

	//menu
	function goToByScroll(id){
      $('html,body').animate({scrollTop: $("#"+id).offset().top - 45},1000);
	}

	var buttons = $('#menu,#fixed_menu').find('a');
	buttons.click(function()
		{
			var id = $(this).attr('href').substr(1);
			goToByScroll(id);

			return false;
		});

	// Menu lista mala
	$(window).scroll(function () {
  		var top = window.scrollY+15;
  		if (top > 100) { $('#fixed_menu').fadeIn();  };
  		if (top < 100) { $('#fixed_menu').fadeOut();  };

	});

	//slideshow
	$('.slideshow').cycle();

	//galeria - prepinanie
	var img = $('.galeria').find('li').find('img');

	img.click(function(){
		var jpg = $(this).attr('src').split('.');

		$('.curr_img').fadeOut('fast',function(){
			$(this).attr('src',jpg[0]+"."+jpg[1]).fadeIn('fast');
		});

	});

	//galeria - slide sidebar
	var ul = $('.sidebar').find('ul');

	function slide () {
		ul.delay('2000').animate({top: - 85},3000,function(){
			var li_removed = ul.find('li:first').detach();

			ul.css({top: 0});
			li_removed.appendTo(ul);
			slide();
		});
	};
	slide();


/**
**	Cennik
**/
	$('#cennik .main').hide();
	$('#cennik').animate({padding: "15"},'slow');
	$('#cennik h2').animate({marginLeft: 312},'slow');
	$('div.cennik').fadeOut();

	var state = false;
	$('#cennik h2').click(function(){
		$('#cennik .main').slideToggle("slow");
		if(state) {
			$('#cennik').animate({padding: "15"},'slow');
			$('#cennik h2').animate({marginLeft: 312},'slow');
			$('div.cennik').fadeOut();
		}else{
			$('#cennik').animate({padding: "40"},'slow');
			$('#cennik h2').animate({marginLeft: 0},'slow');
			$('div.cennik').fadeIn();
		};
		state = !state;
	});

 /**
 **	Referencie tabulka
 **/

 	$('#referencie_table').hide();

/**
 **	Google iframe
 **/

 	var google_iframe = $('#kontakt .google_iframe');
 	var mapa_button	  = $('#kontakt .mapa h2');
 	var google_iframe_detach = google_iframe.detach();
 	var map_show_state = 0;

 	mapa_button.click(function  () {

 		if (!map_show_state) {
 			google_iframe_detach.appendTo('#kontakt .mapa').hide();
 		}
 		map_show_state = !map_show_state;

 		google_iframe.find('iframe').css({opacity: "0"});
 		google_iframe.slideToggle('slow',function () {
 			google_iframe.find('iframe').animate({opacity: "1"},'slow');
 		});
 	});

})