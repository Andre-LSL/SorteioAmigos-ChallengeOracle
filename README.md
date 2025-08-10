# Sorteio de Amigos

Este é um projeto desenvolvido como parte do **Challenge Oracle**, com o objetivo de fortalecer habilidades em lógica de programação. O aplicativo web permite adicionar nomes de amigos a uma lista e sortear um nome aleatoriamente. Ele foi construído usando HTML, JavaScript e manipulação do DOM, sem dependências externas.

## Funcionalidades

- **Adicionar amigos**: Insira nomes em um campo de texto e adicione-os a uma lista.
- **Validação de entrada**: Garante que nomes vazios ou com apenas espaços não sejam adicionados.
- **Exibir lista**: Mostra todos os nomes adicionados em uma lista HTML.
- **Sortear amigo**: Seleciona aleatoriamente um nome da lista, desde que haja pelo menos dois nomes.
- **Interface simples**: Design minimalista e fácil de usar.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **JavaScript**: Lógica para adicionar nomes, validar entradas e realizar o sorteio.
- **DOM**: Manipulação dinâmica da lista e exibição do resultado.

## Como Usar

1. Digite um nome no campo de entrada.
2. Clique no botão **"Adicionar Amigo"** para incluir o nome na lista.
3. Repita o processo para adicionar mais nomes.
4. Clique no botão **"Sortear Amigo"** para escolher um nome aleatoriamente.
   - Observação: É necessário ter pelo menos dois nomes na lista para realizar o sorteio.

## Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Edge, etc.).
- Não são necessárias dependências externas ou configurações adicionais.

## Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Andre-LSL/SorteioAmigos-ChallengeOracle.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd SorteioAmigos-ChallengeOracle
   ```

3. **Abra o projeto**:
   - Abra o arquivo `index.html` diretamente em um navegador web (ex.: clique duas vezes no arquivo ou use um servidor local).
   - Alternativamente, use uma extensão como o **Live Server** no VS Code para rodar o projeto localmente.

## Estrutura do Projeto

```
SorteioAmigos-ChallengeOracle/
├── index.html  # Página principal com a interface
├── app.js      # Lógica em JavaScript para adicionar e sortear amigos
└── README.md   # Documentação do projeto
```

## Exemplo de Uso

1. Abra `index.html` no navegador.
2. Digite um nome (ex.: "João") e clique em "Adicionar Amigo".
3. Adicione outro nome (ex.: "Maria").
4. Clique em "Sortear Amigo" para ver o resultado, como "O amigo sorteado é Maria".

## Possíveis Melhorias Futuras

- Adicionar um botão para remover nomes da lista.
- Persistir a lista de nomes no `localStorage` para mantê-la entre sessões.
- Estilizar a interface com CSS para uma melhor aparência.
- Adicionar validações mais robustas (ex.: tamanho mínimo do nome ou proibir caracteres especiais).

## Autor
- **André LSL** - Desenvolvedor do projeto para o Challenge Oracle.
- GitHub: [Andre-LSL](https://github.com/Andre-LSL)
