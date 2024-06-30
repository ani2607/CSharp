import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Protected from "./hooks/Protected"

function App() {
// e:React.FormEvent

  return (
    <Router>
      <Protected>

      <Navbar/>
      </Protected>
      <Routes>

      <Route   path="/"  element={ <Protected> <Home/> </Protected> } />
      <Route  path = "/login" element = {<Login/>}/>
      

      </Routes>

    </Router>
  )
}

export default App
