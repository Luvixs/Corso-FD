const now = new Date();

const appointments = [];

const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',

]

const scriviMese = function () {
    const title = document.querySelector('h1');
    const indiceMese = now.getMonth();
    const nomeMese = monthNames[indiceMese];
    title.innerText = nomeMese;
}

scriviMese();

const giorniTotali = function () {
    const anno = now.getFullYear();
    const mese = now.getMonth();
    let ultimoGiorno = new Date (anno, mese + 1, 0);
    const numeroGiorni = ultimoGiorno.getDate();
    return numeroGiorni;
}

const deselezionaCelle = function() {
    const celle = document.querySelectorAll('day');
     celle.forEach((element) => {
    element.classList.remove('selected');
});

};

const giornoAppuntamento = function (indiceGiorno) {
    const giorno = document.getElementById('newMeetingDay');
    giorno.classList.add('hasDay');
    giorno.innerText = indiceGiorno + 1;
}; 

const creaGriglia = function(numeroGiorni){
    const calendarDiv = document.getElementById('calendar');
    for(let i = 0; i < numeroGiorni; i++){
        const cellaGiorno = document.createElement('div');
        cellaGiorno.classList.add('day');

        cellaGiorno.addEventListener('click', function(e){
            deselezionaCelle();
            cellaGiorno.classList.add('selected');
            giornoAppuntamento(i);
            if (appointments[i].length > 0){
                mostraAppuntamenti(i);
            }else {
                const divAppuntamenti = document.getElementById('appointments');
                divAppuntamenti.style.display = 'none';
            }
        })

        const valoreCella = document.createElement('h3');
        valoreCella.innerText = i +1;
        cellaGiorno.appendChild(valoreCella);
        calendarDiv.appendChild(cellaGiorno);
        appointments.push([]);
    }
};

creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {
    const appuntamentiGiorno = appointments[indiceGiorno];
    const lista =  document.querySelector('appointments ul');
    lista.innerHTML = '';

    appuntamentiGiorno.forEach((element) => {
        const newLi = document.childElement('li');
        newLi.innerText  = element;
        lista.appendChild(newLi);
    })

    const divAppuntamenti = document.getElementById('appointments');
    divAppuntamenti.style.display = 'block';
};

const submitForm = function(e){
    e.preventDefault();
    const selectedDay = document.getElementById('newMeetingDay').innerText;
    const meetingTime = document.getElementById('newMeetingTime').value;
    const meetingName = document.getElementById('newMeetingName').value;
    const stringAppuntamento = `${meetingTime} - ${meetingName}`;
    const indiceArray = parseInt(selectedDay) - 1;
    console.log('array prima del salvataggio', appointments);
    appointments[indiceArray].push(stringAppuntamento);
    console.log('array dopo il salvataggio', appointments);
}

const meetingForm = document.querySelector('form');
meetingForm.addEventListener('submit', submitForm);