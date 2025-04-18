import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'



import Home from './pages/Home';
import './App.css';
import{BrowserRouter, Routes, Route} from "react-router";



function App() {

  return (
   <BrowserRouter>
   <Header/>
   <Routes>

    <Route path="/"
    element={<Home/>}
    />
   
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}


export default App
