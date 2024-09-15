function tabuada() {
    let num = document.getElementById('txtn') // Obtém o elemento de entrada onde o usuário digita o número.
    let tab = document.getElementById('seltab') // Obtém o elemento <select> onde a tabuada será exibida.

    if (num.value.length == 0) { // Verifica se o campo de entrada está vazio.
        window.alert('Por favor, digite um número!') // Exibe um alerta solicitando que o usuário insira um número.
    } else {
        let n = Number(num.value) // Converte o valor do campo de entrada para um número.
        let c = 1 // Inicializa a variável contadora para a multiplicação, começando em 1.

        tab.innerHTML = '' // Limpa a lista suspensa antes de adicionar novos itens, para evitar duplicações.

        while (c <= 10) { // Loop que gera a tabuada do número de 1 a 10.
            let item = document.createElement('option') // Cria um novo elemento <option> para a lista suspensa.
            item.text = `${n} x ${c} = ${n * c}` // Define o texto do item como a multiplicação atual.
            item.value = `tab${c}` // Define um valor para o item (opcional, mas pode ser útil para identificação).
            tab.appendChild(item) // Adiciona o item criado à lista suspensa.
            c++ // Incrementa o contador para passar para a próxima multiplicação.
        }
    }
}
