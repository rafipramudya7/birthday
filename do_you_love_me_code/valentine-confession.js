

$("#messageState").on("change", (x) => {
  $(".message").removeClass("openNor").removeClass("closeNor");
  if ($("#messageState").is(":checked")) {
    $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
    $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
    $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
    console.log("Abrindo");
  } else {
    $(".message").removeClass("no-anim").addClass("closeNor");
    $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
    $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
    console.log("fechando");
  }
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
  console.log("Animation End (message)");
  if ($(".message").hasClass("closeNor")) {
    $(".message").addClass("closed");
    $(surat).animate({opacity: 0}, 1000, function() {
      // Setelah fade out selesai, sembunyikan elemen
      this.style.display = "none";
    });

    $(playBtn).animate({opacity: 0}, 1000, function() {
      this.style.display = "none";
    });
    // Redirect here, setelah animasi closeNor selesai
    window.location.href = "videotrone.html"; 
  }
  $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});



$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
  console.log("Animation End (heart)");
  if (!$(".heart").hasClass("closeHer")) {
    $(".heart").addClass("openedHer").addClass("beating");
  } else {
    $(".heart").addClass("no-anim").removeClass("beating");
  }
  $(".heart").removeClass("openHer").removeClass("closeHer");
});
