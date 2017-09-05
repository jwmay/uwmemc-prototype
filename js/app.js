$(document).foundation();

$(function() {
  ////
  // Expanding search bar in header.
  ////
  var $search_toggle = $('#searchToggle');
  var $search_form = $('#searchForm');

  // Function for displaying the search form. Expands the form and
  // hide the search form toggle.
  var showSearchForm = function() {
    $search_toggle.css('visibility', 'hidden');
    $search_form.addClass('expanded').focus();
  };

  // Function for hiding the search form. Contracts the form and
  // shows the search form toggle.
  var hideSearchForm = function() {
    $search_toggle.css('visibility', 'visible');
    $search_form.removeClass('expanded');
  };
  
  // Show the search bar if the search form toggle is clicked.
  $search_toggle.click(function() {
    showSearchForm();
  });
  
  // Hide the search bar only if no text has been entered.
  $search_form.blur(function() {
    if(!this.value) {
      hideSearchForm();
    }
  });
  
  // Show the search bar when input is focused (for accessability).
  $search_form.focus(function() {
    showSearchForm();
  });

  ////
  // Initialize the QD image slider.
  ////
  var qdSlider = new Foundation.Orbit($('.qd-slider'), {
    animInFromLeft: 'fade-in',
    animInFromRight: 'fade-in',
    animOutToLeft: 'fade-out',
    animOutToRight: 'fade-out',
    containerClass: 'qd-slider-container',
    slideClass: 'qd-slider-slide',
    boxOfBullets: 'qd-slider-bullets',
    nextClass: 'qd-slider-next',
    prevClass: 'qd-slider-prev',
  });

  // Update left and right images when slide advances.
  $('.qd-slider').on('slidechange.zf.orbit', function() {
    var $active = $('.is-active');
    var $first = $('.qd-slider-container').children().first();
    var $last = $('.qd-slider-container').children().last();
    var $left = $('.qd-slider-left img');
    var $right = $('.qd-slider-right img');

    // The first slide will have no previous child, so use the last slide.
    var $previous = $active.prev().children('img').attr('src');
    if ($previous === undefined) {
      $previous = $last.children('img').attr('src');
    }
    $left.attr('src', $previous);

    // The last slide will have no next child, so use the first slide.
    var $next = $active.next().children('img').attr('src');
    if ($next === undefined) {
      $next = $first.children('img').attr('src');
    }
    $right.attr('src', $next);
  });
});