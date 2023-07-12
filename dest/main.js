const allWrap = document.querySelectorAll(".btn-wrap-slider div");
const allTab = document.querySelectorAll(".tab .item");
const handleActive = (temp) => {
  temp.forEach((e) => {
    e.addEventListener("click", () => {
      temp.forEach((e) => {
        e.classList.remove("active");
      });
      e.classList.add("active");
    });
  });
};
handleActive(allWrap);
handleActive(allTab);
