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
        const borderingWith = data[0].borders;
        return borderingWith;
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
        console.log(countries)
        return countries;
    }
}