class Interface {

    constructor() {
        this.builtSelect();

    }

    builtSelect(){
        getApi.getCryptoCurrenciesApi()
            .then(currencies => {
                
                const select = document.querySelector('#crypto');

                for (const [key, value] of Object.entries(currencies.currencies.Data)) {
                    const option = document.createElement('option');
                    option.value = value.Symbol;
                    option.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(option);
                 
                }
            })
    }
    response(message, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(message))

        const divMessage = document.querySelector('.messages');
        divMessage.appendChild(div);

        setTimeout(() => {
            document.querySelector('.messages div').remove()}, 2500)
    }

    resultEquivalenceMoney(result, currency, crypto){
        const dataMoney = result[crypto][currency];

        const divResult = document.createElement('div');
        divResult.classList.add('card', 'bg-success')

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body', 'text-dark')

        const title = document.createElement('h2');
        title.classList.add('card-title')
        title.appendChild(document.createTextNode('Resultado:'))

        const priceInfo = document.createElement('p');
        priceInfo.appendChild(document.createTextNode(`El precio de ${dataMoney.FROMSYMBOL} a moneda ${dataMoney.TOSYMBOL} es de ${dataMoney.PRICE}`))   

        divResult.appendChild(divCardBody);
        divCardBody.appendChild(title);
        divCardBody.appendChild(priceInfo);

        const divResultContainer = document.querySelector('#result');
        divResultContainer.appendChild(divResult);

        setTimeout(() => {
            divResultContainer.remove()}, 3000)
    }

    }

