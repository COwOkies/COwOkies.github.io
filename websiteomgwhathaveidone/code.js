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
      document.querySelector("#bartest").innerHTML = data;
    });
}

window.addEventListener("DOMContentLoaded", loadHeader);
