const { fetchGeo, fetchOffices } = require('../src/api.js')
const chai = require('chai')
const expect = chai.expect;

describe('HTTP requests', () => {
    before(() => {
        global.fetch = require('node-fetch')
    })

    after(() => {
        delete global.fetch
    })

    it('should receive geo data from REST API', async () => {
        const response = await fetchGeo()
        expect(typeof response).to.equal('object')
        const keys = Object.keys(response)
        const keysAreCountryCodes = keys.every(k => typeof k === 'string' && k.length === 2)
        expect(keysAreCountryCodes).to.be.true
    })
})