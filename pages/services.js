function addServiceCard(params = {}) {
  const template = document.querySelector("#services__offer__service-template");
  const container = document.querySelector(".services__offer");

  template.content.querySelector(".services__offer__service__img").src =
    params.image;

  template.content.querySelector(
    ".services__offer__service__title"
  ).textContent = params.title;

  template.content.querySelector(
    ".services__offer__service__text"
  ).textContent = params.description;

  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/fraoweebcat9/environments/master/entries?access_token=pAmWXZMyX4rtbYQUI0Yj9UAjFjyn1VzbynzSVCVctOo&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((dataJson) => {
      const fieldsCollections = dataJson.items.map((item) => {
        function obtenerId(idDeMiImagen, data) {
          return data.includes.Asset.find((itemsito) => {
            return itemsito.sys.id == idDeMiImagen;
          });
        }

        const idImage = obtenerId(item.fields.image.sys.id, dataJson);
        const imageUrl = idImage.fields.file.url;

        return {
          image: imageUrl,
          title: item.fields.title,
          description: item.fields.content,
        };
      });
      return fieldsCollections;
    });
}

function main() {
  const headerContainer = document.querySelector(".header-cont");
  createElHeader(headerContainer);

  const footerContainer = document.querySelector(".footer-cont");
  createElFooter(footerContainer);

  getServices().then(function (services) {
    for (const w of services) {
      addServiceCard(w);
    }
  });
}

main();
