'use strict';
//  Author: ThemeREX.com
// 
//  This file is reserved for changes made by the user.
//  Your scripts should be placed here so you can be sure
//  it won't disappear after update
// 

(function($) {

  /* Template select */
  $(document).ready(function () { 
   
    /* List view handle select template */
    $(".template-option").click(function () {
      $(".template-option").removeClass("selected");
      $(this).toggleClass("selected");
    });

   /* List view handle button enable */
   $(".template-option").click(function () {
      $("#template-next-link").removeClass("disabled");
   });

   /* Preview view handle button enable */
   $(".swiper-slide").click(function () {
      $("#template-next-link").removeClass("disabled");
   });

    /* Preview view handle select template */
    $(".template-select").click(function () {
      $(this).addClass("selected");
   });

  });

    /* Job Description Preview */
  $(document).ready(function () { 
   
    /* Move to preview mode */
    $("#preview-btn").click(function () {
      $(this).hide();
      $("#backBtn").hide();
      $("#editBtn").fadeIn("800");
      $("#nextBtn").fadeIn("800");
      $(".role360-slider").fadeIn("800");
      $(".jd-preview-window").addClass("preview-mode");
      $(".jd-preview-window").removeClass("col-sm-10").removeClass("col-sm-offset-1");
      $(".jd-preview-window").addClass("col-sm-7").addClass("col-sm-offset-2");


      $(".blank-panel").fadeOut("800");
      $(".settings-btn").fadeOut("800");
      $(".close-btn").fadeOut("800");
      $(".edit-btn").fadeOut("800");
      $(".video-placeholder").fadeOut("800");
      $(".role360-creator").fadeOut("800");
    });

    $("#publish-button").click(function () {
        $(".notice-box").fadeOut("800");
    });

    var createjobdesc = document.createElement("Div");
    createjobdesc.id = "jd01";
    createjobdesc.className = "job-description";
    createjobdesc.onclick = createlisting.bind(null,createjobdesc);
    createjobdesc.innerHTML = "Publish";
    document.getElementById("publish-button").appendChild(createjobdesc);

    function createlisting(el){
      alert(el.id)
    }

    /* Back to preview mode */
    $("#editBtn").click(function () {
      $(this).hide();
      $("#backBtn").fadeIn("800");
      $("#preview-btn").fadeIn("800");
      $("#editBtn").hide();
      $("#nextBtn").hide();
      $(".role360-slider").hide();
      $(".jd-preview-window").removeClass("preview-mode");
      $(".jd-preview-window").addClass("col-sm-10").addClass("col-sm-offset-1");
      $(".jd-preview-window").removeClass("col-sm-7").removeClass("col-sm-offset-2");


      $(".blank-panel").fadeIn("800");
      $(".settings-btn").fadeIn("800");
      $(".close-btn").fadeIn("800");
      $(".edit-btn").fadeIn("800");
      $(".video-placeholder").fadeIn("800");
      $(".role360-creator").fadeIn("800");
    });

  });


    /* select publish settings */
  $(".publish-logo-container").click(function () {
      $(this).toggleClass("inactive").toggleClass("active");
  });

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

