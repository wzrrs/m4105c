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


if (window.DeviceOrientationEvent) {
 console.log("DeviceOrientation is supported");
}

if (window.DeviceOrientationEvent) {
  // Listen for the event and handle DeviceOrientationEvent object
  window.addEventListener('deviceorientation', devOrientHandler, false);
}

if (window.DeviceOrientationEvent) {
  document.getElementById("doEvent").innerHTML = "DeviceOrientation";
  // Listen for the deviceorientation event and handle the raw data
  window.addEventListener('deviceorientation', function(eventData) {
    // gamma is the left-to-right tilt in degrees, where right is positive
    var tiltLR = eventData.gamma;

    // beta is the front-to-back tilt in degrees, where front is positive
    var tiltFB = eventData.beta;

    // alpha is the compass direction the device is facing in degrees
    var dir = eventData.alpha

    // call our orientation event handler
    deviceOrientationHandler(tiltLR, tiltFB, dir);
  }, false);
} else {
  document.getElementById("doEvent").innerHTML = "Not supported."
}

document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
document.getElementById("doDirection").innerHTML = Math.round(dir);

// Apply the transform to the image
var logo = document.getElementById("imgLogo");
logo.style.webkitTransform =
  "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
logo.style.MozTransform = "rotate("+ tiltLR +"deg)";
logo.style.transform =
  "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";