export const SET_NOME = 'SET_NOME'
export const SET_COGNOME = 'SET_COGNOME'
export const SET_ETA = 'SET_ETA'

export const setName = (newName) =>{
    return{
        type: SET_NOME,
        payload: newName
    }
}

export const setCognome = (newCognome) =>{
    return{
        type: SET_COGNOME,
        payload: newCognome
    }
}

export const setEta = (newEta) =>{
    return{
        type: SET_ETA,
        payload: newEta
    }
}