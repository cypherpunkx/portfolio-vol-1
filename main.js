function updateList() {
    const titles = [...document.querySelectorAll('h1,h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top)
    });

    document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

    const s = document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])];
    console.log(s)
}

updateList();

window.addEventListener('scroll', function () {
    updateList();
})