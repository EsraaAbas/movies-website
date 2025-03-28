
import './App.css'
import Header from './components/header/header'
import Detailes from './pages/detailes/detailes.jsx'
import Home from './pages/Home/home.jsx'
import Signin from './pages/signin/signin.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer.jsx'
import store from './store/storeConfg.js'
import { Provider } from "react-redux";
import FavMovies from './pages/favoriteMovies/favMovies.jsx';
import { LangProvider } from './contexts/lang.js'
import { useState } from 'react'





function App() {
  const [lang, setLang] = useState('en')
   
  return (
    <>
   <div dir={lang === 'en' ? 'ltr' : 'rtl'}>
    <LangProvider value={{ lang, setLang }}>
    <Provider store={store}>
      <BrowserRouter>

        <Header />


        <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Home />} />
        <Route path='/detailes/:id' element={<Detailes />} />
        <Route path='/favMovies' element={<FavMovies />} />
        <Route path='/signin' element={<Signin/>} />
        </Routes >

        <Footer/>
        </BrowserRouter>
        </Provider>
        </LangProvider>
        </div>
      </>
      )
}

      export default App
