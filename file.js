function enviar(){

let elementopergunta_um = document.getElementById("pergunta_um").value 
let elementopergunta_dois = document.getElementById("pergunta_dois").value 
let elementopergunta_tres = document.getElementById("pergunta_tres").value 

let elementonota_final =  document.getElementById("input_nota_final")
let pontuacao = Number(elementopergunta_um) + Number(elementopergunta_dois) + Number(elementopergunta_tres)

if(elementopergunta_um == 2 || elementopergunta_dois == 2 || elementopergunta_tres == 2){

    alert("Preencha todas as alternativas")

}
else{

    elementonota_final.value = pontuacao

}



}