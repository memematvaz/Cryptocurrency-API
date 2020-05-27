class Interface {

    constructor() {
        this.builtSelect();

    }

    builtSelect(){
        getApi.getCryptoCurrenciesApi()
            .then(currencies => {
                for (const [key, value] of Object.entries(currencies.currencies.Data)) {
                    console.log(key)
                 
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
}