function clicked() {
 navigator.clipboard.writeText("cowokie_")
 .then(function() {
     alert("COwOkie's discord copied to clipboard");
 })
 .catch(function(err) {
     console.error('Failed to copy text: ', err);
     alert('Failed to copy text to clipboard.');
 });
}

function over() {
  document.getElementById("pfp").src = "discord.png";
}

function noover() {
  document.getElementById("pfp").src = "pfp.webp";}

function changeLanguage(lang) {
  
    if (lang == 'en'){
      document.getElementById("frbutton").style.display = 'block';
      document.getElementById("enbutton").style.display = 'none';
    }
    else {
      document.getElementById("frbutton").style.display = 'none';
      document.getElementById("enbutton").style.display = 'block';
    }
    
    const elementsEn = document.querySelectorAll('.en');
    const elementsFr = document.querySelectorAll('.fr');
  
    elementsEn.forEach(function (element) {
      element.style.display = 'none';
    });
  
    elementsFr.forEach(function (element) {
      element.style.display = 'none';
    });
  
    if (lang === 'en') {
      elementsEn.forEach(function (element) {
        element.style.display = 'block';
      });
    } else if (lang === 'fr') {
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
    localStorage.setItem('selectedLanguage', 'en');
    loadSelectedLanguage();
  }
}

// Appeler loadSelectedLanguage au chargement de la page pour restaurer la langue
window.onload = loadSelectedLanguage;