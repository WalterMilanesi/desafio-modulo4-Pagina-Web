function createElContactForm(el) {
  const componentEl = document.createElement("contactForm");
  componentEl.innerHTML = `
    <section class="contact">
    <h2 class="contact__title">Escribenos</h2>
    <form class="contact__form">
      <label>
        <h3 class="contact__label">Nombre</h3>
        <input type="text" class="contact__input" name="name"/>
      </label>
      <label>
        <h3 class="contact__label">Email</h3>
        <input type="mail" class="contact__input" name="email"/>
      </label>
      <label>
        <h3 class="contact__label">Mensaje</h3>
        <textarea class="contact__input-mensaje" name="message"></textarea>
      </label>
      <div class="contact__submit-cont">
        <button class="contact__submit-button">Enviar</button>
      </div>
    </form>
  </section>
    `;
  el.appendChild(componentEl);
  sendForm();
}

function sendForm() {
  const formEl = document.querySelector(".contact__form");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "waltermilanesi@hotmail.com",
        message: `Nombre De Usuario: ${data.name}, 
        Correo Electrónico: ${data.email}, 
        Mensaje: ${data.message}`,
      }),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  });
}
