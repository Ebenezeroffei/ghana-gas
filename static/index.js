// A class that will manage all the page functions
class Control{
    constructor(){
        $('#phone-menu, .phone-sub-menu').slideUp(0);
        // $('.phone-sub-menu-container').find('ul').slideUp(0);
        this.windowSize();
        this.toggleSubMenu();
        this.togglePhoneMenuSubMenu()
    }
    
    windowSize(){
        window.onresize = () => {
            if(window.innerWidth > 850){
                // Hide the phone menu
                $('#phone-menu').slideUp(0);
                // Hide the phone menu submenu
                $('.phone-sub-menu-container').find('ul').slideUp(0);
                // Close the phone menu
                $('#hamburger').find('p').removeClass('open');
            }
        }
    }
    

    // This function will move the page to a specific location based on the scroll
    pageLocation(){
        // Get the menu items
        let home = $('#home')[0];
        let ourServices = $('#our-services')[0];
        let contactUs = $('#contact-us')[0];
        // When the page is beign scrolled
        window.onscroll = () => {
            // We have gotten to the home section of the page
            if(home.getBoundingClientRect().bottom > 100){
                $("#nav a[href = '#home']").css('color','#1b78c0');
                $("#nav li[class = 'special']").find('span').css('color','#1b1d22');
                $("#nav a[href = '#contact-us']").css('color','#1b1d22');
            }
            // We have gotten to the services section of the page
            else if(ourServices.getBoundingClientRect().bottom > 100){
                $("#nav a[href = '#home']").css('color','#1b1d22');
                $("#nav li[class = 'special']").find('span').css('color','#1b78c0');
                $("#nav a[href = '#contact-us']").css('color','#1b1d22');
            }
            // We have gotten to the contact us section of the page
            else if(contactUs.getBoundingClientRect().bottom > 100){
                $("#nav a[href = '#home']").css('color','#1b1d22');
                $("#nav li[class = 'special']").find('span').css('color','#1b1d22');
                $("#nav a[href = '#contact-us']").css('color','#1b78c0');
            }
        }
    }

    // A function that opens the submenu
    toggleSubMenu(){
        $('#hamburger').click(function(){
            let hasClass = $(this).find('p').hasClass('open');
            if(hasClass){
                console.log("Close")
                // Close the phone menu
                $(this).find('p').removeClass('open');
                // Hide the phone menu
                $('#phone-menu').slideUp(300);
                // Hide the phone menu submenu
                $('.phone-sub-menu-container').find('ul').slideUp(300);
            }
            else{
                console.log("Open")
                // Open the phone menu
                $(this).find('p').attr('class','open');
                $('#phone-menu').slideDown(300);
            }
        });
    }
    
    // A function that slide toggles the phone menu's submenu
    togglePhoneMenuSubMenu(){
        $('.phone-sub-menu-container').click(function(){
            $(this).find('ul').slideToggle();
        });
    }
}


let control  = new Control()
