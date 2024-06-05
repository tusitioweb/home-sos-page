
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    const showFooterAt = window.innerHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            footer.classList.add('footer-visible');
        } else {
            footer.classList.remove('footer-visible');
        }
    });
});



