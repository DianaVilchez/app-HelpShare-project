import { Route, Routes } from "react-router-dom"
import { Login } from "./components/login"
import { Register } from './components/Register'
import { UserProfile } from './components/UserProfile'

function App() {
  return (
  <div className="App">
    <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register"element={<Register />} />
            <Route path="/profile"element={<UserProfile />} />
          </Routes>
  </div>
   
  )
}

export default App
