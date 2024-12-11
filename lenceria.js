// Datos de productos
const lences = [
  {
    id: 4,
    name: "Conjunto Negro Elegante",
    price: 59.99,
    image: "fotos/lenceria katy negro.jpg",
  },
  {
    id: 5,
    name: "Conjunto Rojo Pasión",
    price: 59.99,
    image: "fotos/conjunto rojo.jpg",
  },
  {
    id: 6,
    name: "Lenceria Azul Bebé",
    price: 69.99,
    image: "fotos/conjunto celeste.jpg",
  },
  {
    id: 11,
    name: "Lenceria Negro Texturizado",
    price: 69.99,
    image: "fotos/lence_text_negro.jpg",
  },
];

// Cargar productos en la página
function loadProducts() {
  const lenceriaGrid = document.getElementById("lenceriaGrid");
  if (!lenceriaGrid) return; // Evitar error si no existe el elemento

  lenceriaGrid.innerHTML = ""; // Limpiar el grid antes de cargar

  lences.forEach((lenceria) => {
    const lenceriaCard = document.createElement("div");
    lenceriaCard.className = "lenceria-card";
    lenceriaCard.innerHTML = `
                <a href="product.html?id=${lenceria.id}">
                    <div class="lenceria-image">
                        <img src="${lenceria.image}" alt="${lenceria.name}">
                    </div>
                    <div class="lenceria-details">
                        <h3 class="lenceria-name">${lenceria.name}</h3>
                        <p class="lenceria-price">$${lenceria.price}</p>
                    </div>
                </a>
            `;
    lenceriaGrid.appendChild(lenceriaCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});
