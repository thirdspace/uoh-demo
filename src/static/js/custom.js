'use strict';
//  Author: ThemeREX.com
// 
//  This file is reserved for changes made by the user.
//  Your scripts should be placed here so you can be sure
//  it won't disappear after update
// 

(function($) {

  $(document).ready(function () {
       $(".user-tile1").click(function () {
           $(".user-tile2").hide("slide", { direction: "right" }, 400);
           $(".user-tile3").hide("slide", { direction: "right" }, 400);
           $(".user-tile1").addClass("selected");
      });
      $(".user-tile2").click(function () {
           $(".user-tile3").hide("slide", { direction: "right" }, 400);
           $(".user-tile1").hide("slide", { direction: "left" }, 400);
           $(".user-tile2").addClass("selected");
      });
        $(".user-tile3").click(function () {
           $(".user-tile1").hide("slide", { direction: "left" }, 400);
           $(".user-tile2").hide("slide", { direction: "left" }, 400);
           $(".user-tile3").addClass("selected");
      });
  });

  /* Chat groups collapse */
  $(document).ready(function () { 
    $(".container-header").click(function () {
      $(this).toggleClass("closed").toggleClass("open");
    });
  });

  /* MyContacts contact select */
  $(document).ready(function () { 
    $(".contact").click(function () {
          $(".contact").removeClass("focused");
          $(this).toggleClass("focused");
    });
  });


  /* MyContacts contact select */
  $(document).ready(function () { 
    $(".profile-view-toggle").click(function () {
          $(".mycontacts").toggleClass("profile-view");
          $(".contact-col").toggleClass("col-sm-3").toggleClass("col-sm-4");
    });
  });



})(jQuery);

