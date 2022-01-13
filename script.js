const mymap = L.map('issMap').setView([0, 0], 1.3);

    const issIcon = L.icon({
        iconUrl: '',
        iconSize: [,],
        iconAnchor: [,]
    });

    const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://www.mapbox.com/about/maps/">MapBox</a> contributors';
    const tileUrl = 'https://api.mapbox.com/styles/v1/krushil141113/ckyd69phb07qg15rvysg8y8wn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3J1c2hpbDE0MTExMyIsImEiOiJja3lkNjU1aTcwdzRzMm9xa20yN2NrMjNmIn0.aQwVOGslwfOSAqQkn3cEjg&zoomwheel=true&fresh=true#9/37.78/-122.4241'
  
    const api_url = '';
    async function getISS() {
       
    }

    setInterval(getISS, 2000);
