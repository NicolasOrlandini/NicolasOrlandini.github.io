function initMap() {
    
        // coordonnées
        var coordNicolas = new google.maps.LatLng(43.718399, 7.256210);

        var optionsNicolas = {
            center: coordNicolas,
            zoom: 16,
        };
    
        // initialisation de la map
        var mapNicolas = new google.maps.Map(document.getElementById('mapNicolas'), optionsNicolas);
    
        // le marqueur
        markerNicolas = new google.maps.Marker({
            map: mapNicolas,
            animation: google.maps.Animation.DROP,
            position: coordNicolas,
            title: 'Nicolas ORLANDINI'
        });
        // on affecte l'animation sur les marqueurs
        markerNicolas.addListener('click', toggleBounce);
    
        // on stoppe l'animation au bout d'une seconde
        setTimeout(function() { markerNicolas.setAnimation(null); }, 1000);
    
        // fonction d'animation pour les marqueurs
        function toggleBounce() {
            if (markerNicolas.getAnimation() === null) {
                markerNicolas.setAnimation(google.maps.Animation.BOUNCE);
            } else {
                markerNicolas.setAnimation(null);
            }
        }
    }
    
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: Le service de géolocalisation a failed.' :
            'Error: Votre navigateur ne supporte pas le service de navigation.');
    }