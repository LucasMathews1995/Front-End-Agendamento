const botoes = document.querySelectorAll('.btn-info[data-id]');
 const url  = 'http://localhost:8080/procedimento';
botoes.forEach(botao=>{
    botao.addEventListener('click',function(){
      
        
    const profissionalId = this.getAttribute('data-id');
     console.log("Buscando dados do profissional com ID:", profissionalId);
 enviarDadosProfissional(profissionalId);
});
});

function executarAcaoContato(profissionalId) {
   
    
    alert("Você clicou para contatar o profissional de ID: " + profissionalId);
}


async function enviarDadosProfissional(id){
   
    const dados = {
        profissionalId:2,
        servicoId:2,
        preco:39.95,
        urlFoto:"https://cdn1.edgedatg.com/aws/v2/fxnow/Snowfall/showimages/d85f3e6b0bfdc9667a657aaf42d119f7/1200x627-Q80_d85f3e6b0bfdc9667a657aaf42d119f7.jpg"

    };
    try{
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const resultado = await response.json(); 
        console.log("Sucesso:", resultado);
        alert("Dados enviados com sucesso!");
    }
    catch (error) {
        console.error("Erro ao realizar o POST:", error);
        alert("Houve um erro ao tentar se comunicar com o servidor.");
    }
}


    async function recuperarProcedimento(){
        try{
            const response = await fetch(url);
            if(!response.ok){
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                const procedimentos = await response.json();
                console.log("Dados recebidos:", procedimentos);
        return procedimentos;
        }catch (error) {
        console.error("Não foi possível recuperar os procedimentos:", error);
    }
    }

    async function renderizarProcedimentos(){
        const procedimentos = await recuperarProcedimento();
        const container = document.getElementById("card-list");
        procedimentos.forEach(proc=> {
             const novoCard = `
                <article class="card__article">
                    <img src=${proc.urlFoto} alt="image" class="card__img">
                    <div class="card__data">
                        <span class="card__description">${proc.categoria}</span>
                        <h2 class="card__title">${proc.nome}</h2>
                        <a href="procedimento.html?id=${proc.id}" class="card__button">Ver detalhes</a>
                    </div>
                </article>
            `;
            container.innerHTML+=novoCard;
        })
    }

    window.addEventListener("load",renderizarProcedimentos);


