import CVI from "./CVI";
import HeaderSocials from "./HeaderSocials";
import ME from "../images/ME.png";
import "./header.scss";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ibrokhim Jo'rayev</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CVI />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
