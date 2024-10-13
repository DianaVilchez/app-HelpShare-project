import { Link } from "react-router-dom";
import logo from "../assets/logo-home.png";
export const Home = () => {
  return (
    <>
      <section className="backgroundHome">
        <img src={logo} className="logoHome" />
        <div> DESCRIPCION APP</div>
        <button className="iniciar">
          <Link to="/login" className="linkStyle">
            Iniciar
          </Link>
        </button>
      </section>
    </>
  );
};
