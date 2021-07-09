/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
 *
 */


declare let jQuery: any;

export function correctHeight() {

  const pageWrapper = jQuery('#page-wrapper');
  const navbarHeight = jQuery('nav.navbar-default').height();
  const wrapperHeight = pageWrapper.height();

  if (navbarHeight > wrapperHeight) {
    pageWrapper.css('min-height', navbarHeight + 'px');
  }

  if (navbarHeight <= wrapperHeight) {
    if (navbarHeight < jQuery(window).height()) {
      pageWrapper.css('min-height', jQuery(window).height() + 'px');
    } else {
      pageWrapper.css('min-height', navbarHeight + 'px');
    }
  }

  if (jQuery('body').hasClass('fixed-nav')) {
    if (navbarHeight > wrapperHeight) {
      pageWrapper.css('min-height', navbarHeight + 'px');
    } else {
      pageWrapper.css('min-height', jQuery(window).height() - 60 + 'px');
    }
  }
}


export function detectBody(isDefaultCustomer: any) {
  if (jQuery(document).width() < 769) {
    if (isDefaultCustomer || isDefaultCustomer === undefined || typeof isDefaultCustomer === 'undefined') {
      jQuery('body').removeClass('body-small');
      jQuery('.sidebar-collapse').css('display', 'none !important');
    } else {
      jQuery('body').addClass('body-small');
    }
  } else {
    if (isDefaultCustomer || isDefaultCustomer === undefined || typeof isDefaultCustomer === 'undefined') {
      jQuery('.sidebar-collapse').css('display', 'none !important');
    }
    jQuery('body').removeClass('body-small');
  }
}


export function hideSideBar() {
  jQuery('#side-menu').hide();
}


export function smoothlyMenu(isDefaultCustomer: any) {

  if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
    //jQuery('#side-menu').hide();
    if (isDefaultCustomer || isDefaultCustomer === undefined || typeof isDefaultCustomer === 'undefined') {
      jQuery('navigation').hide();
      jQuery('#page-wrapper').css('margin', '0');
    } else {
      jQuery('navigation').fadeIn(100);
      jQuery('#page-wrapper').removeAttr('style'); //Aqui
      //jQuery('#page-wrapper').css('margin-right', '220');
    }
  } else if (jQuery('body').hasClass('fixed-sidebar')) {
    if (isDefaultCustomer || isDefaultCustomer === undefined || typeof isDefaultCustomer === 'undefined') {
      jQuery('navigation').hide();
      jQuery('#page-wrapper').css('margin', '0');
    } else {
      jQuery('navigation').fadeIn(400);
      jQuery('#page-wrapper').css('margin-right', '220');
    }
  } else {
    // Remove all inline style from jquery fadeIn function to reset menu state
    jQuery('navigation').show();

    jQuery('navigation').fadeIn(400);
    jQuery('navigation').hide(); //Aqui
    jQuery('#page-wrapper').css('margin', '0'); //Aqui
    jQuery('#mini-navbar').css('margin-right', '0'); //Aqui

  }
}
