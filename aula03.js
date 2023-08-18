'use strict'

    const botaoSomar = document.getElementById('somar')
    const botaoIdentificar = document.getElementById('identificar')
    const botaoMedia = document.getElementById('verificar')
    const botaoMultiplicar = document.getElementById('multiplicar')
    const botaoImparPar = document.getElementById('imparPar')
    const botaotresNumeros = document.getElementById('tresNumeros')

    function somar() {
        const numero1 = Number(document.getElementById('numero1').value)
        const numero2 = Number(document.getElementById('numero2').value)
        const resultado = document.getElementById('resultado')

        const total = numero1 + numero2

        resultado.textContent = total

    }
   function identificar () {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    if(numero > 0){
        resultado.textContent = 'POSITIVO'
    } else if (numero < 0){
        resultado.textContent = 'NEGATIVO'
    } else{
        resultado.textContent = 'ZERO'
    }
   }
   function verificar(){
    const n1 = Number(document.getElementById('nota1').value)
    const n2 = Number(document.getElementById('nota2').value)
    const n3 = Number(document.getElementById('nota3').value)
    const n4 = Number(document.getElementById('nota4').value)
    const resultado = document.getElementById('resultado-item3')

        const media = (n1 + n2 + n3 + n4)/4

        if(media > 7){
            resultado.textContent = 'Aprovado'
        }else if (media < 6.9){
            const nota5 = prompt('Digite a nota do exame:')
            const resultado2 = (media + nota5)/ 2

            if(resultado2 >= 5){
                resultado.textContent = 'Aprovado em exame'
            }else{
                resultado.textContent = 'Reprovado'
            }
        }

   }

   function multiplicar(){
    const numero = Number(document.getElementById('numero-itemO').value)
    const resultado = document.getElementById('resultado-itemO')
    const multiplicacao = numero * 2

    if(multiplicacao > 30){
       
        resultado.textContent = multiplicacao
    }
   }

   function imparPar(){
    const numero =Number(document.getElementById('numero-itemJ').value)
    const resultado = document.getElementById('resultado-itemJ')

    if (numero % 0){
        resultado.textContent = 'Número Par'
    }else{
        resultado.textContent = 'Número Impar'
    }

   }
   function tresNumeros (){
    const numero1 =Number(document.getElementById('numero-itemN1').value)
    const numero2 =Number(document.getElementById('numero-itemN2').value)
    const numero3 =Number(document.getElementById('numero-itemN3').value)
    const resultado = document.getElementById('resultado-itemN')

    const somaTresNumeros = numero1 + numero2 + numero3

    if(somaTresNumeros >= 100){
        resultado.textContent = somaTresNumeros
    }

}

    botaoIdentificar.addEventListener('click', identificar)
    botaoSomar.addEventListener('click', somar)
    botaoMedia.addEventListener('click', verificar)
    botaoMultiplicar.addEventListener('click', multiplicar)
    botaoImparPar.addEventListener('click', imparPar)
    botaotresNumeros.addEventListener('click',tresNumeros)

