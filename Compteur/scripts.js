// définir la date de fin de l'événement
  var eventDate = new Date("January 25, 2023 14:00:00");

  // mettre à jour le compte à rebours toutes les secondes
  setInterval(function() {
    // obtenir la date actuelle
    var currentDate = new Date();
    // calculer la différence entre la date actuelle et la date de l'événement
    var diff = eventDate - currentDate;
    // calculer les jours, heures, minutes et secondes restants
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    // mettre à jour les éléments HTML avec les valeurs calculées
    if (days > 0) {
      document.getElementById("days").innerHTML = days + " jours ";
    } else {
      document.getElementById("days").innerHTML = "";
    }
    if (hours > 0) {
      document.getElementById("hours").innerHTML = hours + " heures ";
    } else {
      document.getElementById("hours").innerHTML = "";
    }
    if (minutes > 0) {
      document.getElementById("minutes").innerHTML = minutes + " minutes ";
    } else {
      document.getElementById("minutes").innerHTML = "";
    }
    if (seconds > 0) {
      document.getElementById("seconds").innerHTML = seconds + " secondes ";
    } else {
      document.getElementById("seconds").innerHTML = "";
    }
  }, 1000);
