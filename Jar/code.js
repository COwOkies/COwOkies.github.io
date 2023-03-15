function clicked() {
  navigator.clipboard.writeText("COwOkie#6114");
  alert("COwOkies discord copied to clipboard");
}

function over() {
  document.getElementById("pfp").src = "discord.png";
}

function noover() {
  document.getElementById("pfp").src = "pdp.png";}

function loadHeader() {
  fetch("header.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("#bar").innerHTML = data;
    });
}

window.addEventListener("DOMContentLoaded", loadHeader);

let name = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
  document.querySelector(`.button[href='${CSS.escape(name)}']`).setAttribute("id", "selected");
