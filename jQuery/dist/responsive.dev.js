"use strict";

$(document).ready(function () {
  // Optimalisation: Store the references outside the event handler:
  var $window = $(window);
  var $pane = $('#pane1');

  function checkWidth() {
    var windowsize = $window.width();

    if (windowsize > 440) {
      //if the window is greater than 440px wide then turn on jScrollPane..
      $('#menuDemo').hide();
    }
  } // Execute on load


  checkWidth(); // Bind event listener

  $(window).resize(checkWidth);
});