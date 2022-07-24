function createElFooter(el) {
  const componentEl = document.createElement("footer");
  componentEl.innerHTML = `
    <div class="footer__subdivision-logo">
    <a href="./index.html">
    <img
      class="footer__subdivision-logo__logo-inferior"
      src="./images/logoNNF.svg"
      alt="Logo del desarrollador"
    />
    </a>
  </div>

  <div class="footer__redes-sociales">
    <a href="https://www.instagram.com/nadienacefit/" class="footer__red-social">
      <p class="footer__red-social__texto">Instagram</p>
      <img
        class="footer__red-social__logotipo"
        src="./images/instagram.svg"
        alt="Logo de Instagram"
      />
    </a>
    <a href="https://www.facebook.com/NadieNaceFit" class="footer__red-social">
      <p class="footer__red-social__texto">Facebook</p>
      <img
        class="footer__red-social__logotipo"
        src="./images/facebook.svg"
        alt="Logo de Facebook"
      />
    </a>
    <a href="https://nadienacefit.com/" class="footer__red-social">
      <p class="footer__red-social__texto">Blog</p>
      <img
        class="footer__red-social__logotipo"
        src="./images/worldwideweb.svg"
        alt="Logo de una web"
      />
    </a>
  </div>
    `;
  el.appendChild(componentEl);
}
