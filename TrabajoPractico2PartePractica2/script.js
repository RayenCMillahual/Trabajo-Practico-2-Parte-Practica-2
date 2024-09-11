document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const categorySelect = document.getElementById('categorySelect');
    // Fetch cargar categorías
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            data.categories.forEach(category => {
                const opt = document.createElement('option');
                opt.value = category;
                opt.textContent = category;
                categorySelect.appendChild(opt);
            });
        })
        .catch(error => console.error('Error al cargar las categorías:', error));

    // Listener para el submit
    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            category: document.getElementById('categorySelect').value,
            termsAccepted: document.getElementById('terms').checked
        };

        console.log(formData);
    });
});
