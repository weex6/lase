function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
function revealX() {
    var revealXs = document.querySelectorAll(".revealX");
    for (var i = 0; i < revealXs.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealXs[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        revealXs[i].classList.add("active");
      } else {
        revealXs[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", revealX);

// To check the scroll position on page load
revealX();
function revealXL() {
    var revealXL = document.querySelectorAll(".revealXL");
    for (var i = 0; i < revealXL.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealXL[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        revealXL[i].classList.add("active");
      } else {
        revealXL[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", revealXL);

// To check the scroll position on page load
revealXL();




