var toggleNav = function (navItem) {
  
  var nav = $('.primary-nav');
  var nHeight = $('ul', nav).height() / $('li', nav).length;
  var posNum = nav.find('.' + navItem).index();
  
  $('li', nav).removeClass('current-menu-item');

  nav.find('.' + navItem).addClass('current-menu-item');
  
  $('ul', nav).css({
    top : -( (nHeight * posNum) )
  });
  
}

var toggleHeaderColor = function (color) {
  $('header').css('background-color', color)
}

var scrolled = function (event) {
  
  // the current position of the windoe
  var wPos = $(this).scrollTop();
  // height of the window
  var winHeight = $(window).height();
  // the ofset area where events will be exicuted
  var offSet = Math.round( (winHeight / 100) * 10 );
  // the window position + the window height
  var currentPos = wPos + winHeight;
  
  $('.page').each(function(){
    
    var self = $(this);
    var targetNav = self.data('nav-item');
    var headerColor = self.data('color');
    
    // position of the individual page 
    var pos = self.position();
    // the position at the bottom of the page where we want the action to exicute
    var targetPos = pos.top + offSet;
    
    // fires at the bottom of the page
    if ( currentPos > targetPos && currentPos < targetPos + offSet) {
      self.addClass('action');
      toggleNav(targetNav);
      toggleHeaderColor(headerColor);
    }
    
    // fires at the top of the page
    if (  pos.top > wPos && pos.top < wPos + offSet ) {
      self.addClass('yahoo');
      toggleNav(targetNav);
      toggleHeaderColor(headerColor);
    } 
    
  });
  
};

var smoothScroll = function() {
  
   var speed = 1000;
  
  var target = this.hash;
  var $target = $(target);
  var moveTo = ( $target.offset().top === 1 ) ? 0 : $target.offset().top ;

	    $('html, body').stop().animate({
	        'scrollTop': moveTo
	    }, speed, 'swing', function () {
	        window.location.hash = target;
	    });
}

$(document).ready(function() {   
  
  $(document).on("scroll", scrolled);
  
  $('a[href*=#]:not([href=#])').on("click", smoothScroll);
  
});