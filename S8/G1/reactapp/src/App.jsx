import './App.css'
import Button from '../components/ButtonComponent'
import Img from '../components/img'

function App() {
  const url = "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const tagAlt = "immagine"
  return (
    <>
      
      <h1>Esercizio IFOA</h1>
      
        <Button buttonText="test"/>
        <br/>
        <Img url={url} tagAlt={tagAlt}/>
      
        
    </>
  )
}

export default App
