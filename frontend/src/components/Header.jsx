import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">DEVFLIX</a>
      <nav aria-label="Menu principal">
        <a href="#home">HOME</a>
        <a href="#frontend">Categorias</a>
      </nav>
    </header>
  );
}
export default Header;