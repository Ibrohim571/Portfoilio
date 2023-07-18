import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./navbar.scss";

function Navbar() {
  const [active, setActive] = useState("#home");

  return (
    <nav>
      <a
        href="#"
        className={active === "#home" ? "active" : ""}
        onClick={() => setActive("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={active === "#services" ? "active" : ""}
        onClick={() => setActive("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navbar;
