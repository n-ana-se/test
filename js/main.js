const copyUrl1 = () => {
  let copyTarget = document.getElementById("copyTarget1").value;
  navigator.clipboard.writeText(copyTarget);
  document.querySelector(".popup1 .popup-text p").style.display = "";
};
const copyUrl2 = () => {
  let copyTarget = document.getElementById("copyTarget2").value;
  navigator.clipboard.writeText(copyTarget);
  document.querySelector(".popup2 .popup-text p").style.display = "";
};
const copyUrl3 = () => {
  let copyTarget = document.getElementById("copyTarget3").value;
  navigator.clipboard.writeText(copyTarget);
  document.querySelector(".popup3 .popup-text p").style.display = "";
};
const copyUrl4 = () => {
  let copyTarget = document.getElementById("copyTarget4").value;
  navigator.clipboard.writeText(copyTarget);
  document.querySelector(".popup4 .popup-text p").style.display = "";
};
const copyUrl5 = () => {
  let copyTarget = document.getElementById("copyTarget5").value;
  navigator.clipboard.writeText(copyTarget);
  document.querySelector(".popup5 .popup-text p").style.display = "";
};

const popupOpen1 = () => {
  let url = document.querySelector(".popup1 img").getAttribute("src");
  document.querySelector(".popup1 input").value =
    window.location.href + url.slice(2);

  document.getElementById("popup").style.display = "";
  document.getElementById("js-black-bg").style.display = "";
};
const popupOpen2 = () => {
  let url = document.querySelector(".popup2 img").getAttribute("src");
  document.querySelector(".popup2 input").value =
    window.location.href + url.slice(2);

  document.querySelector(".popup2").style.display = "";
  document.getElementById("js-black-bg").style.display = "";
};
const popupOpen3 = () => {
  let url = document.querySelector(".popup3 img").getAttribute("src");
  document.querySelector(".popup3 input").value =
    window.location.href + url.slice(2);

  document.querySelector(".popup3").style.display = "";
  document.getElementById("js-black-bg").style.display = "";
};
const popupOpen4 = () => {
  let url = document.querySelector(".popup4 img").getAttribute("src");
  document.querySelector(".popup4 input").value =
    window.location.href + url.slice(2);

  document.querySelector(".popup4").style.display = "";
  document.getElementById("js-black-bg").style.display = "";
};
const popupOpen5 = () => {
  let url = document.querySelector(".popup5 img").getAttribute("src");
  document.querySelector(".popup5 input").value =
    window.location.href + url.slice(2);

  document.querySelector(".popup5").style.display = "";
  document.getElementById("js-black-bg").style.display = "";
};

const popupClose1 = () => {
  const closeBtn = document.querySelector(".popup1 #close-btn button");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".popup1").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup1 p").style.display = "none";
  });
};
const popupClose2 = () => {
  const closeBtn = document.querySelector(".popup2 #close-btn button");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".popup2").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup2 p").style.display = "none";
  });
};
const popupClose3 = () => {
  const closeBtn = document.querySelector(".popup3 #close-btn button");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".popup3").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup3 p").style.display = "none";
  });
};
const popupClose4 = () => {
  const closeBtn = document.querySelector(".popup4 #close-btn button");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".popup4").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup4 p").style.display = "none";
  });
};
const popupClose5 = () => {
  const closeBtn = document.querySelector(".popup5 #close-btn button");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".popup5").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup5 p").style.display = "none";
  });
};

const bgClose = () => {
  const blackBg = document.getElementById("js-black-bg");
  blackBg.addEventListener("click", () => {
    document.querySelector(".popup1").style.display = "none";
    document.querySelector(".popup2").style.display = "none";
    document.querySelector(".popup3").style.display = "none";
    document.querySelector(".popup4").style.display = "none";
    document.querySelector(".popup5").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup1 p").style.display = "none";
    document.querySelector(".popup2 p").style.display = "none";
    document.querySelector(".popup3 p").style.display = "none";
    document.querySelector(".popup4 p").style.display = "none";
    document.querySelector(".popup5 p").style.display = "none";
  });
};
