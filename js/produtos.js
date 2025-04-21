$(document).ready(function() {
  $('#Carregador, #fone, #Celular, #PowerBank').on('click', function() {
    const filters = [];
   
    if ($('#Fone').is(':checked')) {
      filters.push('Fone');
    }
    if ($('#Carregador').is(':checked')) {
      filters.push('Carregador');
    }
    if ($('#Celular').is(':checked')) {
      filters.push('Celular');
    }
    if ($('#Powerbank').is(':checked')) {
      filters.push('Powerbank');
    }


    if (filters.length > 0) {
      $('.card').hide().filter(function() {
        const filterValues = $(this).data('filter')?.split(' ') || [];
        return filters.some((filter) => filterValues.includes(filter));
      }).show();
    } else {
      $('.card').show();
    }
  });
});


// Carousel functionality
const carousel = document.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
});

// Auto-play carousel
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}, 5000);

// Search and filter functionality
const searchInput = document.querySelector('.search-input');
const filterSelect = document.querySelector('.filter-select');
const products = document.querySelectorAll('.product');

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = filterSelect.value;

  products.forEach(product => {
    const title = product.querySelector('.product-title').textContent.toLowerCase();
    const productCategory = product.dataset.category;

    const matchesSearch = title.includes(searchTerm);
    const matchesCategory = category === '' || productCategory === category;

    if (matchesSearch && matchesCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterProducts);
filterSelect.addEventListener('change', filterProducts);