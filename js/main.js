const copyUrl = () => {
  let copyTarget = document.getElementById("copyTarget").value;
  navigator.clipboard.writeText(copyTarget);
  document.querySelector(".popup-text p").style.display = "";
};

const popupOpen = () => {
  let id = document.getElementById("img1").id;
  let url = document.querySelector("#popup img").getAttribute("src");
  document.querySelector("#popup input").value = url;

  document.getElementById("popup").style.display = "";
  document.getElementById("js-black-bg").style.display = "";
};

const popupClose = () => {
  const closeBtn = document.querySelector("#close-btn button");
  const blackBg = document.getElementById("js-black-bg");
  closeBtn.addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup-text p").style.display = "none";
  });
  blackBg.addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup-text p").style.display = "none";
  });
};
