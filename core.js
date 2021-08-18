var mockData=[
    {
        id:8190001,
        dataCompra: "00/11/0000",
        pontos: 1
    },
    {
        id:8190002,
        dataCompra: "00/11/0002",
        pontos: 1
    },
    {
        id:8190003,
        dataCompra: "00/11/0003",
        pontos: 1
    }
]


var inputTelefone = document.querySelector("#telefone")
var btnPesquisar = document.querySelector("#pesquisar") 
var telefone=""

function pesquisarNaLista(item){
console.log(item)
    if ((item.id+"")==telefone){

        return true
    }
    else {
        return false
    }


}

function pesquisar(){
    
    telefone=inputTelefone.value
    if(telefone==""){
        alert("Digite seu Telefone") 
        return
    }
var dadosEncontrados = mockData.filter(pesquisarNaLista)
console.log(dadosEncontrados)    
}



btnPesquisar.addEventListener("click",pesquisar)

