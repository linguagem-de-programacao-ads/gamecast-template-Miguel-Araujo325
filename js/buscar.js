async function buscar() {
    console.log("Passei por aqui");

    const resposta = await fetch("https://660f44ad356b87a55c510d25.mockapi.io/agendas");

    const respostaDadosAgenda = await resposta.json();

    console.log("Resposta: ", respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda)=>{
        return "Teste MUITO tOOOOP "
    });
}
console.log("antes de buscar");
buscar();
console.log("depois de buscar");
