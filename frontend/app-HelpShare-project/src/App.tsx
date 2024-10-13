
import { Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import { LoginUser } from "./components/LoginUser";
import { UserProfile } from "./components/UserProfile";
import { Search } from "./components/Search";
import { FormOffers } from "./components/FormOffers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/search"element={<Search />} />
        <Route path="/formOffer" element={<FormOffers />} />
      </Routes>
    </div>
  );
}

export default App;
