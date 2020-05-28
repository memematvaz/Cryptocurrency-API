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

    async getValues(currencie, cryptoCurrencie) {
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrencie}&tsyms=${currencie}&api_key=${this.apikey}`

        const urlConvert = await fetch(url);

        const result = await urlConvert.json();
        
        return {result}

    }
}