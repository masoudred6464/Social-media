// SIDEBAR

const menuItem = document.querySelectorAll(".menu-item");
//NOTIFICATION

const notificationCount = document.querySelector(
  "#notifications .notification-count"
);
const notificationsPopup = document.querySelector(".notifications-popup");

//MESSAGES

const messagesCount = document.querySelector(
  "#messages-notifications .notification-count"
);
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = messages.querySelector("#message-search");

// THEME
const themeItem = document.querySelector("#theme-item");
const themeModal = document.querySelector(".customize-theme");

// FONT SIZE
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

// COLOR
const colorPalette = document.querySelectorAll(".choose-color span");

// BG COLOR
const Bg1 = document.querySelector(".bg-1");
// const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// ----------- SIDEBAR ------------

// remove active class from all menu item
function changeActiveItem() {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
}

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id == "notifications") {
      notificationsPopup.style.display = "block";
      notificationCount.style.display = "none";
    } else {
      notificationsPopup.style.display = "none";
    }
  });
});

// =========== MESSAGE ===========
// searches chats
function searchMessage() {
  let val = messageSearch.value.toLocaleLowerCase();
  console.log(val);
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLocaleLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
}
// search chat
messageSearch.addEventListener("keyup", searchMessage);

// hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messagesCount.style.display = "none";
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// ============ THEME/DISPLAY CUSTOMIZATION ============
function openModal() {
  themeModal.style.display = "grid";
}

function closeModal(e) {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
}
themeItem.addEventListener("click", openModal);

themeModal.addEventListener("click", closeModal);

// ============ FONT SIZE ============
function removeClassActive() {
  fontSizes.forEach((font) => {
    font.classList.remove("active");
  });
}
fontSizes.forEach((size) => {
  let fontSize;

  size.addEventListener("click", () => {
    removeClassActive();
    size.classList.add("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    // change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// ========= COLOR =======
function removeClassActiveColor() {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
}
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    removeClassActiveColor();
    color.classList.add("active");

    let primaryHue;

    if (color.classList.contains("color-1")) {
      primaryHue = 0;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 100;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 200;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 300;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 500;
    }
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// ========= BG COLOR =======
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

function changeBg() {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

Bg1.addEventListener("click", () => {
  // add active class
  Bg1.classList.add("active");
  // remove active class from other
  // Bg2.classList.remove("active");
  Bg3.classList.remove("active");

  window.location.reload();
});

// Bg2.addEventListener("click", () => {
//   darkColorLightness = "95%";
//   whiteColorLightness = "20%";
//   lightColorLightness = "15%";

  // add active class
//   Bg2.classList.add("active");
  // remove active class from other
  // Bg1.classList.remove("active");
  // Bg3.classList.remove("active");
  // changeBg();
// });

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // add active class
  Bg3.classList.add("active");
  // remove active class from other
  Bg1.classList.remove("active");
  // Bg2.classList.remove("active");
  changeBg();
});
