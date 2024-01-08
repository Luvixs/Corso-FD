// UNA CLASSE PRENDA COME PARAMETRO OPZIONALE UN ARRAY DI NUMERI 
// DEVO CONTROLLARE CHE MI ARRIVI UN ARRAY O MENO 
// SE MI ARRIVA VOGLIO CHE SUCCEDA QUESTO:

// SE UN NUMERO E DIVISIBILE PER 3 STAMPO PIPPO 
// SE UN NUMERO E DIVISIBILE PER 5 STAMPO PLUTO
// SE UN NUMERO E DIVISIBILE SIA PER 3 CHE PER 5 STAMPO PAPERINO
// SE UN NUMERO NON E DIVISIBILE PER NESSUNO DEI DUE STAMPO IL NUMERO IN FORMATO STRINGA

// exercise fizzbuzz
//soluzione prof

class nomeClasse {
    constructor(arr = null) {
        if (arr !== null) {
            this.number = arr
        }
    }

    check() {
        this.numbers.array.forEach(number => {
            if (number % 3 === 0 && number % 5 === 0) {
                console.log('paperino');
            } else if(number % 3 === 0) {
                console.log('pippo');
            } else if (number  % 5 === 0) {
                console.log('pluto');
            } else {
                console.log(number.toString());
            }
        });
    }
}

const test = new nomeClasse ((1,2, 3, 7, 10, 15, 25, 32, 67, 42, 100))
test.check();

// guarda hasOwnProperty

