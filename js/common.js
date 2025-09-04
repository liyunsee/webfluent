// 모바일 메뉴 열기/닫기

document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.querySelector(".btn-menu");
  const btnClose = document.querySelector(".btn-close");
  const mMenu = document.querySelector(".m-menu");

  if (btnMenu && mMenu) {
    btnMenu.addEventListener("click", function () {
      mMenu.classList.add("active");
    });
  }

  if (btnClose && mMenu) {
    btnClose.addEventListener("click", function () {
      mMenu.classList.remove("active");
    });
  }
});
