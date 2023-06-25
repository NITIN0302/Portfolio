
let sections = document.querySelectoeAll('section');
let navLinks = document.querySelectorAll('heaader nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top  < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                DocumentFragment.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
