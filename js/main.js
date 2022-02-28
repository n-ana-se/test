const bgClose = () => {
  const blackBg = document.getElementById("js-black-bg");
  blackBg.addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup p").style.display = "none";
  });
};

const copyUrl = () => {
  let copyTarget = document.getElementById("copyTarget").value;
  navigator.clipboard.writeText(copyTarget);
  document.querySelector(".popup .popup-text p").style.display = "";
};

const popupClose = () => {
  const closeBtn = document.querySelector(".popup #close-btn button");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
    document.getElementById("js-black-bg").style.display = "none";
    document.querySelector(".popup p").style.display = "none";
  });
};

const popupOpen = () => {
  let imgInfo = event.target.getAttribute("src"); //クリックした写真のsrcを入手
  let targetSrc = document.querySelector("#popup img"); //書き換える写真の対象
  targetSrc.setAttribute("src", imgInfo); //クリックした写真のsrcに書き換えている

  // ポップアップの表示
  document.querySelector("#popup").style.display = "";
  document.getElementById("js-black-bg").style.display = "";

  //urlの書き換え
  targetUrl = window.location.href + imgInfo.slice(2);
  document.querySelector(".popup input").setAttribute("value", targetUrl);
};
