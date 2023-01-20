window.onload = addListeners;

function addListeners () {

    console.log("aaaaaaaaaaaaaaaaaa");

    document.getElementById("hamb_menu_link").addEventListener("click", show_menu);
    document.getElementById("close_menu_link").addEventListener("click", hide_menu);

}

function show_menu () {    

    document.getElementById("hamburger_menu").classList.remove("hide_menu")
    setTimeout(function(){
        document.getElementById("hamburger_menu").classList.add("slide_menu")
    }, 1)

} 

function hide_menu () {    

    document.getElementById("hamburger_menu").classList.remove("slide_menu")
    setTimeout(function(){        
        document.getElementById("hamburger_menu").classList.add("hide_menu")
    }, 301)

} 