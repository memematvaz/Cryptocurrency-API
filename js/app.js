const responseMessage = new Message();



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
        console.elog('allright')
    }


}

form.addEventListener('submit', validateForm)