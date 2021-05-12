
const nome = window.prompt("Qual seu nome.")

const anoNascimento = parseInt(window.prompt("fale seu ano de nascimento"))

const anoAtual = 2021

console.log(typeof(anoAtual))
console.log(typeof(anoNascimento))

let number1 = anoAtual
let number2 = anoNascimento
let string1 = nome



alert(`O seu nome é ${nome}, e você nasceu em ${anoNascimento}, e em 2021 você vai fazer ou já fez ${number1-number2} anos!`)


