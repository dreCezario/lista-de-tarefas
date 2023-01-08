
const Main = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },/*Função responsável por iniciar as funções*/

    cacheSelectors: function() {
        this.checkButtons = document.querySelectorAll('.check')
    }, /*Função responsável por selecionar os elementos do html e armazena-los numa variável */

    bindEvents: function() {
        const self = this

        this.checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButton_click
        })
    }, /*Função responsável por adicionar eventos nos elementos html */


    Events: {
        checkButton_click: function() {
            alert('ok')
        }
    }
}

Main.init()