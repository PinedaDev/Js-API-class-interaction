class CountriesAPI {
    #URL = "https://restcountries.com/v3.1"

    async #fetchAllCountries() {
        const response = await fetch(`${this.#URL}/all`);
        const data = await response.json();
        return data;
    }

    async #fetchByName(name) {
        const response = await fetch(`${this.#URL}/name/${name}`);
        const data = await response.json();
        return data;
    }

    async getAllCountries() {
        const data = await this.#fetchAllCountries();
        const allCountries = data.map(country => country.name.common);
        return allCountries
    }

    async getCountry(name) {
        const data = await this.#fetchByName(name);
        const countryData = data
        return countryData
    }
}

const api = new CountriesAPI()

const countries = api.getAllCountries();
const country = api.getCountry('suomi');

