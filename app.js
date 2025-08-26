// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    // Captura o elemento de input e seu valor
    const campoNome = document.getElementById('amigo');
    const nomeAmigo = campoNome.value.trim();

    // Valida se a entrada não está vazia
    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return; // Interrompe a função
    }

    // Atualiza o array de amigos com o novo nome
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada para o próximo nome
    campoNome.value = "";

    // Atualiza a lista de nomes visível na página
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Obtém o elemento da lista no HTML
    const lista = document.getElementById('listaAmigos');

    // Limpa a lista existente para evitar duplicados
    lista.innerHTML = "";

    // Percorre o array de amigos para criar os elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento de lista (<li>)
        const item = document.createElement('li');
        item.textContent = amigos[i];

        // Adiciona o novo item à lista no HTML
        lista.appendChild(item);
    }
}

