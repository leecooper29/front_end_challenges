const news = document.getElementById("news-parent");
const subs = document.getElementById("subscribing-container");

function subscribe() {
  news.style.display = "none";
  subs.style.display = "flex";
}

function thanks() {
  subs.style.display = "none";
  news.style.display = "flex";
}
