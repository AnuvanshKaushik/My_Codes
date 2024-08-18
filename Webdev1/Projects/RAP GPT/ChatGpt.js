document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchBar = document.getElementById('ADIO');

    searchBtn.addEventListener('click', () => {
        alert(`You searched for: ${searchBar.value}`);
    });

    searchBar.addEventListener('focus', () => {
        searchBar.style.boxShadow = '0 0 10px white';
    });

    searchBar.addEventListener('blur', () => {
        searchBar.style.boxShadow = 'none';
    });

    searchBar.addEventListener('input', () => {
        if (searchBar.value) {
            searchBar.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            searchBar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    });
});
