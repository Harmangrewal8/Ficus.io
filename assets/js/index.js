
$(document).ready(function () {
    
    $(window).scroll(function () {
      solidnav();
  
  
    });
  });

  function displayMenu() {
	var x = document.getElementById("nav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }

  }
  function solidnav() {
    var vscroll = $(window).scrollTop();
  
    console.log(vscroll);
  
    if (vscroll >50) {
     
      $('#nav').removeClass('trans-nav');
      $('#nav').addClass('solid-nav');
    } else {
      $('#nav').removeClass('solid-nav');
      $('#nav').addClass('trans-nav');
  
    }
  }
  

