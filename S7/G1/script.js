//ESERCIZIO ETA

class User {
    constructor(firstName, lastName, age,location){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.location=location
    }
    confrontoEta(UserY) {
        if (this.age > UserY.age){
            console.log(this.firstName+ " è più grande di " + UserY.firstName);
        }else if (this.age < UserY.age){
            console.log(this.firstName+ " è più piccolo di " + UserY.firstName);
        }else{
            console.log(this.firstName+ " ha la stessa età di " + UserY.firstName);
        }
    }
}

const UserX = new User ("Mimmo", "Giordano",10,"LI");
const UserY = new User("Mario", "Pio", 20,"MB");
UserX.confrontoEta(UserY);

//ESERCIZIO PET

const campoPetName = document.getElementById("nomePet");
const campoNomeProprietario = document.getElementById("proprietario");
const campoSpecie = document.getElementById("specie");
const campoRazza = document.getElementById("razza");

let list = document.getElementById("lista");
const button = document.getElementById("add");



class Pet {
    constructor(nomePet, nomeProprietario, specie, razza) {
        this.nomePet = nomePet;
        this.nomeProprietario = nomeProprietario;
        this.specie = specie;
        this.razza = razza;
    }
    
    static controllaProprietari(pet, pet1) {
        if (pet.nomeProprietario === pet1.nomeProprietario) {
            console.log('I due animali hanno lo stesso proprietario');
        } else {
            console.log('I due animali hanno proprietari diversi');
        }
    }
}

const pets = [
    new Pet("Fuffi", "Mario", "Cane", "Pastore Tedesco"),
    new Pet("Micio", "Luigi", "Gatto", "Siberiano"),
];

button.onclick = function () {
    let nuovoAnimale = new Pet(
        campoPetName.value,
        campoNomeProprietario.value,
        campoSpecie.value,
        campoRazza.value
    )

    pets.push(nuovoAnimale);
    renderizzaLista();
    campoPetName.value = "";
    campoNomeProprietario.value = "";
    campoSpecie.value = "";
    campoRazza.value = "";
}

function renderizzaLista() {
    list.innerHTML = '';
    pets.forEach(pet => {
        const newLi = document.createElement("li");
        newLi.innerText = "Nome: " + pet.nomePet + " - Proprietario: " + pet.nomeProprietario + " - Specie: " + pet.specie + " - Razza: " + pet.razza;
        list.appendChild(newLi);
    })
}

Pet.controllaProprietari(pets[0], pets[1]);