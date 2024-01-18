import {createStore} from 'redux'
import rootReducer from '../reducer/rootReducer'


// crea uno store  sulla base di tutti i reducer esistenti. 
const store = createStore(rootReducer)

export default store
