var cntWd, sldWd, tb;
    $(function() {
        
        cntWd = $('#section-1').innerWidth();
        tb = $('#section-1__panorama');
        sldWd = tb.outerWidth();
        
        $('#section-1').mousemove(function(e)
        {
            tb.css({left: ((cntWd - sldWd)*((e.pageX / cntWd).toFixed(3))).toFixed(1) +"px" });
        });
});

$('.slide-1__items').on('click', 'a', function(){
	$('.section-1__about-block').addClass('active');
	$('.main-container').addClass('show');
	$('.footer-container').addClass('show');
});

$(window).scroll(function(){
	// var titleAnimate = $('.section-3__content').offset().bottom;
	if ($(window).scrollTop() > 3500){
		$('.section-4__title-animate-1').addClass('show');
		$('.section-4__title-animate-2').addClass('show');
	}
});

$('.footer-nav').on('click', 'a', function(even){
	even.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 700);
});