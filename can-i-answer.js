// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
    
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],
    matched: 0,
   
}
// Para passar o contato da escola
export const palavrasContato = {
    probablyWords: [
        "contato", "horaria", "celular", "ligação", "numero", "telefone", "telefonema", "ligar", "quem","pessoa", "para", "qual", "onde", "de", "voces", "como", "posso", "entrar", "quem", "ou", "escola",
    ],
    matched: 0,
    
}

//Uma graça que deu tempo de fazer, a ofensa é respondida com uma giria gringa
export const palavrasFeias = {
    probablyWords:[
        "porra", "fodase", "cuzao", "filho", "puta", "desempregado", "clt", "inutil", 
    ],
    matched: 0,
}

//Banco para evitar assunto aleatorio
export const palavrasAleatorias = {
    probablyWords: [
        "que", "futebol", "q", "é", "futebol", "q", "futebol", "que", "e", "futebol",  "q", "futebol", "me", "explica", "que", "futebol", "sabe", "me", "dizer", "o", "que", "futebol",  "palmeiras", "tem", "mundial",  "mundial", "palmeiras",  "mundial", "tem", "copa", "do", "mundo",  "campeão", "mundial",
        "baile", "festa", "jogo", "resenha", "parque", "viagem", "malas", "cimento", "escada", "pia", "construção", "rua", "carro", "poste", "placa", "cambio", "banco", "acidente", "basquete", "volei", "esporte"
    ],
    matched: 0,
    
    }

   

function showAnswer(index) {
    switch (index) {
        case 0:
            return "Quem fundou a escola foi XYZXAS"
        case 1:
            return "Oferecemos os cursos técnicos XYZXAADJASD"
        case 2:
            return "Para matricular Deve ser feito XYZ, e para matricular ABC"
        case 3:
            return "Aqui está o contato para melhor informação XZYXZYYYXZY"
        case 4:
            return "Keep Yourself Safe :)"
        default:
            return "Desculpe, mas não respondemos esse tipo de pergunta"
}
}


export function mostProbablyQuestion() {
   
    let matches = [
        palavrasEscolaFundador.matched, 
        palavrasCursosTecnicos.matched, 
        palavrasMatricula.matched,
        palavrasContato.matched, 
        palavrasFeias.matched,
        palavrasAleatorias.matched,
        
    ]


    return showAnswer(matches.indexOf(Math.max(...matches)))
}
