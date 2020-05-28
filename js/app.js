const getApi = new Api('cad64e3d2ef769d9a6cb21e4c76ee514570a29051ded2dbf30abbe5aa96ba542');
const responseMessage = new Interface();





const form = document.querySelector('#form')




validateForm = (e) => {
    e.preventDefault()

   
    const currencySelect = document.querySelector('#currency');
    const currencySelected = currencySelect.options[currencySelect.selectedIndex].value;

    const cryptoCurrencySelect = document.querySelector('#crypto');
    const cryptoCurrencySelected = cryptoCurrencySelect.options[cryptoCurrencySelect.selectedIndex].value;

    if(currencySelected === '' || cryptoCurrencySelected === '') {
        responseMessage.response('Ambos campos son obligatorios', 'alert bg-danger text-center');

    } else {
        getApi.getValues(currencySelected, cryptoCurrencySelected)
            .then(data => {

                if(data) {
               // document.querySelector('#result').removeChild(div)
                responseMessage.resultEquivalenceMoney(data.result.RAW, currencySelected, cryptoCurrencySelected);
                }  
            
            })
            .catch(error => {responseMessage.response('Prueba con otra criptomoneda', 'alert bg-danger text-center'); });
    }


}

form.addEventListener('submit', validateForm)