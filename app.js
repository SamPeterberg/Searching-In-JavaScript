// Function to render products
function renderProducts(products) {
  const productGrid = document.getElementById("productGrid");

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>${product.Color}</p>
      <span>$${product.price}</span>
    `;

    productGrid.appendChild(productCard);
  });
}

// Example product data
const products = [
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/themes/twentyfourteen/assets/img/product-range/bike7-2.png",
    title: "Honda CD 70",
    Color: "Black",
    price: "157900 PKR",
  },
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/uploads/2024/08/CD70Blue-01.png",
    title: "Honda CD 70",
    Color: "Blue",
    price: "157900 PKR",
  },
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/uploads/2024/08/CD70Red-300x300.png",
    title: "Honda CD 70",
    Color: "Red",
    price: "157900 PKR",
  },
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/themes/twentyfourteen/assets/img/product-range/bike8-2.png",
    title: "Honda CB 125F",
    Color: "Black",
    price: "350900 PKR",
  },
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/uploads/2024/02/0002_red.png  ",
    title: "Honda CB 125F",
    Color: "Red",
    price: "350900 PKR",
  },
  {
    image:
      "https://images.priceoye.pk/honda-cb125f-pakistan-priceoye-mdwf5.jpg",
    title: "Honda CB 125F",
    Color: "Blue",
    price: "350900 PKR",
  },
  {
    image:
      "https://ahsanautos.pk/wp-content/uploads/2022/12/cb125f-white-min.png",
    title: "Honda CB 125F",
    Color: "White",
    price: "350900 PKR",
  },
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/uploads/2019/02/CG125S-Red.png",
    title: "Honda CG 125",
    Color: "Red",
    price: "250900 PKR",
  },
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/uploads/2019/02/CG125S-Black.png",
    title: "Honda CG 125",
    Color: "Black",
    price: "250900 PKR",
  },
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/uploads/2024/09/0003_CG125-Gold-Black.png",
    title: "Honda CG 125 Gold Edition",
    Color: "Black Gold",
    price: "370900 PKR",
  },
  {
    image:
      "https://www.atlashonda.com.pk/wp-content/uploads/2024/09/0002_CG125-Gold-Red.png",
    title: "Honda CG 125 Gold Edition",
    Color: "Red Gold",
    price: "370900 PKR",
  },
  {
    image:
      "https://images.priceoye.pk/honda-cg125-self-pakistan-priceoye-ulaz5.jpg",
    title: "Honda CG 125 Special Edition",
    Color: "Black",
    price: "350900 PKR",
  },
];

// Call the function to render products
renderProducts(products);

var search = document.getElementById("search").value;

console.log(search);
