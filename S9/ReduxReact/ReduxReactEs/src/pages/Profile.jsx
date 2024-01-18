import React from "react"
import { useSelector } from "react-redux"

const Profile = () => {

    // const nome = useSelector(state=>state.utente.nome)
    // const cognome = useSelector(state=>state.utente.cognome)
    // const eta = useSelector(state=>state.utente.eta)

    const [userData, setUserData] = useState({
        nome:useSelector(state=>state.utente.nome),
        cognome:useSelector(state=>state.utente.cognome),
        eta:useSelector(state=>state.utente.eta),
    })
    return(
        <div>
            <h1>Profile</h1>
                <div>
                    <p>Ciao, {userData.nome} {userData.cognome}, sappi che hai {userData.eta} anni</p>
                </div>
                <div>
                    <input type="text" value={userData.nome} onChange={(e) => setUserData({...userData, nome:e.target.value})}/><button>Aggiorna Nome</button>
                    <br />
                    <input type="text" value={userData.cognome} onChange={(e) => setUserData({...userData, cognome:e.target.value})} /><button>Aggiorna Cognome</button>
                    <br />
                    <input type="text" value={userData.eta} onChange={(e) => setUserData({...userData, eta:e.target.value})}/><button>Aggiorna Eta</button>
                </div>
        </div>
    )
}

export default Profile