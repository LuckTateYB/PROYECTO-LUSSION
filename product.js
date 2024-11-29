// Datos del producto (simulando una base de datos)
const productData = {
  1: {
    name: "Conjunto Negro Mint",
    price: 49.99,
    description:
      "Hermoso conjunto de lencería en tono verde mint, elaborado con los mejores materiales para tu máxima comodidad.",
    images: ["fotos/conjunto.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  2: {
    name: "Conjunto Negro Mate",
    price: 54.99,
    description:
      "Lujoso conjunto en negro mate, elaborado con materiales de alta calidad, no se dañan al ser lavados.",
    images: ["fotos/encajable.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  3: {
    name: "Encaje Seda Natural",
    price: 79.99,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/azulito.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  4: {
    name: "Conjunto Negro Elegante",
    price: 59.99,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lenceria katy negro.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  5: {
    name: "Conjunto Rojo Pasión",
    price: 59.99,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/conjunto rojo.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  6: {
    name: "Lencería Azul Bebé",
    price: 69.99,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/conjunto celeste.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },

  // Agregar más productos si la empresa lo necesita
  // Tambien se puede eliminar productos que ya no se volverán a producir
};

// Obtener ID del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

let currentQuantity = 1;

function loadProductDetails() {
  const product = productData[productId];
  if (!product) {
    window.location.href = "index.html";
    return;
  }

  // Cargar información básica
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = `$${product.price}`;
  document.getElementById("productDescription").textContent =
    product.description;
  document.getElementById("mainImage").src = product.images[0];

  // Cargar miniaturas
  const thumbnailGrid = document.getElementById("thumbnailGrid");
  product.images.slice(1).forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = `${product.name} Thumbnail ${index + 1}`;
    img.className = "thumbnail";
    img.onclick = () => updateMainImage(image);
    thumbnailGrid.appendChild(img);
  });

  // Cargar tallas
  const sizeOptions = document.getElementById("sizeOptions");
  product.sizes.forEach((size) => {
    const button = document.createElement("button");
    button.className = "size-btn";
    button.textContent = size;
    button.onclick = () => selectSize(button);
    sizeOptions.appendChild(button);
  });

  // Cargar colores
  const colorOptions = document.getElementById("colorOptions");
  product.colors.forEach((color) => {
    const button = document.createElement("button");
    button.className = "color-btn";
    button.textContent = color;
    button.onclick = () => selectColor(button);
    colorOptions.appendChild(button);
  });
  // Cargar el mensaje codificado dinamico para diferentes productos
  const whatsappMess = `Hola, estoy interesado en el producto: ${product.name} que tiene un precio de $${product.price}. ¿Está disponible?`;
  const mensajeCode = encodeURIComponent(whatsappMess);
  const whatsappLink = `https://wa.me/51912075022?text=${mensajeCode}`;

  // Asignar el enlace de whatsapp al botón
  const whatsappBtn = document.getElementById("whatsappBtn");
  whatsappBtn.href = whatsappLink;
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Evita comportamiento predeterminado
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
    }, 100); // Retraso para asegurar que el mensaje cargue
  });
}

function updateMainImage(src) {
  document.getElementById("mainImage").src = src;
}

function selectSize(button) {
  document
    .querySelectorAll(".size-btn")
    .forEach((btn) => btn.classList.remove("selected"));
  button.classList.add("selected");
}

function selectColor(button) {
  document
    .querySelectorAll(".color-btn")
    .forEach((btn) => btn.classList.remove("selected"));
  button.classList.add("selected");
}

function updateQuantity(change) {
  currentQuantity = Math.max(1, currentQuantity + change);
  document.getElementById("quantity").textContent = currentQuantity;
}

// Cargar detalles cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  loadProductDetails();
});