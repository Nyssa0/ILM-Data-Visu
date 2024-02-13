var upBtn = document.querySelector('.up')
var downBtn = document.querySelector('.down')
var cards = document.getElementById('cards_section')
i = 1

downBtn.addEventListener('click', function() {
    if (i < 3) {
      i++
      cards.classList.value = 'cards' + i
    }
})

upBtn.addEventListener('click', function() {
    if (i > 1) {
      i--
      cards.classList.value = 'cards' + i
    }
})
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.82242275511905, lng: 2.263443834627964},
        zoom: 14,
        mapId: '72acca18b847dc01',
        mapTypeControl: false
    });

    const iconBase =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons = {
        parking: {
            icon: iconBase + "parking_lot_maps.png",
        },
        library: {
            icon: iconBase + "library_maps.png",
        },
        Alimentation: {
            icon: iconBase + "info-i_maps.png",
        }
    };

    // const features = [
    //     {
    //         position: new google.maps.LatLng(48.82242275511905, 2.263443834627964),
    //         type: "alimentation",
    //     },
    //     {
    //         position: new google.maps.LatLng(48.823883, 2.267809),
    //         type: "parking",
    //     },
    //     {
    //         position: new google.maps.LatLng(48.820779, 2.252268),
    //         type: "library",
    //     },
    // ];


    function toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    async function displayCommerces() {
        const response = await fetch("https://data.issy.com/api/explore/v2.1/catalog/datasets/touslescommercesdissy-les-moulineaux-feuille1/records");
        const commerces = await response.json();
        console.log(commerces.results);

        commerces.results.forEach(commerce => {
            console.log(commerce.categorie)
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(commerce.geo_point_2d.lat, commerce.geo_point_2d.lon),
                icon: icons[commerce.categorie] ? icons[commerce.categorie].icon : icons.library.icon,
                map: map,
                animation: google.maps.Animation.DROP
            });

            const contentString =
                `<div id="content">
                    <div id="siteNotice">
                    </div>
                    <h1 id="firstHeading" class="firstHeading">${commerce.nom_commerce}</h1>
                    <div id="bodyContent">
                    <p><b>${commerce.nom_commerce}</b>, ${commerce.localisation}.</p>
                    </div>
                </div>`;

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                ariaLabel: commerce.nom_commerce,
            });

            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                });
                toggleBounce(marker);
            });

        });
    }

    displayCommerces();
}

window.initMap = initMap;
