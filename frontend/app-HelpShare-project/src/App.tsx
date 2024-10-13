import { Route, Routes } from "react-router-dom";
import { LoginUser } from "./components/LoginUser";
import { UserProfile } from "./components/UserProfile";
import { Search } from "./components/Search";
import { RegisterUser } from "./components/RegisterUser.ts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} /> 
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/search"element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
