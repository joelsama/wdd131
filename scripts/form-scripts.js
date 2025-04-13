javascript
// Product array
const products = [
    { id: 'p1', name: 'Product A' },
    { id: 'p2', name: 'Product B' },
    { id: 'p3', name: 'Product C' }
];
// Populate product dropdown
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name; // Using name for value
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Track number of reviews submitted
if (window.location.pathname.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Display review count if needed
    document.body.insertAdjacentHTML('beforeend', <p>Reviews Completed: ${reviewCount}</p>);
}
