const title = document.querySelectorAll(".accor-title");

title.forEach((item) => {
  item.addEventListener("click", function () {
    let _active = item.classList.toggle("active");
    // item.classList.toggle("active");
    let content = item.nextElementSibling;
    // content.classList.toggle("active");
    if (!_active) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight;
    }
  });
});
