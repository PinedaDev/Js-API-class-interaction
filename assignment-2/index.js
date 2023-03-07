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

    async getCountryBorders(name) {
        const data = await this.#fetchByName(name);
        if (data[0].borders) {
            const borderingWith = data[0].borders;
            return borderingWith
        } else {
            return 'no borders with other countries'
        }
    }

    async getCountriesByLanguage(language) {
        const response = await fetch(`https://restcountries.com/v2/lang/${language}`);
        const data = await response.json();
        const countries = data.map(country => country.name);
        return countries;
    }

    async getCountriesByPopulation(population) {
        const data = await this.#fetchAllCountries()
        const countriesData = data.filter(country => country.population > population * 10e6 ? true : "");
        const countries = countriesData.map(country => country.name.common)
        return countries;
    }
}

const api = new CountriesAPI();

(async () => {
    const countries = await api.getAllCountries();
    const finland = await api.getCountry('suomi');
    const borders = await api.getCountryBorders('suomi');
    const speakersOf = await api.getCountriesByLanguage('es');
    const morePopulationTHat = await api.getCountriesByPopulation(30)

    // console.log({variables})
    console.log(borders)
})()
