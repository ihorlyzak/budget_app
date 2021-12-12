window.addEventListener('DOMContentLoaded', function () {

    //! HOME PAGE 

    //* get started btn
    document.querySelector('.get_started_btn').onclick = function () {
        location.href = "#expenses";
    }
    //* get started btn

    //! HOME PAGE 


    //! EXPENSES PAGE

    //* progress sircle 
    @@include('_progress-sircle.js')
    //* progress sircle 

    //! EXPENSES PAGE


    //! INCOME PAGE
    //! INCOME PAGE



    //! LEFT aside 

    //* menu - active
    @@include('_left-aside-active.js')
    //* menu - active

    //* arrows scroll
    @@include('_arrows-nav.js')
    //* arrows scroll

    //! LEFT aside 



    //! RIGHT aside 

    //* aside menu
    @@include('_aside-menu.js')
    //* aside menu

    //! RIGHT aside 


    //* popups 
    @@include('_popups.js')
    //* popups 



})



