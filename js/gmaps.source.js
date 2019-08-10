    $(document).ready(function(){

        var map;  

        map = new GMaps({
            el: '#gmap',
            lat: 39.773524,
            lng: -86.184850,
            scrollwheel:false,
            zoom: 16,
            zoomControl : true,
            panControl : false,
            streetViewControl : true,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = 'images/map-icon.png';
        map.addMarker({
            lat: 39.773524,
            lng: -86.184850,
            icon: image,
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'left',
            backgroundColor: '#d3cfcf',
        });


        var styles = [ 

        {
            "featureType": "road",
            "stylers": [
            { "color": "#ffffff" }
            ]
        },{
            "featureType": "water",
            "stylers": [
            { "color": "#ededed" }
            ]
        },{
            "featureType": "landscape",
            "stylers": [
            { "color": "#f0f0f0" }
            ]
        },{
            "elementType": "labels.text.fill",
            "stylers": [
            { "color": "#a8a8a8" }
            ]
        },{
            "featureType": "poi",
            "stylers": [
            { "color": "#dddddd" }
            ]
        },{
            "elementType": "labels.text",
            "stylers": [
            { "saturation": 1 },
            { "weight": 0.1 },
            { "color": "#a8a8a8" }
            ]
        }

        ];

        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });

        map.setStyle("map_style");
    }()); 


