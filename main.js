// Prevent Links from reloading page
addEventListener("load", function () {
  let links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      //prevent event action
      e.preventDefault();
    });
  }
});
