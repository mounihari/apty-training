const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const allBtn = document.getElementById('allBtn');
const viewBtn = document.getElementById('viewBtn');
const idInput = document.getElementById('idInput');

const API_URL = 'https://dummyjson.com/products';

async function fetchProducts(limit = 20) {
  const response = await fetch(`${API_URL}?limit=${limit}`);
  if (!response.ok) throw new Error('Error fetching products');
  const data = await response.json();
  return data.products;
}

async function searchProducts(query) {
  const response = await fetch(`${API_URL}/search?q=${query}`);
  if (!response.ok) throw new Error('Error searching products');
  const data = await response.json();
  return data.products;
}

async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Product not found');
  return await response.json();
}

function renderProducts(products) {
  productsContainer.innerHTML = '';

  if (!products.length) {
    const msg = document.createElement('p');
    msg.textContent = 'No products found.';
    productsContainer.appendChild(msg);
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const p of products) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const img = document.createElement('img');
    img.src = p.thumbnail || p.images?.[0] || '';
    img.alt = p.title;

    const title = document.createElement('h3');
    title.textContent = p.title;

    const description = document.createElement('p');
    description.textContent = p.description;

    const price = document.createElement('p');
    const priceBold = document.createElement('b');
    priceBold.textContent = `$${p.price}`;
    price.appendChild(priceBold);

    card.append(img, title, description, price);
    fragment.appendChild(card);
  }

  productsContainer.appendChild(fragment);
}

function renderError(message) {
  productsContainer.innerHTML = '';
  const errMsg = document.createElement('p');
  errMsg.style.color = 'red';
  errMsg.textContent = message;
  productsContainer.appendChild(errMsg);
}

searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const results = await searchProducts(query);
    renderProducts(results);
  } catch (err) {
    console.error(err);
    renderError(err.message);
  }
});

allBtn.addEventListener('click', async () => {
  try {
    const results = await fetchProducts();
    renderProducts(results);
  } catch (err) {
    console.error(err);
    renderError(err.message);
  }
});

viewBtn.addEventListener('click', async () => {
  const id = idInput.value.trim();
  if (!id) return;

  try {
    const product = await getProductById(id);
    renderProducts([product]);
  } catch (err) {
    console.error(err);
    renderError(err.message);
  }
});

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const initialProducts = await fetchProducts(20);
    renderProducts(initialProducts);
  } catch (err) {
    console.error(err);
    renderError(err.message);
  }
});
