var mockData = [
    {
        id: 10,
        dataCompra: "05/11/2021",
        pontos: 1
    },
    {
        id: 20,
        dataCompra: "10/11/2021",
        pontos: 1
    },
    {
        id: 30,
        dataCompra: "14/11/2021",
        pontos: 1
    }
]


var inputTelefone = document.querySelector("#telefone")
var btnPesquisar = document.querySelector("#pesquisar")
var btnIncluir = document.querySelector("#incluir")
var table = document.querySelector("#tabelaDeCompras")
var telefone = ""
var template
var minhaTR = document.createElement("tr")
var dataTD = document.createElement("td")
dataTD.id = "DataDaCompra"
var pontosTD = document.createElement("td")
pontosTD.id = "Pontos"
minhaTR.appendChild(dataTD)
minhaTR.appendChild(pontosTD)


function pesquisar() {

    telefone = inputTelefone.value
    if (telefone == "") {
        alert("Digite seu Telefone")

        return
    }

    fetch('http://localhost:3000/compras/' + telefone)
        .then((response) => {
            return response.json();
        })
        .then((compraAtual) => {
            if (compraAtual.dataCompra != undefined) {
                dataTD.innerText = compraAtual.dataCompra
                pontosTD.innerText = compraAtual.pontos
                table.appendChild(minhaTR);
            }
        });


    // var tomanhoDaMinhaLista = mockData.length

    // for(interator = 0; tomanhoDaMinhaLista > interator; interator = interator+1){

    //     var compraAtual = mockData[interator]
    //     if(compraAtual.id ==telefone){
    //         dataTD.innerText=compraAtual.dataCompra
    //         pontosTD.innerText=compraAtual.pontos
    //         table.appendChild(minhaTR)
    //     }

    // }


}

function incluir() {

    telefone = inputTelefone.value
    if (telefone == "") {
        alert("Digite seu Telefone")
        return
    }
    fetch('http://localhost:3000/compras/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'POST', 
        body: JSON.stringify({ telefone: telefone }) 
    }).then((res) => {

            alert(`Incluido com Sucesso! :)))`)
        });

}


btnPesquisar.addEventListener("click", pesquisar)


btnIncluir.addEventListener("click", incluir)

// btnExcluir.addEventListener("click",excluir)

