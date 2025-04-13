
export const navigationChanger = () => {
    const iconClose = "../images/icon-close.svg";
    const iconHamburguer = "../images/icon-hamburger.svg";

    const navigationToggle = (event) => {
        const hamburguerIcon = event.target;
        const navbar = document.querySelector(".navbar");
        const logo = document.querySelector(".navbar__logo");

        const isOpen = navbar.classList.contains("mobile-menu--open");

        if (!isOpen) {
            // Open menú
            hamburguerIcon.src = iconClose;
            navbar.classList.add("mobile-menu--open");
            logo.classList.add("hidden");
        } else {
            // Close menú
            hamburguerIcon.src = iconHamburguer;
            navbar.classList.remove("mobile-menu--open");
            logo.classList.remove("hidden");
        }
    };

    document.querySelector(".navbar__hamburguer").addEventListener("click", navigationToggle);
};