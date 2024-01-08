const padre = document.getElementById("padre");
const figlio1 = document.getElementById("figlio1");
const figlio2  = document.getElementById("figlio2");
const figlio3  = document.getElementById("figlio3");

padre.addEventListener("click", function (e){
    padre.style.backgroundColor = "red";
});

 figlio1.addEventListener("click", function (e){
    e.stopPropagation();
    figlio1.style.backgroundColor = "red";
 });

// figlio2.addEventListener("click", function (e){
//     figlio2.style.backgroundColor = "red";
// });

// figlio3.addEventListener("click", function (e){
//     figlio3.style.backgroundColor = "red";
// });

