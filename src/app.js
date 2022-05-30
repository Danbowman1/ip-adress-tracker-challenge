const geo = new Geo('')

const ui = new UI()


document.addEventListener('DOMContentLoaded', getGeoLocation)

document.getElementById('submit').addEventListener('click', (e) => {
    const ip = document.getElementById('input').value
    geo.changeLocation(ip)
    getGeoLocation()
})


function getGeoLocation() {
    geo.getGeoLocation()
    .then(results => {
        console.log(results)
        ui.paint(results)
        ui.map(results)
    })
    .catch(err => console.log(err))
}



