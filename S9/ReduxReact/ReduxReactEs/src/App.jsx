import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/Store'

const App = () => {

  return (
    <>
      <div className='App'>
        <Provider store={store}>
          <BrowserRouter>
            <Header/>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/profile" element={<Profile/>} />
                </Routes>
            <Footer/>
          </BrowserRouter>
        </Provider>
      </div>
      
    </>
  )
}

export default App
