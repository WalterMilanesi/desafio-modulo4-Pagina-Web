function createElFooter(el) {
  const componentEl = document.createElement("footer");
  componentEl.innerHTML = `
    <div class="footer__subdivision-logo">
    <img
      class="footer__subdivision-logo__logo-inferior"
      src="./images/logoNNF.svg"
      alt="Logo del desarrollador"
    />
  </div>

  <div class="footer__redes-sociales">
    <div class="footer__red-social">
      <p class="footer__red-social__texto">Instagram</p>
      <img
        class="footer__red-social__logotipo"
        src="./images/instagram.svg"
        alt="Logo de Instagram"
      />
    </div>
    <div class="footer__red-social">
      <p class="footer__red-social__texto">Linkedin</p>
      <img
        class="footer__red-social__logotipo"
        src="./images/linkedin.svg"
        alt="Logo de Linkedin"
      />
    </div>
    <div class="footer__red-social">
      <p class="footer__red-social__texto">Github</p>
      <img
        class="footer__red-social__logotipo"
        src="./images/github.svg"
        alt="Logo de Github"
      />
    </div>
  </div>
    `;
  el.appendChild(componentEl);
}
