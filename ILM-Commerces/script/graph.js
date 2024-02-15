document.addEventListener('DOMContentLoaded', function () {
    // Récupérer les données pour le graphique à secteurs depuis l'API
    fetch('https://data.issy.com/api/explore/v2.1/catalog/datasets/touslescommercesdissy-les-moulineaux-feuille1/records?limit=20&refine=categorie%3A%22Alimentation%22')
        .then(response => response.json())
        .then(data => {
            // Convertir les données en un format approprié pour Highcharts
            const typesCount = {}; // Utiliser un objet pour compter le nombre de chaque type
            const seriesData = [];

            data.results.forEach(result => {
                const type = result.type; // Récupérer le type de commerce
                if (typesCount[type]) {
                    typesCount[type]++;
                } else {
                    typesCount[type] = 1;
                }
            });

            // Convertir les données en un format adapté pour le graphique circulaire
            for (const type in typesCount) {
                seriesData.push({ name: type, y: typesCount[type] });
            }

            // Créer le graphique à secteurs Highcharts
            const chart = Highcharts.chart('container-1', {
                chart: {
                    type: 'pie' // Définir le type de graphique sur 'pie' pour un graphique circulaire
                },
                title: {
                    text: 'Répartition des commerces alimentaires à Issy-les-Moulineaux par type'
                },
                series: [{
                    name: 'Répartition', // Nom de la série
                    data: seriesData // Utiliser les données du nombre de chaque type de commerce
                }],
                tooltip: {
                    formatter: function () {
                        return `<b>${this.point.name}</b><br>Nombre de commerces: ${this.point.y}`;
                    }
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
