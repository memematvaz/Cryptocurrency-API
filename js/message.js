class Message {

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