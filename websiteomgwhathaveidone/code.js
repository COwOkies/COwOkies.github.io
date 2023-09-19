function clicked() {
  navigator.clipboard.writeText("cowokie_");
  alert("COwOkies discord copied to clipboard");
}

function over() {
  document.getElementById("pfp").src = "discord.png";
}

function noover() {
  document.getElementById("pfp").src = "https://cdn.discordapp.com/avatars/404323229419962381/122b1724edaa6981d4e8f342eb0d87b5.webp?size=512";}


function changeLanguage(lang) {
    const elementsEn = document.querySelectorAll('.en');
    const elementsFr = document.querySelectorAll('.fr');
  
    elementsEn.forEach(function (element) {
      element.style.display = 'none';
    });
  
    elementsFr.forEach(function (element) {
      element.style.display = 'none';
    });
  
    if (lang === 'eng') {
      elementsEn.forEach(function (element) {
        element.style.display = 'block';
      });
    } else if (lang === 'fre') {
      elementsFr.forEach(function (element) {
        element.style.display = 'block';
      });
    }
    localStorage.setItem('selectedLanguage', lang);
  }

// Fonction pour charger la langue sélectionnée depuis localStorage
function loadSelectedLanguage() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  }
  else {
    localStorage.setItem('selectedLanguage', 'eng');
    loadSelectedLanguage()
  }
}

// Appeler loadSelectedLanguage au chargement de la page pour restaurer la langue
window.onload = loadSelectedLanguage;