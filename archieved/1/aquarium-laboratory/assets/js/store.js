// Select all category checkboxes and product boxes
const checkboxes = document.querySelectorAll('.category-checkbox');
const products = document.querySelectorAll('.product-box');

// Add event listeners to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', filterProducts);
});

// Function to filter products based on selected categories
function filterProducts() {
  // Get all checked categories
  const selectedCategories = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  // If "all" is selected, show all products
  if (selectedCategories.includes('all')) {
    products.forEach((product) => (product.style.display = 'block'));
    return;
  }

  // Otherwise, show/hide products based on their category
  products.forEach((product) => {
    const productClasses = Array.from(product.classList);
    const isVisible = selectedCategories.some((category) =>
      productClasses.includes(category)
    );
    product.style.display = isVisible ? 'block' : 'none';
  });
}
