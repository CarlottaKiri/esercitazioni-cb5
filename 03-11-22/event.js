// DROPDOWN MENU BUTTON
function dropdownToggle() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".dropbtn img")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// SEARCHBAR
function searchBar() {
  const cardsEl = document.getElementsByClassName("card");
  const input = document.getElementById("searchBar").value.toUpperCase();
  for (let cardEl of cardsEl) {
    const nameEl = cardEl.getElementsByTagName("h3")[0];
    if (nameEl.textContent.toUpperCase().indexOf(input) > -1) {
      cardEl.style.display = "";
    } else {
      cardEl.style.display = "none";
    }

    console.log(nameEl);
  }
}
