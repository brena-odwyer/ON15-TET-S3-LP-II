// Em verde é o que eu fiz antes da aula de quarta-feira, que não estava funcionando em nada, deixei aqui para mostrar meu raciocínio antes de fazermos juntas 

// clienteLilit
// cliente1
// cliente2

let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]
// console.log(clienteLilit.lenght)


const cliente1 = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}]
// // console.log(cliente1.lenght)

const cliente2 = [
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}]
// console.log(cliente2.lenght)

// function desconto(valorTotal){
//     if(valorTotal >= 50 && valorTotal <= 79) {
//     console.log(`desconto de 5%`)
//     return valorTotal*0.05;
//     } else if (valorTotal >= 80 && valorTotal <= 99) {
//         console.log(`desconto de 10%`)
//         return valor*0.1;
//     } else if (valorTotal >= 100 && valorTotal <=199) {
//         console.log(`desconto de 20%`)
//         return valor*0.2;
//     } else if (valorTotal >= 200); {
//         console.log(`desconto de 50%`);
//         return valor*0.5
//     } else 
//         console.log(`desconto inválido`);
//         return 0
// }


// let valorTotal = 0;
// for(let i = 0; i <clienteLilit.lenght; i++){
//     valorTotal = valorTotal + clienteLilit[i].valor;
//     console.log(valorTotal)}

// for(let i = 0; i <cliente1.lenght; i++){
//     valorTotal = valorTotal + cliente1[i].valor;
//     console.log(valorTotal)}

// for(let i = 0; i <cliente2.lenght; i++){
//     valorTotal = valorTotal + cliente2[i].valor;
//     console.log(valorTotal)}

// Aula de 13 de abril:

function realizarCompra(arrayDeCompra) {
    let valorTotal = 0 // variável com a soma de todos os valores dos produtos sem desconto
    let descontoAplicado = 0 // variável com a soma de todos os dencontos aplicados
    let valorFinal = 0 // variável com a soma de todos os valores dos produtos com desconto
    let quantidadeProdutos = arrayDeCompra.length

    for(let item of arrayDeCompra) {
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            valorFinal += (item.valor * 0.5)
            descontoAplicado += (item.valor * 0.5)
        } else if (item.valor >= 100.0) {
            valorFinal += (item.valor * 0.8)
            descontoAplicado += (item.valor *0.2)
        } else if (item.valor >= 80.0) {
            valorFinal += (item.vamor * 0.9)
            descontoAplicado += (item.valor * 0.1)
        } else if (item.valor >= 50.0) {
            valorFinal += (item.valor * 0.95)
            descontoAplicado += (item.valor * 0.05)
    } else {
        valorFinal += item.valor
    }
}
let dataDaCompra = new Date()
console.log(dataDaCompra)

let notaFiscal = {
    "Valot total": valorTotal,
    "Desconto aplicado": descontoAplicado,
    "Valor Final": valorFinal
}  

if(quantidadeProdutos > 10 || valorFinal > 800.0) {
    return console.log({
        ...notaFiscal,
        "Bônus": 'Você ganhou um cupom de 50 reais para sua próxima compra'
    })
} else {
    return console.log(notaFiscal)
}

}

realizarCompra(clienteLilit)
realizarCompra(cliente1)
realizarCompra(cliente2)
