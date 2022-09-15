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

// ------------- MESSAGE --------------
messagesNotification.addEventListener("click", () => {
  messagesCount.style.display = "none";
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
