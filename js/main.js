$(document).ready(function(){

	// logo turn animation
	$('#second-logo').on('click', '#img-logo', function(){
	    var el = $(this).clone().removeClass();
	    $(this).remove();
	    $('#second-logo').append(el);
	    el.addClass('logo-turner');
	});

	// menu Hamburger is here
	var link = $('.menu-link'),
			link_active = $('.menu-link-active'),
			menu = $('.main-menu'),
			menu_pressed = $('.main-menu .navigation a');

	link.click(function(){
		link.toggleClass('menu-link-active');
		menu.toggleClass('main-menu-active');
	});

	menu_pressed.click(function(){
		link.toggleClass('menu-link-active');
		menu.toggleClass('main-menu-active');
	});

	//svg to png
	if (!Modernizr.svg) {
	    $('img[src$=".svg"]').each(function()
	    {
	        $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
	    });
	}
});