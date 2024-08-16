document.addEventListener('DOMContentLoaded', function() {
    let toggles = document.querySelectorAll('.toggle');
    let contents = document.querySelectorAll('.content');
    let icons = document.querySelectorAll('.icon');

    toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            let content = contents[index];
            let icon = icons[index];

            if (content.style.height && content.style.height !== '0px') {
                content.style.height = '0px';
                toggle.style.color = '#007BFF';
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                content.style.height = content.scrollHeight + 'px';
                toggle.style.color = '#0056b3';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }

            // Fechar outras seções
            contents.forEach((otherContent, otherIndex) => {
                if (otherIndex !== index) {
                    otherContent.style.height = '0px';
                    toggles[otherIndex].style.color = '#007BFF';
                    icons[otherIndex].classList.remove('fa-minus');
                    icons[otherIndex].classList.add('fa-plus');
                }
            });
        });
    });
});
