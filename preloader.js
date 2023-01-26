var preloadTime;

function preloader() {
  preloadTime = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
}