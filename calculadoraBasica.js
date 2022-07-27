function sum(a,b){
    let soma = a+b
    return soma;
}
function sub(a,b){
    let sub = a-b
    return sub;
}
function mult(a,b){
    let mult = a*b
    return mult;
}
function div(a,b){
    let div = a/b
    return div;
}

alert("Calculadora em JS\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão")
let op = prompt('Digite a sua escolha:')

let n1,n2,result

switch (op){
    case '1':
        n1 = Number(prompt('Digite o primeiro número:'))
        n2 = Number(prompt('Digite o segundo número:'))
        result = sum(n1,n2)
        alert(`O resultado da soma ${n1}+${n2} é ${result}`)
        break
    case '2':
        n1 = Number(prompt('Digite o primeiro número:'))
        n2 = Number(prompt('Digite o segundo número:'))
        result = sub(n1,n2)
        alert(`O resultado da subtração ${n1}-${n2} é ${result}`)
        break
    case '3':
        n1 = Number(prompt('Digite o primeiro número:'))
        n2 = Number(prompt('Digite o segundo número:'))
        result = mult(n1,n2)
        alert(`O resultado da multiplicação ${n1}x${n2} é ${result}`)
        break
    case '4':
        n1 = Number(prompt('Digite o primeiro número:'))
        n2 = Number(prompt('Digite o segundo número:'))
        result = div(n1,n2)
        alert(`O resultado da divisão ${n1}/${n2} é ${result}`)
        break
    default:
}