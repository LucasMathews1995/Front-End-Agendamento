const formulario = document.getElementById('meuFormulario');
const statusDiv = document.getElementById('status');

formulario.addEventListener('submit',function(event){
event.preventDefault();


const dados = {
nome: document.getElementById('nome').value,
cpf:document.getElementById('cpf').value,
email : document.getElementById('email').value,
password:document.getElementById('password').value,
endereco : document.getElementById('endereco').value,
telefone:document.getElementById('telefone').value
};
fetch('http://localhost:8080/cliente',{
    method:'POST',
headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) 
    }).then(response=>{
        if(response.ok){
            alert("dados salvos com sucesso!");
           formulario.reset();
        }else {
            alert("Erro ao salvar dados.");
        }

    })


.catch(error => console.error("Erro na requisição:", error));





});