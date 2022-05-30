class Geo {
    constructor(ip) {
        this.ip = ip
    }

    
    async getGeoLocation() {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_b7xgO8YbkryVNNJkhTe4Ty50r9UiY&ipAddress=${this.ip}`)

        const responseData = await response.json()
        return responseData
    }

    changeLocation(ip) {
        this.ip = ip
    }
}