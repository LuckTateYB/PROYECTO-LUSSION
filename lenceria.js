// Datos de productos
const lences = [
  {
    id: 4,
    name: "Conjunto Negro Elegante",
    price: 59.99,
    image: "fotos/lence katy.webp",
  },
  {
    id: 5,
    name: "Conjunto Rojo Pasión",
    price: 59.99,
    image: "fotos/lenceria cherry.webp",
  },
  {
    id: 6,
    name: "Lenceria Azul Bebé",
    price: 69.99,
    image: "fotos/lence encaje celeste.webp",
  },
  {
    id: 11,
    name: "Lenceria Negra",
    price: 69.99,
    image: "fotos/lence negra.webp",
  },
  {
    id: 12,
    name: "Lenceria Negro Texturizado",
    price: 69.99,
    image: "fotos/lence negro cachetero.webp",
  },
  {
    id: 13,
    name: "Lenceria Negra Lisa",
    price: 69.99,
    image: "fotos/lenceria-lisa-negra.webp",
  },
  {
    id: 14,
    name: "Lenceria Roja Texturizada",
    price: 69.99,
    image: "fotos/lence roja basico.webp",
  },
  {
    id: 15,
    name: "Lenceria Rosa Pastel",
    price: 59.99,
    image: "fotos/lenceria-rosa-pastel.webp",
  },
  {
    id: 16,
    name: "Lenceria de Encaje Vino Tinto",
    price: 69.99,
    image: "fotos/lence encaje vino.webp",
  },
  {
    id: 17,
    name: "Lenceria de Encaje Negra",
    price: 69.99,
    image: "fotos/lenceria-completa-negra.webp",
  },
  {
    id: 18,
    name: "Lenceria de Encaje Blanco con Diseño",
    price: 69.99,
    image: "fotos/lence encaje blanco.webp",
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
