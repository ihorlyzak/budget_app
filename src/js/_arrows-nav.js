// ! arrows scroll
const scrollDownBtn = document.querySelectorAll('.arrow-down');
const scrollUpBtn = document.querySelectorAll('.arrow-up');

for (let i = 0; i < scrollDownBtn.length; i++) {
    scrollDownBtn[i].addEventListener('click', () => {
        window.scrollBy(0, window.innerHeight);
    });
}

for (let i = 0; i < scrollUpBtn.length; i++) {
    scrollUpBtn[i].addEventListener('click', () => {
        window.scrollBy(0, -window.innerHeight);
    });
}



