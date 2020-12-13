const axios = require('axios')
const zip_api_url = 'http://ctp-zip-api.herokuapp.com';
const client = axios.create({
    baseURL: zip_api_url
});

module.exports = {
    getByZipCode(zipCode) {
        return client.get(zip_api_url+'/zip/'+zipCode);
    },
    getByCityName(cityName) {
        return client.get(zip_api_url+'/city/'+cityName);
    }
}