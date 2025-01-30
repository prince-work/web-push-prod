// Import the functions you need from the SDKs you need
// Initialize Firebase

function requestPermission() {
  if (window.Chat360Notification) {
    window.Chat360Notification.subscribe();
  }
}

document
  .getElementById("allow_notification")
  .addEventListener("click", requestPermission);

