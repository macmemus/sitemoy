function openDrawer() {
    document.getElementById("drawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("drawer").style.width = "0";
}


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const guides = document.querySelectorAll('.guide-card');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        guides.forEach(guide => {
            const title = guide.querySelector('h2').textContent.toLowerCase();
            const content = guide.querySelector('p').textContent.toLowerCase();

            if (title.includes(query) || content.includes(query)) {
                guide.style.display = '';
            } else {
                guide.style.display = 'none';
            }
        });
    });
});
