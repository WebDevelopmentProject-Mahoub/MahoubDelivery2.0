const primaryNav = document.querySelector(".primary-navigation");
const navBarToggle = document.querySelector(".mobile-nav-toggle ");

navBarToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        console.log("false");
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false)
    }
});
