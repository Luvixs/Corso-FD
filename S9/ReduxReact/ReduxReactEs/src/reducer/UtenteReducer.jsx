//aggiorna i dati utente
import {SET_NOME, SET_COGNOME, SET_ETA} from '../action/utenteActions'


const initialState = {
    nome:'Mario',
    cognome:'Rossi',
    eta:'99',
}

const utenteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOME:
            return {
                ...state,
                nome: action.payload
            }
        case SET_COGNOME:
            return {
                ...state,
                cognome: action.payload
            }
        case SET_ETA:
            return {
            ...state,
            eta: action.payload
            }
        default:
            return state;            
    }
}

export default utenteReducer