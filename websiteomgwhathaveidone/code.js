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
  document.getElementById("pfp").src = "https://cdn.discordapp.com/avatars/404323229419962381/122b1724edaa6981d4e8f342eb0d87b5.webp?size=512";}

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
    if (navigator.language == 'fr' || navigator.language == 'en')
    {localStorage.setItem('selectedLanguage', navigator.language);}
    else {localStorage.setItem('selectedLanguage', 'en');}
  
    loadSelectedLanguage()
  }
}

// Appeler loadSelectedLanguage au chargement de la page pour restaurer la langue
window.onload = loadSelectedLanguage;