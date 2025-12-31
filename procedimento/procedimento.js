const procedimento = document.getElementById('tudo-bem');

 const url  = 'http://localhost:8080/procedimento';
async function RecuperarPorId() {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if(!id){
        console.error("ID não encontrado na URL");
        return;
    }

    try {
        // 2. Faz o fetch usando o PathVariable no Back-end
        const response = await fetch(`http://localhost:8080/procedimento/${id}`);
        const proc = await response.json();

        // 3. Preenche os dados na tela
     let nome =    document.getElementById("titulo").innerText = proc.nome;
    let descricao=     document.getElementById("descricao").innerText = proc.descricao;
    let url =     document.getElementById("foto").src = proc.urlFoto;
        

       

    } catch (error) {
        console.error("Erro ao carregar detalhes:", error);
    }
}

window.onload = procedimento;
    
