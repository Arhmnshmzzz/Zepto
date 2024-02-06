document.addEventListener("DOMContentLoaded", function () {
  // Get the profile picture element
  var profilePicture = document.getElementById("user-menu-button");

  // Add onclick event listener to toggle menu visibility
  profilePicture.onclick = function () {
    var menu = document.querySelector(".menuitem");
    menu.classList.toggle("hidden");
  };
});
