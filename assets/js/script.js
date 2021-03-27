window.onload = function(){
    document.querySelector(".mobile_menu_button").addEventListener("click", function(){
        var menu = document.querySelector('.mobile_menu ul');
        
        if(window.getComputedStyle(menu).getPropertyValue('display') == "block"){
            menu.style.setProperty("display", "none");
        } else {
            menu.style.setProperty("display", "block");
        }
    });
}