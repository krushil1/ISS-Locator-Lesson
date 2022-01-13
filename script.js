const mymap = L.map('issMap').setView([0, 0], 1.3);

    const issIcon = L.icon({
        iconUrl: 'iss.png',
        iconSize: [50, 32],
        iconAnchor: [25, 16]
    });

    const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap); 
    const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://www.mapbox.com/about/maps/">MapBox</a> contributors';
    // const tileUrl = 'https://api.mapbox.com/styles/v1/krushil/ckqfxir4f1hpr17qg5432pyf0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3J1c2hpbCIsImEiOiJja3FmaHBoY3gwYzN2Mnhsa2xhdGkwNnhhIn0.zVbNAkazW6KHOMuWCpCnig'
    const tileUrl = 'https://api.mapbox.com/styles/v1/krushil141113/ckyd69phb07qg15rvysg8y8wn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3J1c2hpbDE0MTExMyIsImEiOiJja3lkNjU1aTcwdzRzMm9xa20yN2NrMjNmIn0.aQwVOGslwfOSAqQkn3cEjg&zoomwheel=true&fresh=true#9/37.78/-122.4241'
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);

    

    const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
    async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;
        marker.setLatLng([latitude, longitude]);
        document.getElementById('lat').innerHTML = latitude;
        document.getElementById('long').innerHTML = longitude;
    }

    setInterval(getISS, 2000);
