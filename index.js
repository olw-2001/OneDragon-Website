document.body.classList.remove('fade');

document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
        document.body.classList.add('fade');
    }, 230);
});