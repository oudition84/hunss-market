// �쒕뜡slick
$.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function () {
        $(this).children(selector).sort(function (childA, childB) {
            // * Prevent last slide from being reordered
            if ($(childB).index() !== $(this).children(selector).length - 1) {
                return Math.round(Math.random()) - 0.5;
            }
        }.bind(this)).detach().appendTo(this);
    });

    return this;
};

$(document).ready(function () {
    //no cookie
    if (typeof $.cookie('lang') === 'undefined') {
        $.cookie('lang', 'en');
        $(".LANG .EN").addClass('activeL');
        $(".ENG").show();
        $(".KOR").hide();
    };
    if ($.cookie('lang') == 'en') {
        $(".LANG .EN").addClass('activeL');
        $(".ENG").show();
        $(".KOR").hide();
    };
    if ($.cookie('lang') == 'kr') {
        $(".LANG .KR").addClass('activeL');
        $(".ENG").hide();
        $(".KOR").show();
    };
});

$(".LANG .KR").click(function () {
    $.cookie('lang', 'kr');
    $(this).addClass('activeL').siblings().removeClass('activeL');
    window.location.reload();
});
$(".LANG .EN").click(function () {
    $.cookie('lang', 'en');
    $(this).addClass('activeL').siblings().removeClass('activeL');
    window.location.reload();
});

$(document).ready(function () {
    $("html, body").stop().animate({
        scrollTop: 0
    });
    $("#no-fouc").animate({
        "opacity": "1"
    }, 500);
    setTimeout(function () {
        mediaSize();
    }, 200);
});

