// Datos de productos
const bikinis = [
  {
    id: 7,
    name: "Bikini Negro Tela",
    price: 49.99,
    image: "../fotos/lenceria negro completo.jpg",
  },
  {
    id: 8,
    name: "Bikini Azul Encajado",
    price: 54.99,
    image: "../fotos/bikini azul.jpg",
  },
  {
    id: 9,
    name: "Bikini Celeste Tull",
    price: 79.99,
    image: "../fotos/kini celeste.jpg",
  },
  {
    id: 10,
    name: "Bikini Rojo Seda",
    price: 59.99,
    image: "../fotos/bikini rojo.jpg",
  },
];

// Cargar productos en la página
function loadProducts() {
  const bikiniGrid = document.getElementById("bikiniGrid");
  if (!bikiniGrid) return; // Evitar error si no existe el elemento

  bikiniGrid.innerHTML = ""; // Limpiar el grid antes de cargar

  bikinis.forEach((bikini) => {
    const bikiniCard = document.createElement("div");
    bikiniCard.className = "bikini-card";
    bikiniCard.innerHTML = `
              <a href="product.html?id=${bikini.id}">
                  <div class="bikini-image">
                      <img src="${bikini.image}" alt="${bikini.name}">
                  </div>
                  <div class="bikini-details">
                      <h3 class="bikini-name">${bikini.name}</h3>
                      <p class="bikini-price">$${bikini.price}</p>
                  </div>
              </a>
          `;
    bikiniGrid.appendChild(bikiniCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});
