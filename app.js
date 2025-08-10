let nomesAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('#Amigo').value.trim();
    let listaHTML = document.querySelector('#listaAmigos');

    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    // Adiciona o nome ao array
    nomesAmigos.push(nome);

    // Limpa a lista HTML para evitar duplicatas
    listaHTML.innerHTML = '';

    // Cria um <li> para cada nome no array
    nomesAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaHTML.appendChild(li);
    });

    // Limpa o input
    document.querySelector('#Amigo').value = '';
}

function sortearAmigo() {
    if (nomesAmigos.length < 2) {
        alert('Digite pelo menos dois nomes na lista!');
        return;
    }

    let indice = Math.floor(Math.random() * nomesAmigos.length);
    let resultadoTexto = document.querySelector('#resultado');
    resultadoTexto.textContent = `O amigo sorteado é ${nomesAmigos[indice]}`;
}