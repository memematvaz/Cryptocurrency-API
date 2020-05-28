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
            document.querySelector('.messages div').remove()}, 3000)
    }

    resultEquivalenceMoney(result, currency, crypto){
        
        const previousResult = document.querySelector('#result > div');
        if(previousResult){ 
            previousResult.remove();

        }
        
        let dataMoney = result[crypto][currency];
        let price = dataMoney.PRICE.toFixed(2);
        let variation = dataMoney.CHANGEPCTDAY.toFixed(2);

        //Change date from unix time stamp to Spanish date
        let updated = new Date(dataMoney.LASTUPDATE * 1000).toLocaleDateString('es-ES')


        const divResult = document.createElement('div');
        divResult.classList.add('card', 'bg-success')

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body', 'text-dark')

        const title = document.createElement('h2');
        title.classList.add('card-title')
        title.appendChild(document.createTextNode('Resultado:'))

        const priceInfo = document.createElement('p');
        priceInfo.appendChild(document.createTextNode(`El precio de ${dataMoney.FROMSYMBOL} es de ${price} ${dataMoney.TOSYMBOL}`))   

        const variationInfo = document.createElement('p');
        variationInfo.appendChild(document.createTextNode(`Variación último día ${variation}`))   

        const lastUpdate = document.createElement('p');
        lastUpdate.appendChild(document.createTextNode(`Última actualización ${updated}`))  

        divResult.appendChild(divCardBody);
        divCardBody.appendChild(title);
        divCardBody.appendChild(priceInfo);
        divCardBody.appendChild(variationInfo);
        divCardBody.appendChild(lastUpdate);        

       

        this.spinnerVisibility()

        setTimeout(() => {
            const divResultContainer = document.querySelector('#result');
            divResultContainer.appendChild(divResult)
            const spinner = document.querySelector('.container-spinner');
            spinner.style.display = 'none';
        
        }, 2500);
    

   //     setTimeout(() => {
  //          divResult.remove()}, 5500)
      }

    spinnerVisibility(){
        const spinner = document.querySelector('.container-spinner');
        spinner.style.display = 'block';

    }

    }

