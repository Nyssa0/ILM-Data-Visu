document.addEventListener('DOMContentLoaded', function () {
    fetch('https://data.issy.com/api/explore/v2.1/catalog/datasets/touslescommercesdissy-les-moulineaux-feuille1/records?limit=20&refine=categorie%3A%22Alimentation%22')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error fetching data: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const formattedData = data.results.map(result => ({
            name: result.nom_commerce,
            x: result.geo_point_2d.lon,
            y: result.geo_point_2d.lat,
            description: `Type: ${result.type}<br>Horaires: ${result.horaires || 'Non spécifié'}`
        }));

        // Définition des données de la carte d'Issy-les-Moulineaux
        const mapData = {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [2.2627915245265, 48.833923373524],
                        [2.2727931901868, 48.827920084226],
                        [2.2790519306533, 48.832489952145],
                        [2.2893937776751, 48.828352646104],
                        [2.2804640409911, 48.825921287497],
                        [2.2786541423079, 48.818411302219],
                        [2.2725609364554, 48.814399077465],
                        [2.2518651077193, 48.816386741829],
                        [2.2361072489474, 48.821548554448],
                        [2.25169395441, 48.825751017648],
                        [2.2627915245265, 48.833923373524]
                    ]
                ]
            },
            "properties": {
                "code": "92040",
                "nom": "Issy-les-Moulineaux"
            }
        };

        // Initialisation de la carte Highcharts avec les commerces et les frontières
        Highcharts.mapChart('container-0', {
            chart: {
                map: mapData,
            },
            title: {
                text: 'Visualisation des commerces alimentaires à Issy-les-Moulineaux'
            },
            subtitle: {
                text: 'Source de données: OpenStreetMap'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            tooltip: {
                formatter: function () {
                    return `<b>${this.point.name}</b><br>${this.point.description}`;
                }
            },
            series: [{
                name: 'Limites de Issy-les-Moulineaux',
                type: 'map',
                color: 'white', // Couleur du polygon avec opacité
                borderColor: 'rgba(0, 0, 0, 0.5)', // Couleur de la bordure du polygon avec opacité
                borderWidth: 1,
                data: [mapData],
                states: {
                
                }
            }, {
                name: 'Commerces',
                type: 'mappoint', // Utiliser mappoint au lieu de scatter
                color: 'red', // Couleur des points de données
                marker: {
                    fillColor: 'red', // Couleur de remplissage des points de données
                    lineColor: 'rgba(255, 255, 255, 0.8)', // Couleur de la bordure des points de données avec opacité
                    lineWidth: 1
                },
                data: formattedData
            }]
        });
    }
    )
});

document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les données pour le graphique à colonnes depuis l'API
    fetch('https://data.issy.com/api/explore/v2.1/catalog/datasets/touslescommercesdissy-les-moulineaux-feuille1/records?limit=20&refine=categorie%3A%22Alimentation%22')
        .then(response => response.json())
        .then(data => {
            // Convertir les données en un format approprié pour Highcharts
            const typesData = {}; // Utiliser un objet pour stocker les commerces par type

            data.results.forEach(result => {
                const type = result.type; // Récupérer le type de commerce
                if (!typesData[type]) {
                    typesData[type] = [];
                }
                typesData[type].push(result.nom_commerce); // Stocker le nom du commerce dans le tableau correspondant au type
            });

            // Créer le graphique à colonnes Highcharts
            const chart = Highcharts.chart('container', {
                chart: {
                    type: 'column' // Définir le type de graphique sur 'column' pour un graphique à colonnes
                },
                title: {
                    text: 'Commerces alimentaires à Issy-les-Moulineaux par type'
                },
                xAxis: {
                    categories: Object.keys(typesData) // Utiliser les types de commerce comme catégories pour l'axe des x
                },
                yAxis: {
                    title: {
                        text: 'Nombre de commerces' // Définir le titre de l'axe des y
                    }
                },
                tooltip: {
                    formatter: function () {
                        const type = this.point.category;
                        const commerceList = typesData[type].join(', '); // Concaténer les noms des commerces du type sélectionné
                        return `<b>${type}</b><br>Commerces: ${commerceList}`;
                    }
                },
                series: [{
                    name: 'Nombre de commerces par catégories', // Nom de la série
                    data: Object.values(typesData).map(commerceList => commerceList.length), // Utiliser le nombre de commerces de chaque type comme données de la série
                    colorByPoint: true, // Pour utiliser les couleurs spécifiées pour chaque point
                }],
                colors: ['#45C8FF', '#6D68DE', '#00E272', '#FE6A35', '#6B8ABC', '#EE81FF', '#2EE0CA', '#FF645C'] // Spécifier les couleurs pour chaque type
            });
        
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
