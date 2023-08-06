function showPreloader() {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "block";
  }
  
  function loadPage() {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "flex";
    window.location.href = "index.html";
  }
  
  setTimeout(loadPage, 3000);
  // Set preload attribute to "auto" to start loading the main page as soon as the preloader is displayed.
var mainPage = document.getElementById("mainPage");
mainPage.preload = "auto";