$(document).ready(function() { 

  $("#burger").click(function(){
    if($('#headerD').is(':visible')){
      $("#headerD").css("display","none");
    }else{
      $("#headerD").css("display","block");
      $("#headerD").css("float","center");
      $("#headerD").css("margin-left","0px");
      $("#headerD").css("margin-bottom","0px");
    }
  });
});

/*function erreurPosition(error) {
    var info = "Erreur lors de la géolocalisation : ";
    switch(error.code) {
    case error.TIMEOUT:
      info += "Timeout !";
    break;
    case error.PERMISSION_DENIED:
    info += "Vous n’avez pas donné la permission";
    break;
    case error.POSITION_UNAVAILABLE:
      info += "La position n’a pu être déterminée";
    break;
    case error.UNKNOWN_ERROR:
      info += "Erreur inconnue";
    break;
    }
document.getElementById("infoposition").innerHTML = info;
}

function maPosition(position) {
  var infopos = "Position déterminée :\n";
  infopos += "Latitude : "+position.coords.latitude +"\n";
  var latze = position.coords.latitude;
  var longze = position.coords.longitude;
  infopos += "Longitude: "+position.coords.longitude+"\n";
  document.getElementById("infoposition").innerHTML = infopos;
  
  var myLatLng = {lat: latze, lng: longze};

  // Create a map object and specify the DOM element for display.
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map2: map2,
    position: myLatLng,
    title: 'Hello World!'
  });
  
  
}

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(maPosition, erreurPosition,{enableHighAccuracy:true});
}*/
var jardin = document.querySelector('.jardin'),
    balle = document.querySelector('.balle'),
    resultat = document.querySelector('.resultat'),
    maxX = jardin.clientWidth  - balle.clientWidth,
    maxY = jardin.clientHeight - balle.clientHeight;

function handleOrientation(event) {
  var x = event.beta,  // En degré sur l'interval [-180,180].
      y = event.gamma; // En degré sur l'interval [-90,90].

  resultat.innerHTML  = "beta : " + x + "<br />";
  resultat.innerHTML += "gamma: " + y + "<br />";

  // Parce-que l'on ne veut pas avoir l'appareil à l'envers.
  // On restreint les valeurs de x à l'intervalle [-90,90].
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};
  // Pour rendre le calcul plus simple.
  // On délimite l'intervalle de x et y sur [0, 180].
  x += 90;
  y += 90;

  // 10 est la moitié de la taille de la balle.
  // Cela centre le point de positionnement au centre de la balle.

  balle.style.top  = (maxX * x / 180 - 10) + "px";
  balle.style.left = (maxY * y / 180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);