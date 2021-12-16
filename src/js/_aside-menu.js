// ! POPUP menu
const asideOpenBtn = document.querySelectorAll('.aside-open');
const asideCloseBtn = document.querySelectorAll('.aside-close');
const aside = document.querySelectorAll('.aside-navigation');

for (let i = 0; i < aside.length; i++) {
    //! open aside-menu
    asideOpenBtn[i].addEventListener('click', () => {
        aside[i].classList.add('open');

        aside[i].addEventListener('click', (e) => {
            if (!e.target.closest('.sidebar-navigation__container')) {
                aside[i].classList.remove('open');
            }
        });

    })

    //! close aside-menu
    asideCloseBtn[i].addEventListener('click', () => {
        aside[i].classList.remove('open');
    })
}

//! close menu after click
const asideMenuItems = document.querySelectorAll('.sidebar-navigation__menu-item');

for (let i = 0; i < asideMenuItems.length; i++) {

    asideMenuItems[i].onclick = () => {
        for (let i = 0; i < aside.length; i++) {
            aside[i].classList.remove('open');
        }
    }

}

