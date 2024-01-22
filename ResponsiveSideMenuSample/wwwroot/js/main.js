
jQuery(document).ready(function() {
	"use strict";


/******************************************
   Newsletter popup
******************************************/
 
  jQuery('#myModal').appendTo("body");
          function show_modal(){
            jQuery('#myModal').modal('show');
          }

            jQuery('#myModal').modal({
            keyboard: false,
           backdrop:false
          }); 
		  
/******************************************
   Navigation
******************************************/		  

	jQuery("#nav > li").hover(function() {
		var el = jQuery(this).find(".jtv-menu-block-wrapper");
		el.hide();
		el.css("left", "0");
		el.stop(true, true).delay(150).fadeIn(300, "easeOutCubic");
	}, function() {
		jQuery(this).find(".jtv-menu-block-wrapper").stop(true, true).delay(300).fadeOut(300, "easeInCubic");
	});
	var scrolled = false;
	jQuery("#nav li.level0.drop-menu").mouseover(function() {
		if (jQuery(window).width() >= 740) {
			jQuery(this).children('ul.level1').fadeIn(100);
		}
		return false;
	}).mouseleave(function() {
		if (jQuery(window).width() >= 740) {
			jQuery(this).children('ul.level1').fadeOut(100);
		}
		return false;
	});

/******************************************
   Navigation
******************************************/		
	/* Mobile menu */
	jQuery("#jtv-mobile-menu").mobileMenu({
		MenuWidth: 250,
		SlideSpeed: 300,
		WindowsMaxWidth: 767,
		PagePush: true,
		FromLeft: true,
		Overlay: true,
		CollapseMenu: true,
		ClassName: "jtv-mobile-menu"
	});
	/* side nav categories */

	
	if (jQuery('.subDropdown')[0]) {
		jQuery('.subDropdown').on("click", function() {
			jQuery(this).toggleClass('plus');
			jQuery(this).toggleClass('minus');
			jQuery(this).parent().find('ul').slideToggle();
		});
	}
	jQuery.extend(jQuery.easing, {
		easeInCubic: function(x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function(x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
	});
	(function(jQuery) {
		jQuery.fn.extend({
			accordion: function() {
				return this.each(function() {
					function activate(el, effect) {
						jQuery(el).siblings(panelSelector)[(effect || activationEffect)](((effect == "show") ? activationEffectSpeed : false), function() {
							jQuery(el).parents().show();
						});
					}
				});
			}
		});
	})(jQuery);
	jQuery(function(jQuery) {
		jQuery('.accordion').accordion();
		jQuery('.accordion').each(function(index) {
			var activeItems = jQuery(this).find('li.active');
			activeItems.each(function(i) {
				jQuery(this).children('ul').css('display', 'block');
				if (i == activeItems.length - 1) {
					jQuery(this).addClass("current");
				}
			});
		});
	});
	
	/*  sticky header  */
	jQuery(window).scroll(function() {
		jQuery(this).scrollTop() > 1 ? jQuery("nav").addClass("jtv-sticky-header") : jQuery("nav").removeClass("jtv-sticky-header")
		
	});
});

/*  UItoTop */
jQuery.fn.UItoTop = function(options) {
	var defaults = {
		text: '',
		min: 200,
		inDelay: 600,
		outDelay: 400,
		containerID: 'toTop',
		containerHoverID: 'toTopHover',
		scrollSpeed: 1200,
		easingType: 'linear'
	};
	var settings = jQuery.extend(defaults, options);
	var containerIDhash = '#' + settings.containerID;
	var containerHoverIDHash = '#' + settings.containerHoverID;
	jQuery('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
	jQuery(containerIDhash).hide().on("click", function() {
		jQuery('html, body').animate({
			scrollTop: 0
		}, settings.scrollSpeed, settings.easingType);
		jQuery('#' + settings.containerHoverID, this).stop().animate({
			'opacity': 0
		}, settings.inDelay, settings.easingType);
		return false;
	}).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function() {
		jQuery(containerHoverIDHash, this).stop().animate({
			'opacity': 1
		}, 600, 'linear');
	}, function() {
		jQuery(containerHoverIDHash, this).stop().animate({
			'opacity': 0
		}, 700, 'linear');
	});
	jQuery(window).scroll(function() {
		var sd = jQuery(window).scrollTop();
		if (typeof document.body.style.maxHeight === "undefined") {
			jQuery(containerIDhash).css({
				'position': 'absolute',
				'top': jQuery(window).scrollTop() + jQuery(window).height() - 50
			});
		}
		if (sd > settings.min) jQuery(containerIDhash).fadeIn(settings.inDelay);
		else jQuery(containerIDhash).fadeOut(settings.Outdelay);
	});
};
/* mobileMenu */
var isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
jQuery(window).on("load", function() {
	if (isTouchDevice) {
		jQuery('#nav a.level-top').on("click", function(e) {
			jQueryt = jQuery(this);
			jQueryparent = jQueryt.parent();
			if (jQueryparent.hasClass('parent')) {
				if (!jQueryt.hasClass('menu-ready')) {
					jQuery('#nav a.level-top').removeClass('menu-ready');
					jQueryt.addClass('menu-ready');
					return false;
				} else {
					jQueryt.removeClass('menu-ready');
				}
			}
		});
	}
	jQuery().UItoTop();
});