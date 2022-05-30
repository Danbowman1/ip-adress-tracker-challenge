class UI {
    constructor() {
        this.ipaddress = document.getElementById('ip-address')
        this.location = document.getElementById('location')
        this.timezone = document.getElementById('timezone')
        this.isp = document.getElementById('isp')
    }


    paint(geo){
        this.ipaddress.textContent = geo.ip
        this.location.textContent = `${geo.location.city}, ${geo.location.region}`
        this.timezone.textContent = `UTC ${geo.location.timezone}`
        this.isp.textContent = `UTC ${geo.isp}`
    }

    // Map API
    map(geo){
        let map = L.map('map').setView([geo.location.lat, geo.location.lng], 13)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
    
        let marker = L.marker([geo.location.lat, geo.location.lng]).addTo(map)
    }
    
}