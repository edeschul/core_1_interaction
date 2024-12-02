document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleButton.textContent = body.classList.contains('dark-mode') ? 'Toggle light mode' : 'Toggle dark mode';
    });
});



