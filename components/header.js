function createElHeader(el) {
  const componentEl = document.createElement("header");
  componentEl.innerHTML = `
    <div class="header">
    <a href="./index.html">
    <img src="./images/logoNNF.svg" alt="" class="header__logo" />
    </a>

    <button class="abre-ventana">
        <img src="./images/burger.svg" alt="">
    </button>
    <div class="ventana">
      <div class="ventana__contenedor-boton">
        <button class="ventana__cierra-ventana">
            <img src="./images/cruzBlanca.svg" alt="">
        </button>
        </div>
        <nav class="header__menu-burger">
        <a href="./portfolio.html" class="header__menu-burger-link">Artículos</a>
        <a href="./servicies.html" class="header__menu-burger-link">Servicios</a>
        <a href="./contact.html" class="header__menu-burger-link">Contacto</a>
        </nav>
        </div>

    <nav class="header__menu">
      <a href="./portfolio.html" class="header__menu-link">Artículos</a>
      <a href="./servicies.html" class="header__menu-link">Servicios</a>
      <a href="./contact.html" class="header__menu-link">Contacto</a>
    </nav>
    </div>
  `;

  el.appendChild(componentEl);
}
