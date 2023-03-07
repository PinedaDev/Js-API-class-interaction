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
}