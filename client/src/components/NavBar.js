import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/navBar.css";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>

      <h3>Opensea</h3>

      <nav ref={navRef}>
        <a href="/#">Explore</a>
        <a href="/#">Stats</a>
        <a href="/#">Resoures</a>
        <a href="/#">Create</a>
        
        <button ClassName="nav-btn nav-close-btn" onClick={showNavbar}>
             <FaTimes />
        </button>
      </nav>

      <button ClassName="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

    </header>
  );
}

export default NavBar;
