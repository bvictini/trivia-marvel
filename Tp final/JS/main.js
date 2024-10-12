
const correctas =  ["a", "a", "c", "b", "a", "b", "c", "a", "c", "b"];
var respuestas = new Array;
var score = 1;


function resetear(){
    respuestas = new Array;
    score = 0;
    alert("Reiniciado")
    rts = 0;
    $('input[type="radio"]').prop('checked', false)
}


function enviar(question, repose){   
    respuestas[question] = repose
}

function evaluar(){
    console.log(respuestas)
    console.log(correctas)
    for(let i=1 ; i<correctas.length ; i++){
        if(respuestas[i+1] == correctas[i])  { 
            score++ 
        }
    }
    puntaje()
}

function puntaje () {
    if (score >= 9) {
        alert(score + "/10 ");
    }
    if (score >= 7 && score <= 8) {
        alert(score + "/10 ");
    }
    if (score >= 5 && score <= 6) {
        alert(score + "/10 ");
    }
    if (score >= 3 && score <= 4) {
        alert(score + "/10 ");
    }
    if (score <= 2) {
        alert(score + "/10 ");
    }

    resetear()
}


