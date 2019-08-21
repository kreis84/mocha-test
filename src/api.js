const baseURL = 'http://localhost:3000'

const fetchGeo = () =>
    fetch(`${baseURL}/geo`)
        .then((res) => res.json())

const fetchOffices = () =>
    fetch(`${baseURL}/offices`)
        .then((res) => res.json())

const fetchGeoWithOffices = () => {

}

module.exports = {
    fetchGeo,
    fetchOffices,
    fetchGeoWithOffices
}