function clicked() {
  navigator.clipboard.writeText("COwOkie#6114");
  alert("COwOkies discord copied to clipboard");
}

function over() {
  document.getElementById("pfp").src = "discord.png";
}

function noover() {
  document.getElementById("pfp").src = "pdp.png";}

fetch("header.html")
.then(response => {
  return response.text()
})
.then(data => {
  // On insère le contenu du fichier html de header dans la page
  document.querySelector("theheader").innerHTML = data;
});