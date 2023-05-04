// this is for ajax navbar 

$(document).ready(function () {
  $("#navbar-container").load("navbar.html");
});

// this is for ajax footer 

$(document).ready(function () {
  $("#footer-container").load("footer.html");
});


// this is for the btn effect of client page start
function see_more_mouseenter(){
  let see_btn = document.querySelector("#see-more")
  let review_btn = document.querySelector("#add-review")
  review_btn.style.background ='#B78500';
  review_btn.style.color = '#fff';
}
function see_more_mouseleave(){
  let see_btn = document.querySelector("#see-more")
  let review_btn = document.querySelector("#add-review")
  review_btn.style.background ='#fff';
  review_btn.style.color = '#B78500';
}

function add_more_mouseenter(){
  let see_btn = document.querySelector("#see-more")
  let review_btn = document.querySelector("#add-review")
  see_btn.style.background ='#fff';
  see_btn.style.color = '#B78500';
  see_btn.style.border = '1px solid #B78500';
}
function add_more_mouseleave(){
  let see_btn = document.querySelector("#see-more")
  let review_btn = document.querySelector("#add-review")
  see_btn.style.background ='#B78500';
  see_btn.style.color = '#fff';
}
// this is for the btn effect of client page end

// this is for the accordion of FAQS page 

let accordion = document.getElementsByClassName("faqs-accordion");
let default_open = document.getElementsByClassName("default-open")[0];
// let i;

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        var icon = this.querySelector(".triangle-icon i");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            icon.classList.remove("active");
            icon.classList.add("inactive");
        } else {
            panel.style.display = "block";
            icon.classList.remove("inactive");
            icon.classList.add("active");
            default_open.classList.remove("default-open");
        }
    });
}

// Simulate a click on the default-open element
if (default_open) {
    default_open.click();
}

// this is for the graph price of properties 
const xArray = ["1995", "1996", "1997", "1998", "1999","2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
const yArray = [5, 9, 4, 4, 5, 7, 8, 11, 18, 17, 25, 29, 34, 44, 65, 57, 68, 76, 81, 80, 85, 89, 94, 84, 95, 107, 118, 116, 128];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar"
}];



Plotly.newPlot("myPlot", data);


// this is for sign up form 
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

