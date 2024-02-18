function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.82242275511905, lng: 2.263443834627964},
        zoom: 15,
        mapId: '72acca18b847dc01',
        mapTypeControl: false
    });

    let openInfoWindow;

    const iconBase =
        "./assets/mapIcons/";
    const icons = {
        alimentation: {
            icon: iconBase + "alimentation.png",
        },
        equipement_de_la_maison: {
            icon: iconBase + "equipement.png",
        },
        beauté_et_le_bien_être: {
            icon: iconBase + "bienetre.png",
        },
        restauration___bars___tabacs: {
            icon: iconBase + "restaurants.png",
        },
        cordonniers__serruriers__laveries_et_pressings: {
            icon: iconBase + "cordonniers.png",
        },
        service_aux_particuliers: {
            icon: iconBase + "particuliers.png",
        },
        loisirs_et_le_tourisme: {
            icon: iconBase + "loisirs.png",
        },
        equipement_de_la_personne: {
            icon: iconBase + "alimentation.png",
        },
        automobile_et_deux_roues: {
            icon: iconBase + "voiture.png",
        },
        hôtels: {
            icon: iconBase + "hotel.png",
        },
        entretien__rénovation_et_équipement: {
            icon: iconBase + "entretien.png",
        },
        assurances_et_banques: {
            icon: iconBase + "banque.png",
        },
        non_renseignée: {
            icon: iconBase + "alimentation.png",
        },
        santé: {
            icon: iconBase + "sante.png",

        }


    };

    async function displayCommerces() {
        const response = await fetch("https://data.issy.com/api/explore/v2.1/catalog/datasets/touslescommercesdissy-les-moulineaux-feuille1/records?limit=100");
        const commerces = await response.json();

        commerces.results.forEach(commerce => {
            const commerce_category = commerce.categorie.toLowerCase().replaceAll(" ", "_").replaceAll("-", "_").replaceAll(",", "_");
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(commerce.geo_point_2d.lat, commerce.geo_point_2d.lon),
                icon: icons[commerce_category] ? icons[commerce_category].icon : '',
                map: map,
                animation: google.maps.Animation.DROP
            });

            const contentString =
                `<div id="content">
                    <div id="siteNotice">
                    </div>
                    <h4 id="firstHeading" class="firstHeading">${commerce.nom_commerce}</h4>
                    <div id="bodyContent">
                    <p>${commerce.localisation}.</p>
                    </div>
                </div>`;

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                ariaLabel: commerce.nom_commerce,
            });

            marker.addListener("click", () => {
                if (openInfoWindow) {
                    openInfoWindow.close();
                }

                infowindow.open({
                    anchor: marker,
                    map,
                });
                openInfoWindow = infowindow;
            });

        });
    }

    displayCommerces();
}

window.initMap = initMap;
