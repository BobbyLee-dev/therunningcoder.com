$_$wp(1);
$_$w(1, 0), function ($) {
    $_$wf(1);
    if ($_$w(1, 1), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $_$w(1, 2), $('html').addClass('is--device');
        if ($_$w(1, 3), /iPad/i.test(navigator.userAgent)) {
            $_$w(1, 4), $('html').addClass('is--ipad');
        }
    } else {
        $_$w(1, 5), $('html').addClass('not--device');
    }
    $_$w(1, 6), $(function () {
        $_$wf(1);
        var $desktop = ($_$w(1, 7), 1090);
        var $tablet = ($_$w(1, 8), 768);
        var theme_path = ($_$w(1, 9), rm_data.tmplDirUri);
        var site_path = ($_$w(1, 10), rm_data.siteUrl);
        var bLazy = ($_$w(1, 11), new Blazy());
        $_$w(1, 12), $('.vr').owlCarousel({
            items: 1,
            lazyLoad: true,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });
        $_$w(1, 13), new WOW().init();
        $_$w(1, 14), $(window).load(function () {
            $_$wf(1);
            if ($_$w(1, 15), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $_$w(1, 16), $('.welcome-bg').removeClass('parallax');
            }
        });
        $_$w(1, 17), $('.same-height').matchHeight();
        $_$w(1, 18), $('a[href*=#]:not([href=#])').click(function () {
            $_$wf(1);
            if ($_$w(1, 19), ($_$w(1, 20), location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')) && ($_$w(1, 21), location.hostname == this.hostname)) {
                var target = ($_$w(1, 22), $(this.hash));
                $_$w(1, 23), target = target.length ? ($_$w(1, 24), target) : ($_$w(1, 25), $('[name=' + this.hash + ']'));
                if ($_$w(1, 26), target.length) {
                    if ($_$w(1, 27), $('body.home').length > 0) {
                        var padding = ($_$w(1, 28), 0);
                    } else {
                        var padding = ($_$w(1, 29), 0);
                    }
                    $_$w(1, 30), $('html,body').animate({ scrollTop: target.offset().top - padding }, 1500);
                    $_$w(1, 31), target.css('color', 'red');
                }
            }
        });
        var showChar = ($_$w(1, 32), 150);
        var ellipsestext = ($_$w(1, 33), '...');
        var moretext = ($_$w(1, 34), 'Continue Reading');
        var lesstext = ($_$w(1, 35), 'Collapse');
        $_$w(1, 36), $('.more').each(function () {
            $_$wf(1);
            var content = ($_$w(1, 37), $(this).html());
            if ($_$w(1, 38), content.length > showChar) {
                var c = ($_$w(1, 39), content.substr(0, showChar));
                var h = ($_$w(1, 40), content.substr(showChar, content.length - showChar));
                var html = ($_$w(1, 41), c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>');
                $_$w(1, 42), $(this).html(html);
            }
        });
        $_$w(1, 43), $('.morelink').click(function () {
            $_$wf(1);
            if ($_$w(1, 44), $(this).hasClass('less')) {
                $_$w(1, 45), $(this).removeClass('less');
                $_$w(1, 46), $(this).html(moretext);
            } else {
                $_$w(1, 47), $(this).addClass('less');
                $_$w(1, 48), $(this).html(lesstext);
            }
            $_$w(1, 49), $(this).parent().prev().toggle();
            $_$w(1, 50), $(this).prev().toggle();
            return $_$w(1, 51), false;
        });
        $_$w(1, 52), $('.written-testimonials ul li:nth-of-type(n+4)').addClass('hidden');
        $_$w(1, 53), $('<a href="#" class="button load-more"><span>Show more patient testimonials</span></a>').appendTo('.written-testimonials');
        $_$w(1, 54), $('.load-more').on('click', function (event) {
            $_$wf(1);
            $_$w(1, 55), event.preventDefault();
            $_$w(1, 56), $('.written-testimonials ul li').removeClass('hidden');
            $_$w(1, 57), $('.load-more').addClass('hidden');
        });
        function checkWidth() {
            $_$wf(1);
            var $window = ($_$w(1, 58), $(window));
            var windowsize = ($_$w(1, 59), $window.width());
            if ($_$w(1, 60), windowsize >= 1090) {
                $_$w(1, 61), $('.home-smile-trans-header').prependTo('.home-examples .transformations');
            } else {
                $_$w(1, 62), $('.home-smile-trans-header').prependTo('.home-examples');
            }
        }
        $_$w(1, 63), checkWidth();
        $_$w(1, 64), $(window).resize(checkWidth);
        $_$w(1, 65), $('.cat-options').on('click', function (event) {
            $_$wf(1);
            $_$w(1, 66), event.preventDefault();
            $_$w(1, 67), $(this).next().slideToggle();
            $_$w(1, 68), $_$tracer.log('click', '', 1, 68);
        });
        var url = ($_$w(1, 69), window.location.href);
        $_$w(1, 70), $('.main-menu a[href="' + url + '"]').addClass('current_menu_item');
    });
}(jQuery);
var pageToFindH2s = ($_$w(1, 71), document.querySelector('.page-254'));
if ($_$w(1, 72), pageToFindH2s) {
    var h2s = ($_$w(1, 73), document.getElementsByTagName('h2'));
    var counterEl = ($_$w(1, 74), document.createElement('div'));
    var numberOFH2s = ($_$w(1, 75), h2s.length);
    var count = ($_$w(1, 76), document.createTextNode(numberOFH2s));
    var lineBreak = ($_$w(1, 77), document.createElement('br'));
    $_$w(1, 78), counterEl.classList.add('h2-counter');
    $_$w(1, 79), counterEl.appendChild(count);
    $_$w(1, 80), counterEl.appendChild(lineBreak);
    $_$w(1, 81), pageToFindH2s.appendChild(counterEl);
    var currentCount = ($_$w(1, 82), document.createElement('div'));
    $_$w(1, 83), currentCount.classList.add('current-count');
    $_$w(1, 84), counterEl.appendChild(currentCount);
    $_$w(1, 85), window.onscroll = function () {
        $_$wf(1);
        var closestH2 = ($_$w(1, 86), document.body.scrollHeight);
        var currentH2num = ($_$w(1, 87), 0);
        for (var i = 0; $_$w(1, 88), i < h2s.length; i++) {
            var distanceToTop = ($_$w(1, 89), h2s[i].getBoundingClientRect().top);
            if ($_$w(1, 90), ($_$w(1, 91), distanceToTop > 0) && ($_$w(1, 92), distanceToTop < closestH2)) {
                $_$w(1, 93), closestH2 = distanceToTop;
                $_$w(1, 94), currentCount.innerHTML = i + 1;
            }
        }
    };
}
var testWrap = ($_$w(1, 95), document.querySelector('.iframe-test')), imgToReplace = document.querySelector('.iframe-test a');
function loadVideo(event) {
    $_$wf(1);
    $_$w(1, 96), event.preventDefault();
    $_$w(1, 97), testWrap.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0uxlgePNkPY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    $_$w(1, 98), imgToReplace.removeEventListener('click', loadVideo, false);
}
if ($_$w(1, 99), testWrap) {
    $_$w(1, 100), imgToReplace.addEventListener('click', loadVideo, false);
}
const restRoot = ($_$w(1, 101), 'https://www.personalenhancementcenter.com/rmg__api/case/?in_cat=body/coolsculpting');
let url = ($_$w(1, 102), `${ restRoot }`);
$_$w(1, 103), fetch(url).then(response => {
    $_$wf(1);
    return $_$w(1, 104), response.json();
}).then(cases => {
    $_$wf(1);
    $_$w(1, 105), $_$tracer.log(cases, 'cases', 1, 105);
    return $_$w(1, 106), displayPost(cases);
}).catch(error => {
    $_$wf(1);
    $_$w(1, 107), $_$tracer.log(error, 'error', 1, 107);
});
function displayPost(cases) {
    $_$wf(1);
    $_$w(1, 108), cases.forEach(item => {
        $_$wf(1);
        var content = ($_$w(1, 109), document.querySelector('body'));
        var before = ($_$w(1, 110), document.createElement('img'));
        var after = ($_$w(1, 111), document.createElement('img'));
        var caseImages = ($_$w(1, 112), item.images);
        $_$w(1, 113), caseImages.forEach(img => {
            $_$wf(1);
            $_$w(1, 114), before.src = img.before_image_path_sml;
            $_$w(1, 115), after.src = img.after_image_path_sml;
            $_$w(1, 116), content.appendChild(before);
            $_$w(1, 117), content.appendChild(after);
        });
    });
}
const allImgs = ($_$w(1, 118), document.querySelectorAll('img'));
const $_$wvd120 = $_$w(1, 119), findBrokenImgs = () => {
        $_$wf(1);
        let brokenCounter = ($_$w(1, 120), 0);
        const $_$wvd122 = $_$w(1, 121), brokenImgs = () => {
                $_$wf(1);
                $_$w(1, 122), allImgs.forEach(img => {
                    $_$wf(1);
                    if ($_$w(1, 123), !img.complete) {
                        $_$w(1, 124), brokenCounter++;
                    }
                });
                $_$w(1, 125), alert(`There are ${ brokenCounter } Broken images on this page`);
            };
        return $_$w(1, 126), brokenImgs;
    };
if ($_$w(1, 127), allImgs.length > 1) {
    const alertBrokenImgs = ($_$w(1, 128), findBrokenImgs());
    $_$w(1, 129), alertBrokenImgs();
}
$_$wpe(1);