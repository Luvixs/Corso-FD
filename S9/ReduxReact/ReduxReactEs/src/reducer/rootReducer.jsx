//unisce tutti gli altri reducer
import {combineReducers} from 'redux'
import utenteReducer from './UtenteReducer'


const rootReducer = combineReducers ({
    utente: utenteReducer,

})

export default rootReducer