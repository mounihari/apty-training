const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const allBtn = document.getElementById('allBtn');
const viewBtn = document.getElementById('viewBtn');
const idInput = document.getElementById('idInput');

const API_URL = 'https://dummyjson.com/products';

async function fetchProducts(limit = 20) {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Fetch error:', error);
    productsContainer.innerHTML = `<p style="color:red;">Error fetching products</p>`;
    return [];
  }
}

async function searchProducts(query) {
  try {
    const response = await fetch(`${API_URL}/search?q=${query}`);
    if (!response.ok) throw new Error('Search failed');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Search error:', error);
    productsContainer.innerHTML = `<p style="color:red;">Error searching products</p>`;
    return [];
  }
}

async function getProductById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Product not found');
    const product = await response.json();
    renderProducts([product]);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    productsContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

function renderProducts(products) {
  if (!products.length) {
    productsContainer.innerHTML = '<p>No products found.</p>';
    return;
  }
  productsContainer.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.thumbnail || p.images?.[0]}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <p><b>$${p.price}</b></p>
    </div>
  `).join('');
}

searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (query) {
    const results = await searchProducts(query);
    renderProducts(results);
  }
});

allBtn.addEventListener('click', async () => {
  const results = await fetchProducts();
  renderProducts(results);
});

viewBtn.addEventListener('click', () => {
  const id = idInput.value.trim();
  if (id) getProductById(id);
});

window.addEventListener('DOMContentLoaded', async () => {
  const initialProducts = await fetchProducts(20);
  renderProducts(initialProducts);
});
