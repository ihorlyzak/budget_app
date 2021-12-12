//! dots active
const pages = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.scroll__menu-item');


function removeClassActive() {
    dots.forEach((item) => item.classList.remove('scroll__menu-item_active'));
}

document.body.addEventListener('click', (e) => {

    if (e.target.classList.contains('scroll__menu-item')) {

        removeClassActive();

        for (let i = 0; i < pages.length; i++) {

            if (e.target.dataset.asideLink === pages[i].dataset.section) {

                for (let i = 0; i < dots.length; i++) {
                    if (e.target.dataset.asideLink === dots[i].dataset.asideLink)
                        dots[i].classList.add('scroll__menu-item_active');

                }

            }
        }
    }
});
//! dots active



//! arrows activating dots from left aside nav menu
const toBottomArrows = document.querySelectorAll('.arrow-down');
const toTopArrows = document.querySelectorAll('.arrow-up');
const arrowsContainer = document.querySelectorAll('.button-container');

for (let i = 0; i < arrowsContainer.length; i++) {

    arrowsContainer[i].addEventListener('click', (e) => {

        //! to bottom
        if (e.target.classList.contains('arrow-down')) {
            removeClassActive();

            for (let i = 0; i < dots.length; i++) {

                if (e.target.dataset.arrowTo === dots[i].dataset.asideLink) {
                    dots[i].classList.add('scroll__menu-item_active');
                }
            }
        }

        //! to top
        if (e.target.classList.contains('arrow-up')) {
            removeClassActive();

            for (let i = 0; i < dots.length; i++) {

                if (e.target.dataset.arrowTo === dots[i].dataset.asideLink) {
                    dots[i].classList.add('scroll__menu-item_active');
                }
            }
        }

    });

}



//! aside menu activating dots from left aside nav menu
const asideMenuItemsContainer = document.querySelectorAll('.sidebar-navigation__menu');
const asideMenuItems = document.querySelectorAll('.sidebar-navigation__menu-item');

for (let i = 0; i < asideMenuItemsContainer.length; i++) {

    asideMenuItemsContainer[i].addEventListener('click', (e) => {

        if (e.target.classList.contains('sidebar-navigation__menu-item')) {
            removeClassActive();

            for (let i = 0; i < dots.length; i++) {

                if (e.target.dataset.asideLink === dots[i].dataset.asideLink)
                    dots[i].classList.add('scroll__menu-item_active');

            }

        }
    });
}



