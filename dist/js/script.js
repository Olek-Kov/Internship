$(document).ready(function(){



	$(".balance_box__header_filter_btn").click(function(e) {
		e.preventDefault();
		$(".balance_box__header_filters").toggle();
		$(this).toggleClass("active");
	});

	$(".show_positions_btn").click(function(e) {
		e.preventDefault();
		$(".show_positions_filter").toggle();
		$(this).toggleClass("active");
	});


	$(".balance_box__tab_link").each(function(i) {
		$(this).attr("href", "#tab" + i);
	});

	$(".balance_box__container_content").each(function(i) {
		$(this).attr("id", "tab" + i);
	});



	$(".show_positions_btn").click(function(e){
		e.preventDefault();		
		$('.show_positions_btn img').toggleClass('rotate');
    	$('.show_positions_btn img').toggleClass('rotate-reset');
	});



	$(".balance_box__tab li").click(function(e) {
		e.preventDefault();
		$(".balance_box__tab .active").removeClass("active");
		$(this).addClass("active");
		var tab = $(this).find("a").attr("href");
		$(".balance_box__container_content").not(tab).css({"display":"none"});
		$(tab).fadeIn(500);

	});
});


