// Função para adicionar receita aos favoritos
function addToFavorites(recipeId) {
    // Adicionar código para salvar a receita como favorita (pode ser usando localStorage ou uma API)
    console.log(`Receita com ID ${recipeId} adicionada aos favoritos.`);
}

// Função para buscar receitas por categoria
function searchRecipesByCategory(category) {
    // Adicionar código para buscar receitas por categoria (pode ser usando uma API)
    console.log(`Buscando receitas na categoria ${category}`);
}

// Função para exibir detalhes da receita
function showRecipeDetails(recipeId) {
    // Adicionar código para exibir detalhes da receita (pode ser usando uma API ou carregando uma nova página)
    console.log(`Exibindo detalhes da receita com ID ${recipeId}`);
}

// Função para enviar contato
function sendContact(name, email, message) {
    // Adicionar código para enviar o contato (pode ser usando uma API ou um formulário de contato)
    console.log(`Mensagem enviada por ${name} (${email}): ${message}`);
}


// FUNÇAO PARA BARRA DE PESQUISA

// Obtém a referência ao formulário de pesquisa
const searchForm = document.getElementById("search-form");

// Adiciona um evento de envio ao formulário
searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor digitado na barra de pesquisa
    const searchInput = document.getElementById("search-input").value;

    // Faz algo com o valor, como buscar as receitas correspondentes (pode ser usando uma API)
    console.log(`Buscando por "${searchInput}"`);
});

