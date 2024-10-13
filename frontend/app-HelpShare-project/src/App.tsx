import { Route, Routes } from "react-router-dom"
import { Login } from "./components/Login"
import { Register } from './components/Register'
import { Form } from './components/Form'
function App() {
  return (
  <div className="App">
    <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register"element={<Register />} />
            <Route path="/form"element={<Form />} />
          </Routes>
  </div>
   
  )
}

export default App
