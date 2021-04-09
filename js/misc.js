var fixed_header = 0;

var fixed_menu = 1;

//document.domain = "sionsoft.co.za";
$(function() {
  // parallax stuff

  if (window.screen.width > 700) {
    $.stellar({
      horizontalScrolling: false,
      horizontalOffset: 0,
      reponsive: true,
      hideDistantElements: false
    });
  }

  if (fixed_header == 1) {
    $(window).load(function() {
      $("#page-wrapper").css({
        "margin-top": $("#site-header").outerHeight(),
        position: "fixed"
      });
    });
  }
  var name = "#blockmenu";
	var menuYloc = null;
	
  $(document).ready(function(){
    menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
    $(window).scroll(function () { 
      offset = menuYloc+$(document).scrollTop()+"px";
      $(name).animate({top:offset},{duration:500,queue:false});
    });
  }); 
//   if (fixed_menu == 1 && $("#blockmenu").length) {
//     var mtop = $("#blockmenu").offset().top;
//      $(window).scroll(function() {
       
//     //   if ($(window).scrollTop() > mtop) {
//     //     $("#blockmenu").addClass("fixed_menu");
//     //     if (
//     //       $("#blockmenu")
//     //         .parent()
//     //         .css("background-color").length == 0
//     //     )
//     //       $("#blockmenu")
//     //         .parentsUntil("[class*=row]")
//     //         .css("background", "inherit");
//     //   } else {
//     //     $("#blockmenu").removeClass("fixed_menu");
//     //   }
      
//       animateBlock();
//     });
//   }

//   //animateBlock();
// });
function getCookie(c_name) {
  var c_value = " " + document.cookie;

  var c_start = c_value.indexOf(" " + c_name + "=");

  if (c_start == -1) {
    c_value = null;
  } else {
    c_start = c_value.indexOf("=", c_start) + 1;

    var c_end = c_value.indexOf(";", c_start);

    if (c_end == -1) {
      c_end = c_value.length;
    }

    c_value = unescape(c_value.substring(c_start, c_end));
  }

  return c_value;
}

function deleteCookie(c_name) {
  date = new Date();

  date.setDate(date.getDate() - 1);

  document.cookie = escape(c_name) + "=;expires=" + date;
}

var name = "#blockmenu";

var menuYloc = null;

$(document).ready(function() {
  menuYloc = parseInt(
    $(name)
      .css("top")
      .substring(
        0,
        $(name)
          .css("top")
          .indexOf("px")
      )
  );

  $(window).scroll(function() {
    var offset = -25 + menuYloc + $(document).scrollTop() + "px";

    $(name).animate(
      {
        top: offset
      },
      {
        duration: "slow",
        queue: false
      }
    );
  });

  $(".infobox_header.dropdown").click(function() {
    $(this)
      .siblings(".infobox_content")
      .slideToggle();
  });
  $(".infobox_header.popup").click(function() {
    $(this)
      .siblings(".infobox_content")
      .fadeIn();
  });

  $(".closeButton").click(function() {
    $(this)
      .parent()
      .slideUp();
  });
  $(".button").hover(
    function() {
      var top = $(this).find(".top");
      var bot = $(this).find(".bottom");
      if ($(this).hasClass("fade")) {
        top.css("opacity", "1");
        bot.css("opacity", "0");
      } else if ($(this).hasClass("slideLeft")) {
        top.css("left", "0");
        bot.css("left", "-100%");
      } else if ($(this).hasClass("slideRight")) {
        top.css("left", "0");
        bot.css("left", "100%");
      } else if ($(this).hasClass("slideUp")) {
        top.css("top", "0");

        bot.css("top", "-100%");
      } else if ($(this).hasClass("slideDown")) {
        top.css("top", "0");

        bot.css("top", "100%");
      }
    },
    function() {
      var top = $(this).find(".top");

      var bot = $(this).find(".bottom");

      if ($(this).hasClass("fade")) {
        top.css("opacity", "0");

        bot.css("opacity", "1");
      } else if ($(this).hasClass("slideLeft")) {
        top.css("left", "100%");

        bot.css("left", "0");
      } else if ($(this).hasClass("slideRight")) {
        top.css("left", "-100%");

        bot.css("left", "0");
      } else if ($(this).hasClass("slideUp")) {
        top.css("top", "100%");

        bot.css("top", "0");
      } else if ($(this).hasClass("slideDown")) {
        top.css("top", "-100%");

        bot.css("top", "0");
      }
    }
  );
  

  /* Every time the window is scrolled ... */
  $(window).scroll(animateBlock);
  animateBlock();
});

function animateBlock() {
  /* Check the location of each desired element */
  $(".animated").each(function(i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 10;

    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */

    if (bottom_of_window >= bottom_of_object) {
      var animation = $(this).attr("data-animate");

      $(this).animate(
        {
          opacity: "1"
        },
        0
      );
      $(this).addClass(animation);
    }
  });
}

$(document)
  .on("click", 'a[href*="#"]', function() {
    if (this.hash && this.pathname === location.pathname) {
      //$.bbq.pushState( '#' + this.hash.slice(1) );

      $.smoothScroll({
        scrollTarget: "#" + this.hash.slice(1),

        speed: 2000,

        easing: "swing",

        offset: -$("#menu_container").height()
      });

      return false;
    }
  })
  .ready(function() {
    //alert($('#menu_container').height());

    $(window).bind("hashchange", function(event) {
      var tgt = location.hash.replace(/^#\/?/, "");

      if (document.getElementById(tgt)) {
        $.smoothScroll({
          scrollTarget: "#" + tgt,

          speed: 2000,

          easing: "swing",

          offset: -$("#menu_container").height()
        });
      }
    });

    //$(window).trigger('hashchange');
  });

$("a").on("click", function(event) {
  var target = $(this).attr("href");

  if (target.indexOf("/#") != -1) {
    target = target.replace("/", "");

    if (history.pushState) {
      history.pushState(null, null, target);
    } else {
      location.hash = target;
    }

    window.location.hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top
      },
      1000
    );
  }
});
