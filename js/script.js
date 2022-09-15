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
