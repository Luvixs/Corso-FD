
function saveData(){
    localStorage.setItem('listaNomi', document.getElementById("name").value);
    mostraNome ()
}

function resetData(){
    localStorage.removeItem('listaNomi');
    mostraNome ()
}

//function getData(){
//    localStorage.getItem('listaNomi');
//}

function mostraNome (){
    if (localStorage.getItem('listaNomi')) {
        
      txt = localStorage.getItem('listaNomi')
        
    } else {
      txt = "vuoto";
    }
    document.getElementById('title').innerText = txt
}

window.onload = mostraNome