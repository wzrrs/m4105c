if (navigator.geolocation)
    var watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, {enableHighAccuracy:true});
else
    alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
    
function successCallback(position){
    alert("Latitude : " + position.coords.latitude + ", longitude : " + position.coords.longitude);
};  

function errorCallback(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert("L'utilisateur n'a pas autorisé l'accès à sa position");
            break;          
        case error.POSITION_UNAVAILABLE:
            alert("L'emplacement de l'utilisateur n'a pas pu être déterminé");
            break;
        case error.TIMEOUT:
            alert("Le service n'a pas répondu à temps");
            break;
        }
};

function stopWatch(){
    navigator.geolocation.clearWatch(watchId);
}   