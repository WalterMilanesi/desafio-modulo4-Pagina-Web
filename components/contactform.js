function createElContactForm(el) {
  const componentEl = document.createElement("contactForm");
  componentEl.innerHTML = `
    <section class="contact">
    <h2 class="contact__title">Escribenos</h2>
    <form class="contact__form">
      <label>
        <h3 class="contact__label">Nombre</h3>
        <input type="text" class="contact__input" name="name" id="name"/>
      </label>
      <label>
        <h3 class="contact__label">Email</h3>
        <input type="mail" class="contact__input" name="email" id="email"/>
      </label>
      <label>
        <h3 class="contact__label">Mensaje</h3>
        <textarea class="contact__input-mensaje" name="message" id="msg"></textarea>
      </label>
      <div class="contact__submit-cont">
        <button class="contact__submit-button">Enviar</button>
      </div>
      <div class="message">
      <div class="contact__message__success">Gracias por confiar, tu mensaje se ha enviado sin problemas</div>
      <div class="contact__message__danger">Disculpa, pero no pueden quedar campos en blanco</div>
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

    const success = document.querySelector(".contact__message__success");
    const danger = document.querySelector(".contact__message__danger");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (data.name === "" || data.email === "" || data.message === "") {
      danger.style.display = "block";
      setTimeout(() => {
        danger.style.display = "none";
      }, 2000);
    } else {
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
        .then(
          console.log(
            "Te podés quedar tranquilo que el formulario se envió correctamente"
          )
        )
        .then(formEl.reset());

      success.style.display = "block";
      setTimeout(() => {
        success.style.display = "none";
      }, 2000);
    }
  });
}
