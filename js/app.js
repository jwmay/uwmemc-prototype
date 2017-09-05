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
});