// Datos del producto (simulando una base de datos)
const productData = {
  1: {
    name: "Conjunto Negro Elegante",
    price: 50.0,
    description:
      "Hermoso conjunto de lencería en tono negro mint, elaborado con los mejores materiales para tu máxima comodidad.",
    images: ["fotos/lence katy.webp", "fotos/lence katy.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  2: {
    name: "Conjunto Negro Tiras",
    price: 49.0,
    description:
      "Lujoso conjunto en negro mate, elaborado con materiales de alta calidad, no se dañan al ser lavados.",
    images: [
      "fotos/lenceria negro tiras.webp",
      "fotos/lenceria negro tiras.webp",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  3: {
    name: "Conjunto Azul Basico",
    price: 55.0,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lence azul basico.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  4: {
    name: "Conjunto Rojo Tull Love",
    price: 55.0,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lence tull love.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  5: {
    name: "Conjunto Rojo Pasión",
    price: 69.0,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lenceria cherry.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  6: {
    name: "Lencería Azul Bebé",
    price: 65.0,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lence encaje celeste.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  7: {
    name: "Lenceria Conjunto Negro Algodón",
    price: 49.0,
    description:
      "Encaje seda azul, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lence-negro-tull.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  8: {
    name: "Bikini Azulino Encajado",
    price: 65.0,
    description:
      "Encaje seda azulino, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/bikini azul.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  9: {
    name: "Bikini Celeste Ari",
    price: 70.0,
    description:
      "Encaje seda celeste, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/kini celeste.jpg", "fotos/bikini celeste.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  10: {
    name: "Bikini Rojo Ari",
    price: 70.0,
    description:
      "Encaje seda rojo, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/bikini rojo.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  11: {
    name: "Conjunto Brasier + Semi Hilo",
    price: 55.0,
    description:
      "Lenceria de encaje color negro, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lence negra.webp", "fotos/lence negra.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  12: {
    name: "Conjunto Brallet + Cachetero",
    price: 55.0,
    description:
      "Lenceria de encaje color negro, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lence_text_negro2.jpg", "fotos/lence_text_negro3.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  13: {
    name: "conjunto Tull Basico",
    price: 48.0,
    description:
      "Lenceria de encaje color negro, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: [
      "fotos/lenceria-lisa-negra.webp",
      "fotos/lenceria-lisa-negra.webp",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  14: {
    name: "Lenceria Rojo Básico",
    price: 45.0,
    description:
      "Lenceria de encaje color rojo pasión, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lence roja basico.webp", "fotos/lence roja basico.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  15: {
    name: "Lenceria Rose",
    price: 50.0,
    description:
      "Lenceria de encaje rosa pastel, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: [
      "fotos/lenceria-rosa-pastel.webp",
      "fotos/lenceria-rosa-pastel.webp",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  16: {
    name: "Lenceria de Encaje Vino",
    price: 65.0,
    description:
      "Lenceria de encaje vino tinto, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: ["fotos/lence encaje vino.webp", "fotos/lence encaje vino.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  17: {
    name: "Conjunto Brasier + Cachetero",
    price: 65.0,
    description:
      "Lenceria de encaje color negro, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: [
      "fotos/lenceria-completa-negra.webp",
      "fotos/lenceria-completa-negra.webp",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Mint", "Rosa", "Negro"],
  },
  18: {
    name: "Lenceria de Encaje Blanco con Diseño",
    price: 65.0,
    description:
      "Lenceria de encaje color negro, elaborado con la mejor seda del Perú con un diseño bonito.",
    images: [
      "fotos/lence encaje blanco.webp",
      "fotos/lence encaje blanco.webp",
    ],
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
  updateMainImage(product.images[0]);

  // Cargar miniaturas
  const thumbnailGrid = document.getElementById("thumbnailGrid");
  thumbnailGrid.innerHTML = "";
  product.images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = `${product.name} Thumbnail ${index + 1}`;
    img.className = "thumbnail";
    img.onclick = () => {
      currentIndex = index;
      updateMainImage(image);
    };
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

document.getElementById("prevBtn").addEventListener("click", () => {
  const product = productData[productId];
  if (!product) return;
  currentIndex =
    (currentIndex - 1 + product.images.length) % product.images.length;
  updateMainImage(product.images[currentIndex]);
});

//Uncaught ReferenceError: currentIndex is not defined
//at HTMLButtonElement.<anonymous> (product.js:194:3)
document.getElementById("nextBtn").addEventListener("click", () => {
  const product = productData[productId];
  if (!product) return;
  currentIndex = (currentIndex + 1) % product.images.length;
  updateMainImage(product.images[currentIndex]);
});

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
