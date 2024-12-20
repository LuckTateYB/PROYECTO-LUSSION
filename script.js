// Datos de productos
const products = [
  {
    id: 1,
    name: "Conjunto Negro Elegante",
    price: 50.0,
    image: "fotos/lence katy.webp",
  },
  {
    id: 2,
    name: "Conjunto Negro Tiras",
    price: 49.0,
    image: "fotos/lenceria negro tiras.webp",
  },
  {
    id: 3,
    name: "Conjunto Azul Basico",
    price: 55.0,
    image: "fotos/lence azul basico.webp",
  },
  {
    id: 4,
    name: "Conjunto Rojo Tull Love",
    price: 55.0,
    image: "fotos/lence tull love.webp",
  },
  {
    id: 5,
    name: "Conjunto Rojo Básico",
    price: 45.0,
    image: "fotos/lence roja basico.webp",
  },
  {
    id: 6,
    name: "Lenceria Azul Bebé",
    price: 69.99,
    image: "fotos/lence encaje celeste.webp",
  },
];

// Cargar productos en la página
function loadProducts() {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid) return; // Evitar error si no existe el elemento

  productGrid.innerHTML = ""; // Limpiar el grid antes de cargar

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <a href="product.html?id=${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$${product.price}</p>
                </div>
            </a>
        `;
    productGrid.appendChild(productCard);
  });
}

// Función para buscar productos
function searchProducts() {
  const searchBar = document.querySelector(".search-bar input");
  const searchQuery = searchBar.value.toLowerCase();

  // Filtrará los productos según lo que escribas
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  // Mostrará los productos según la busqueda que se haga
  const productGrid = document.getElementById("productGrid");
  if (!productGrid) return;

  productGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `<p>No se encontraron productos.</p>`;
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <a href="product.html?id=${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">$${product.price}</p>
        </div>
      </a>
    `;
    productGrid.appendChild(productCard);
  });
}

// Event Listener para el campo de búsqueda
function initSearch() {
  const searchBar = document.querySelector(".search-bar input");
  if (!searchBar) return;

  searchBar.addEventListener("input", searchProducts); // Ejecutar búsqueda en cada entrada
}

// Carrusel
const carousel = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (carousel && slides.length > 0) {
  // Verificar que existan los elementos
  let currentSlide = 0;
  const slideCount = slides.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Actualizar dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
  }

  // Event Listeners para los botones
  if (prevBtn && nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  // Event Listeners para los dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateCarousel();
    });
  });

  // Auto-play del carrusel
  let autoplayInterval = setInterval(nextSlide, 5000);

  // Pausar auto-play cuando el mouse está sobre el carrusel
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoplayInterval);
  });

  // Reanudar auto-play cuando el mouse sale del carrusel
  carousel.addEventListener("mouseleave", () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });

  // Inicializar carrusel
  updateCarousel();
}

// Menú móvil
const menuToggle = document.querySelector(".menu-toggle");
const navIcons = document.querySelector(".nav-icons");

if (menuToggle && navIcons) {
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navIcons.classList.toggle("active");
  });
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  initSearch();
});
