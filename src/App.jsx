import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './layout/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import './App.css'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element ={ <NavBar/>  }>
      <Route  path='/' element ={ <Home/>}/>
      </Route>
      <Route  path='/projects' element ={ <Projects/>}/>
      <Route  path='/Contacts' element ={ <Contacts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App