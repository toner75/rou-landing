const burger = () => {
    const button = document.querySelector('.burger-menu button');
    const burgerLinks = document.querySelector('.burger-menu__links');
    
    button.addEventListener('click', () => {
        button.classList.toggle('is-active');
        burgerLinks.classList.toggle('hidden');
    });

    burgerLinks.addEventListener('click', (e) => {
        if (e.target && e.target.tagName === "A") {
            button.classList.remove('is-active');
            burgerLinks.classList.add('hidden');
        }
    });
};

export default burger;