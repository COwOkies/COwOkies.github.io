function over() {
  document.getElementById("pfp").src = "discord.png";
}
function clicked() {
  //window.prompt("Copy to clipboard (Ctrl+C) and then close this window", "COwOkie#6114")
  navigator.clipboard.writeText("COwOkie#6114");
  
  /* Alert the copied text */
  alert("COwOkies discord copied to clipboard");
}
function noover() {
  document.getElementById("pfp").src = "cookie.png";}
