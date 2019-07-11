
newColors = [    "",    "",    "",    "",    "",    "",    "",    "",    ""]

var tiles = document.querySelectorAll(".tile"); //returns an object made of elements
var message = document.querySelector(".message");
var valueSpan = document.querySelector('.value');
var headerText = document.querySelector('#headerText');
var bodyTag = document.querySelector('#bodyTag');
var tileSection = document.querySelector('#tileSection');
var refresh = document.querySelector('.beginButton');
var introClick = document.querySelector('.header');

$('.message').slideUp(0);
$('.value').slideUp(0);
$('.tile').fadeOut(0);
$('.beginButton').slideUp(0);


introClick.addEventListener("click", generateColors);
refresh.addEventListener("click", generateColors);
function generateColors() {

    $('.tile').fadeOut(100);//here fadeout

    for (let i = 0; i < 9; i++){
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      let randomColor =`rgb(${r}, ${g}, ${b})`;
            newColors[i]=randomColor;
      tiles[i].style.backgroundColor = newColors[i];
      var targetPick = newColors[[Math.floor(Math.random() * 9)]];
    valueSpan.textContent = targetPick;
    }


    $('.beginButton').slideDown(300);
    $('.tile').fadeIn(100);
    $('.message').slideDown(300);
    $('.value').slideDown(300);
 
    refresh.textContent = 'Refresh';
    headerText.textContent = "Choose the tile matching this Color formula";
    
    responsiveTiles();
   
function responsiveTiles() {

        $('.tile').click( function() {
            $(this).fadeOut(750);

        })

        for(let i = 0 ; i<tiles.length ; i++) {
        tiles[i].addEventListener("click", pickTile); }  }
            
            function pickTile() {
                    console.log("tile Clicked: " + this.style.backgroundColor);
                    var thisPick = this.style.backgroundColor;  
                    if (thisPick === targetPick) {
                    reStyle();
            function reStyle() {
                    refresh.textContent= "Next Round!";
                    message.textContent = "Amazing!";
                    var text = "Congratulations!!";
                    headerText.textContent = text;
                    valueSpan.textContent = "You got it!!" ;
                    bodyTag.style.backgroundColor = thisPick;
                    valueSpan.style.boxShadow = '0 0 40px #8ac9f3';
                    }        
                }
                else {
                    message.textContent = "Nope, try again!";
                        }
                    }
    
};