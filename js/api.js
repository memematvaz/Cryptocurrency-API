class Api {

    constructor(apikey) {
        this.apikey = apikey;

    }

    async getCryptoCurrenciesApi() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`

        const getCryptoCurrencies = await fetch(url);

        const currencies = await getCryptoCurrencies.json()



        return {
            currencies
        }
    }
}