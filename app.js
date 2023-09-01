/****************************************************
* Objetivo: Auxiliar o processo de vendas de uma loja.
* Data: 01/09/23
* Autor: Mariana Alves.
* Versão: 1.0
*****************************************************/

var calCondicoes=require('./modulo/calcularCondicoes')

var readline=require("readline")

var input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

input.question('Insira o valor da venda: ', function(valorUsuario){

    let valor=valorUsuario.replace(',','.')
    console.log('1 - À vista, com 8% de desconto.')
    console.log('2 - À vista no cartão, com 4% de desconto.')
    console.log('3 - Em 2x, preço normal sem juros.')
    console.log('4 - Em 4x, preço acrescido de 8%')

    input.question('Insira qual código corresponde a sua compra: ',function(codigoUsuario){
        let codigo=codigoUsuario
        let resultado

        if(valor=='')
            console.log('ERRO: Insira um valor.')
        else if(isNaN(valor)||isNaN(codigo))
            console.log('ERRO: Utilize apenas números.')
        else if(codigo==''||codigo<1||codigo>4)
            console.log('ERRO: Insira um código válido.')
        else{
            valor=Number(valor)
            resultado=calCondicoes.calculadora(valor,codigo)
            if(resultado)
                console.log('O valor total será: '+resultado)
                input.close()

        }
    })
})