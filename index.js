(() => {

    const $mainNavBurger = document.querySelector('#main-nav-burger');
    const $mainNavDropdown = document.querySelector('#main-nav-dropdown');
    const $burgerIcon = document.querySelector('#main-nav-burger i');
    const $inputIcon = document.querySelector('#input-icon');
    const $inputKeywords = document.querySelector('#input-keywords');
    const $toggleAsideButton = document.querySelector('#toggle-aside-button');
    const $asideToggled = document.querySelector('#aside-toggled');


    let isDropdownShown = false;
    let isInputShown = false;
    let isAsideToggled = true;

    $mainNavBurger.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMainNavDropdown();
        if ( isInputShown ) {
            toggleInputKeywords();
        }
    });

    $mainNavDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMainNavDropdown();
        if ( isInputShown ) {
            toggleInputKeywords();
        }
    });

    $inputIcon.addEventListener('click', (e) => {
        e.preventDefault();
        toggleInputKeywords();
        if ( isDropdownShown ) {
            toggleMainNavDropdown();
        }
    });

    $toggleAsideButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleAside();
    });

    const toggleMainNavDropdown = () => {
        $mainNavDropdown.classList.toggle('toggled');
        $burgerIcon.classList.toggle('fa-bars');
        $burgerIcon.classList.toggle('fa-times');
        isDropdownShown = !isDropdownShown;
    };

    const toggleInputKeywords = () => {
        $inputKeywords.classList.toggle('toggled');
        isInputShown = !isInputShown;
    };

    const toggleAside = () => {
        console.log($asideToggled.classList);
        $asideToggled.classList.toggle('aside-toggled');
    }


})();