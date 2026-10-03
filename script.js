function loadHtml(file, elementID) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementID).innerHTML = data;
    });
};

loadHtml("html/header.html", "header");
loadHtml("html/gallery.html", "gallery");
loadHtml("html/contact.html", "contact");

let aboutLi = document.querySelectorAll(".about ul li");

aboutLi.forEach((hero) => {
  let heroName = hero.querySelector("h4");

  hero.addEventListener("mouseenter", () => {
    heroName.style.display = "block";
  });

  hero.addEventListener("mouseleave", () => {
    heroName.style.display = "none";
  });
});
