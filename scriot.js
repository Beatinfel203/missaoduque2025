const caixaprincipal= document.querySelector(".caixa-principal");
const caixaperguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-Alternativas");
const caixaresultado= document.querySelector(".caixa-resultados");
const textoresultado= document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Quem foi o maior salto dado no bungee jump?",
        alternativas: [
            {
                texto: "é o da ponte Bloukrans, na Africa do Sul, 216 metros de altura",
                afirmação:"resposta correta",
                ponto: 1
            },
            {
texto: "Roman Budapeste",
afirmação: "resposta errada",
pontos:0
            }
        ]
    },
 {
        enunciado: "Em que Pais é mais praticado o bungee jump?",
        alternativas: [
            {
                texto: "Nova Zelândia",
                afirmação:"resposta correta",
                ponto: 1
            },
            {
texto: "No Brasil",
afirmação: "resposta errada",
pontos:0
            }
        ]
    },
     {
        enunciado: "Quando o bungee jump foi criado?",
        alternativas: [
            {
                texto: "Na década de 1980",
                afirmação:"resposta correta",
                ponto: 1
            },
            {
texto: "Em de 1 de setembro de 1939",
afirmação: "resposta errada",
pontos:0
            }
        ]
    },
     {
        enunciado: "quem criou o bungee jump?",
        alternativas: [
            {
                texto: "A.J. Hackett",
                afirmação:"resposta correta",
                ponto: 1
            },
            {
texto: "Luiz ínacio Lula da Silva",
afirmação: "resposta errada",
pontos:0
            }
        ]
    },
     {
        enunciado: "qual maior risco do bungee jump?",
        alternativas: [
            {
                texto: "além do medo, possibilidades de lesões devido à falha no equipamentos ou erro humano",
                afirmação:"resposta correta",
                ponto: 1
            },
            {
texto: "falecer de arrependimento de ter pulado e deslizar na corda",
afirmação: "resposta errada",
pontos:0
            }
        ]
    },
]
const perguntas = [
]
 },
 ]
let atual =0;
let perguntaAtual;
let historiafinal="";
let pontos =0;

function mostrapergunta(){
    perguntaAtual=perguntas[atual];
    caixaperguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostrapergunta();
}