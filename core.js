var mockData=[
    {
        id:8190001,
        dataCompra: "05/11/2021",
        pontos: 1
    },
    {
        id:8190002,
        dataCompra: "10/11/2021",
        pontos: 1
    },
    {
        id:8190003,
        dataCompra: "14/11/2021",
        pontos: 1
    }
]


var inputTelefone = document.querySelector("#telefone")
var btnPesquisar = document.querySelector("#pesquisar") 
var table = document.querySelector("#tabelaDeCompras") 
var telefone=""
var template="<tr> <td>@dataCompra</td> <td>@pontos</td> </tr>"

function pesquisar(){
    
    telefone=inputTelefone.value
    if(telefone==""){
        alert("Digite seu Telefone") 
        return
    }

    var tomanhoDaMinhaLista = mockData.length
    var oCaraQueFoiEncontrado
    for(interator = 0; tomanhoDaMinhaLista > interator; interator = interator+1){
       
        var compraAtual = mockData[interator]
        if(compraAtual.id ==telefone){
            oCaraQueFoiEncontrado = compraAtual
        }
    }

    console.log(oCaraQueFoiEncontrado)


}




btnPesquisar.addEventListener("click",pesquisar)

