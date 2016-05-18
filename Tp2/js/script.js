 function startWatch(){
            if (navigator.geolocation)
                var watchId = navigator.geolocation.watchPosition(successCallback,
                                                                    errorCallback,
                                                                    {enableHighAccuracy:true,
                                                                    timeout:10000,
                                                                    maximumAge:0});
            else
                alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");
        }
        
        function stopWatch(){
            navigator.geolocation.clearWatch(watchId);
        }           
        
        function successCallback(position){
            document.getElementById("lat").innerHTML = position.coords.latitude;
            document.getElementById("long").innerHTML = position.coords.longitude;
            document.getElementById("prec").innerHTML = position.coords.accuracy;
            document.getElementById("alt").innerHTML = position.coords.altitude;
            document.getElementById("precalt").innerHTML = position.coords.altitudeAccuracy;
            document.getElementById("angle").innerHTML = position.coords.heading;
            document.getElementById("speed").innerHTML = position.coords.speed;
            document.getElementById("time").innerHTML = new Date(position.timestamp);
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