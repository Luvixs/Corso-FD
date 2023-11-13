document.getElementById("inserisci").addEventListener("click", inserisciTask);


let lista = [];

function inserisciTask() {
    let valoreinput = document.getElementById("scrivi").value;
    lista.push(valoreinput);
   
 console.log(valoreinput);
    if (valoreinput.trim() == ''){
         alert("Aggiungi una task");
        return;
    }
    console.log(lista);
  }

