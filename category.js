// Datos de productos
const bikinis = [
  {
    id: 8,
    name: "Bikini Azulino Encajado",
    price: 65.0,
    image: "fotos/bikini azul.webp",
  },
  {
    id: 9,
    name: "Bikini Celeste Ari",
    price: 70.0,
    image: "fotos/kini celeste.jpg",
  },
  {
    id: 10,
    name: "Bikini Rojo Ari",
    price: 70.0,
    image: "fotos/bikini rojo.jpg",
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