function mediaSize() {
    $('iframe[src*="youtube"]').parent().fitVids();
    if (window.matchMedia('(max-width: 640px)').matches) {
        var clicked = false;
        var current = $(window).scrollTop();
        $('.MENUBTN, .MENU ul li a, .LANG span').click(function () {
            if (clicked == false && window.matchMedia('(max-width: 640px)').matches) {
                $('.MENUBTN .active').css({
                    display: "none"
                });
                $('.MENUBTN .disable, .MENU').css({
                    display: "block"
                });
                $(window).scroll(function () {
                    $(window).scrollTop(current);
                });
                $(".MENU li").fitText(0.7);
                clicked = true;
            } else if (clicked == true && window.matchMedia('(max-width: 640px)').matches) {
                $('.MENUBTN .active').css({
                    display: "block"
                });
                $('.MENUBTN .disable, .MENU').css({
                    display: "none"
                });
                $(window).off('scroll');
                clicked = false;
            }
        });
        $(".MENU").css({
            display: "none"
        });
        $(".MENU li").fitText(0.7);
        $(".Bottom, h1, .ViewAll, .DES").fitText(2.4);
        $(".Description, .InstaItem p").fitText(1.9);
        $(".Description2, .Related").fitText(2);
        $(".Project, .WorkTitle p, .about6, .SER h2").fitText(1.3);
        $(".WorkTitle h2, .about4, .TRI h2").fitText(0.5);
        $(".Half2 span, .WorkTitle span, .about4 p").fitText(1.2);
        $(".HomeTitle").fitText(0.55);
        $(".SubTitle").fitText(0.26);
        $(".members p").fitText(1.3);
        $(".TRI p").fitText(0.8);
        $(".TRI .Light").fitText(1);
        $(".LANG").fitText(0.025);
    } else if (window.matchMedia('(max-width: 960px)').matches) {
        $('.MENU').css({
            display: "block"
        });
        $(".MENU li").fitText(0.41);
        $(".Bottom, h1, .ViewAll, .Related, .DES").fitText(3);
        $(".Description, .WorkTitle p, .about6, .InstaItem p").fitText(2);
        $(".Description2").fitText(2.5);
        $(".Project, .members p, .TRI .Light, .SER h2").fitText(1.3);
        $(".WorkTitle h2, .about4, .TRI h2").fitText(0.6);
        $(".WorkTitle span, .about4 p").fitText(1.6);
        $(".Half2 span").fitText(1.7);
        $(".HomeTitle").fitText(0.6);
        $(".SubTitle").fitText(0.31);
        $(".TRI p").fitText(1);
        $(".LANG").fitText(0.6);
    } else if (window.matchMedia('(max-width: 1280px)').matches) {
        $('.MENU').css({
            display: "block"
        });
        $(".MENU li").fitText(0.41);
        $(".Bottom, .ViewAll, .Related, .DES").fitText(3.4);
        $(".Description, .InstaItem p").fitText(2.1);
        $(".Description2").fitText(2.6);
        $("h1").fitText(4);
        $(".Project, .members p, .SER h2").fitText(1.6);
        $(".WorkTitle h2, .about4, .TRI h2").fitText(0.7);
        $(".WorkTitle p, .about6").fitText(2.7);
        $(".WorkTitle span").fitText(2);
        $(".Half2 span, .about4 p, .TRI .Light").fitText(1.75);
        $(".HomeTitle").fitText(0.65);
        $(".SubTitle").fitText(0.36);
        $(".TRI p").fitText(1.25);
        $(".LANG").fitText(0.6);
    } else if (window.matchMedia('(max-width: 1600px)').matches) {
        $('.MENU').css({
            display: "block"
        });
        $(".MENU li").fitText(0.41);
        $(".Bottom").fitText(4);
        $(".Description, .about4 p, .InstaItem p").fitText(2.2);
        $(".Description2").fitText(2.7);
        $("h1").fitText(4.4);
        $(".Project, .members p, .SER h2").fitText(1.7);
        $(".ViewAll, .Related, .DES").fitText(3.7);
        $(".WorkTitle h2, .about4, .TRI h2").fitText(0.8);
        $(".WorkTitle p, .about6").fitText(2.8);
        $(".WorkTitle span").fitText(2.2);
        $(".Half2 span, .TRI .Light").fitText(1.8);
        $(".HomeTitle").fitText(0.7);
        $(".SubTitle").fitText(0.41);
        $(".TRI p").fitText(1.3);
        $(".LANG").fitText(0.6);
    } else if (window.matchMedia('(max-width: 1920px)').matches) {
        $('.MENU').css({
            display: "block"
        });
        $(".MENU li").fitText(0.41);
        $(".Bottom").fitText(4.4);
        $(".Description, .about4 p, .InstaItem p").fitText(2.3);
        $(".Description2").fitText(2.8);
        $("h1").fitText(4.5);
        $(".Project, .SER h2").fitText(1.7);
        $(".ViewAll, .Related, .DES").fitText(3.8);
        $(".WorkTitle h2, .about4, .TRI h2").fitText(0.9);
        $(".WorkTitle p, .about6").fitText(2.9);
        $(".WorkTitle span").fitText(2.4);
        $(".Half2 span, .members p, .TRI .Light").fitText(1.85);
        $(".HomeTitle").fitText(0.75);
        $(".SubTitle").fitText(0.46);
        $(".TRI p").fitText(1.35);
        $(".LANG").fitText(0.6);
    } else if (window.matchMedia('(max-width: 2240px)').matches) {
        $('.MENU').css({
            display: "block"
        });
        $(".MENU li").fitText(0.41);
        $(".Bottom").fitText(5);
        $(".Description, .about4 p, .InstaItem p").fitText(2.4);
        $(".Description2").fitText(2.9);
        $("h1").fitText(4.6);
        $(".Project, .SER h2").fitText(1.75);
        $(".ViewAll, .Related, .DES").fitText(3.9);
        $(".WorkTitle h2, .about4, .TRI h2").fitText(1);
        $(".WorkTitle p, .about6").fitText(3);
        $(".WorkTitle span").fitText(2.6);
        $(".Half2 span, .members p, .TRI .Light").fitText(1.9);
        $(".HomeTitle").fitText(0.8);
        $(".SubTitle").fitText(0.51);
        $(".TRI p").fitText(1.4);
        $(".LANG").fitText(0.6);
    } else {
        $('.MENU').css({
            display: "block"
        });
        $(".MENU li").fitText(0.41);
        $(".Bottom").fitText(5.4);
        $(".Description").fitText(2.5);
        $(".Description2").fitText(3);
        $("h1").fitText(4.7);
        $(".Project, .SER h2").fitText(1.75);
        $(".ViewAll, .Related, .DES").fitText(4);
        $(".WorkTitle h2").fitText(1.08);
        $(".WorkTitle p, .about6").fitText(3.1);
        $(".WorkTitle span").fitText(2.78);
        $(".Half2 span, .members p, .TRI .Light").fitText(1.95);
        $(".HomeTitle").fitText(0.85);
        $(".SubTitle").fitText(0.56);
        $(".Description, .about4 p, .InstaItem p").fitText(2.2);
        $(".WorkTitle h2, .about4, .TRI h2").fitText(0.9);
        $(".TRI p").fitText(1.45);
        $(".LANG").fitText(0.6);
    };
    $('.OFFICE').randomize().slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1700,
    });
    $('.MenuSlider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1700,
    });
    var WTXT = $('.ScrollContents span').width() * 3;
    $('.ScrollContents').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        variableWidth: true,
        speed: WTXT,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: 'linear'
    });
    $('.ScrollContents2').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        infinite: true,
        slidesToShow: 4,
        speed: 2000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
    });
};

window.addEventListener('resize', mediaSize, false);
$('.no-select').bind('dragstart', function (event) {
    event.preventDefault();
});
$("#exploration-grid a").click(function (e) {
    window.location.hash = $(this).attr("id");
    e.preventDefault();

    //set the "active" class as appropriate
    $('#exploration-grid a').removeClass('active');
    $(this).addClass('active');
});
