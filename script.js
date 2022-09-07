/***** LOADING SCREEN *****/
var myVar;
    
function stuff() {
    myVar = setTimeout(showPage, 1000);
}

function loadingScreen() {
    stuff();
}

function showPage() {
    document.getElementsByClassName("gooey")[0].style.display = "none";
    document.getElementsByClassName("dot")[0].style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
    


/***** CHANGE IMAGE *****/
var n = 0;

function changeImage() {
    if ( n == 0 ) {
    document.getElementsByClassName('dlimg')[0].src = "Images/sun.png";
    n = 1;
    }
    else if ( n == 1 ) {
    document.getElementsByClassName('dlimg')[0].src = "Images/moon.png";
    n = 0;
    }
}
    
    
    
/***** DARK/LIGHT TOGGLE *****/
function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    changeImage();
}
    
    
    
/***** TRANSITIONING TOPNAV COLOR *****/
window.onscroll = function() {scrollFunction()};  
    
    
    
/***** SCROLL-TO-TOP BUTTON *****/
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topbtn").style.display = "block";
    document.getElementById("dltoggle").style.display = "block";
    document.getElementsByClassName('topnav')[0].style.backgroundColor = "white";
    document.getElementsByClassName('topnav')[0].style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    document.getElementById('logoimg').src = "Images/OO-scroll.png";
    document.getElementsByClassName('backbtn')[0].style.color = "black"
        
    } else {
    document.getElementById("topbtn").style.display = "none";
    document.getElementById("dltoggle").style.display = "none";
    document.getElementsByClassName('topnav')[0].style.backgroundColor = "transparent";
    document.getElementsByClassName('topnav')[0].style.boxShadow = "none";
    document.getElementById('logoimg').src = "Images/OO-top.png";
    document.getElementsByClassName('backbtn')[0].style.color = "white"
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
