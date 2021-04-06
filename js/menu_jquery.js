
function blockMenu(){
	$(".block_menu").each(function(e){

		$(this).prepend('<div id="menu-button"><span class="fa fa-navicon" style="font-size: 21px"></span></div>');
		$(this).find("#menu-button").on('click', function(){
			var menu = $(this).next('ul');
			if (menu.hasClass('open')) {
				menu.removeClass('open');
			}
			else {
				menu.addClass('open');
			}
		});
		$(this).find("ul li").click(function(){
			$(this).parent().removeClass('open');
		});

		// Add the width of each li to the total menu width
		var mw = 0;
		$(this).children("ul").children("li").each(function(){
			mw += $(this).width();
		});

		// Get the width of the menu's parent
		var mpw = $(this).parent().width();
		console.log(mw, mpw);

		// If the menu is too big for its parent, convert it to a mobile menu
		if(mw >= mpw){
			$(this).addClass("mobile");
		}

		$(".block_menu").css("visibility", "visible");

	});
}

$(window).load(blockMenu);