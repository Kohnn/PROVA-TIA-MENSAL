import { palavrasContato, palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula, mostProbablyQuestion, palavrasAleatorias, palavrasFeias } from './can-i-answer.js'


console.log("Bem vindo ao nosso chat bot, qual a sua pergunta?")
let pergunta = "Como posso entrar em contato"
pergunta = pergunta.toLowerCase().split(" ")
pergunta = pergunta[pergunta.length -1] === "?" ? pergunta.slice(0,-1) : pergunta


const respostas = [palavrasContato, palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula, palavrasAleatorias, palavrasFeias]


for (let i = 0; i < pergunta.length; ++i) { 
    for (let j = 0; j < respostas.length; ++j) { 
        if (respostas[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            respostas[j].matched++
        }
    }
}

console.log(mostProbablyQuestion())
