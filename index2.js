function updatemap()
{
    fetch("/data.json")
    .then(Response=>Response.json())
    .then(rsp=>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            new mapboxgl.Marker({
                draggable: false
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })

    fetch('https://raw.githubusercontent.com/bence-toth/covid-data/main/data/confirmed/daily/per-million/canada.json')
    .then(response => response.json())
    .then(result => {
      console.log(result.dailyConfirmedCasesPerMillion)
    })
}
updatemap();