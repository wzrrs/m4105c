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

