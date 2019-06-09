// Navbar scripts
var menubtn = document.querySelector(".menu-btn");
var closebtn = document.querySelector(".navbar__closebtn");
var navbar = document.querySelector(".navbar");
var i = window.matchMedia("(max-width: 768px)");
menubtn.addEventListener('click', function() {
  if (i.matches) {
  navbar.style.width = "100%";
  } else {
    navbar.style.width = "30%";
  }
});
closebtn.addEventListener('click', function() {
  navbar.style.width = "0";
});
menubtn.addEventListener('click', function() {
  closebtn.style.display = "block";
  menubtn.style.display = "none";
});
closebtn.addEventListener('click', function() {
  menubtn.style.display = "block";
  closebtn.style.display = "none";
});
////////////////////////////////////////////////////////
var specialItem = document.getElementsByClassName("menu-item-has-children");
var hiddenList = document.getElementsByClassName("sub-menu");

specialItem[0].addEventListener("click", function() {
  if (hiddenList[0].style.display === "block") {
    hiddenList[0].style.display = "none";
  } else {
    hiddenList[0].style.display = "block";
  }
});
/////////////////////////////////////////////////////
// Contact pop up scripts
var mail = document.querySelector(".mail");
var cancel = document.querySelector(".cancel");
mail.addEventListener('click', function() {
  document.querySelector(".contact-form").style.display = "block";
  document.querySelector(".wrapper").style.filter = "blur(4px)";
});
cancel.addEventListener('click', function() {
  document.querySelector(".contact-form").style.display = "none"; 
  document.querySelector(".wrapper").style.filter = "none";
});
//////////////////////////////////////////////////////////
// Slider scripts
var index = 0;
function slide() {
  if(document.body.classList.contains('o-meni')) {
    var x = document.getElementsByClassName("about-me__recom");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    index++;
    if (index > x.length) {
      index = 1
    }    
    x[index-1].style.display = "block";  
    setTimeout(slide, 9000);
  }
}
slide();