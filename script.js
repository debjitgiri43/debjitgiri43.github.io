var a = document.getElementById("intro");
var h = document.getElementById("home");
var k = document.getElementById("about");
var su = document.getElementById("support");
var so = document.getElementById("socials");
function t2(){
    a.innerHTML = "Let's get started!";
}
function q(){
    window.setTimeout("t2()", 2000);
}
function home(){
    if (h.style.display === "none"){
        h.style.display = "block";
        k.style.display = "none";
        su.style.display = "none";
        so.style.display = "none";
    }
}
function about(){
    if (k.style.display === "none"){
        h.style.display = "none";
        k.style.display = "block";
        su.style.display = "none";
        so.style.display = "none";
    }
    else{
        h.style.display = "block";
        k.style.display = "none";
        su.style.display = "none";
        so.style.display = "none";
    }
}
function support(){
    if (su.style.display === "none"){
        h.style.display = "none";
        k.style.display = "none";
        su.style.display = "block";
        so.style.display = "none";
    }
    else{
        h.style.display = "block";
        k.style.display = "none";
        su.style.display = "none";
        so.style.display = "none";
    }
}
function socials(){
    if (so.style.display === "none"){
        h.style.display = "none";
        k.style.display = "none";
        su.style.display = "none";
        so.style.display = "block";
    }
    else{
        h.style.display = "block";
        k.style.display = "none";
        su.style.display = "none";
        so.style.display = "none";
    }
}