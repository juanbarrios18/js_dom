//** CHANGE FONT COLOR */
var h1 = document.querySelector("h1");
h1.style.color = "pink";

//*** CHANGE BACKGROUND COLOR EVERY SECOND */
// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function(){
//     if (isBlue) {
//         body.style.background = "white" ;
//     }
//     else{
//         body.style.background = "grey";
//     }
//     isBlue = !isBlue;
//}, 15000);

//*****DOM ADVANCED */
    var button = document.querySelector("button");
    var paragraph = document.querySelector("p");

    button.addEventListener("click", function(){
        paragraph.textContent = "Someone clicked the button!";
    });

    document.querySelector("ul").addEventListener("click", function(){
        console.log("You clicked the UL!!")
    })

///***** CHANGE THE COLOR OF EACH LI INDIVIDUALLY */

    var lis = document.querySelectorAll("li")
    for (var i = 0; i < lis.length; i++){
        lis[i].addEventListener("click", function(){
            this.style.color = "red";
        })
    }

    //**EXERCISE TOGGLE - CHANGE THE BACKGROUND COLOR */
    var button = document.querySelectorAll("button");
    //var isBlack = false; 

    // button[1].addEventListener("click", function(){
    //     if(isBlack){
    //         document.querySelector("body").style.background = "white";
    //     }
    //     else if(!isBlack){
    //         document.querySelector("body").style.background = "black";
    //     }
    //     isBlack = !isBlack;
    // })
    
    //BETTER SOLUTION USING TOGGLE FROM CSS//
    button[1].addEventListener("click", function(){
        document.body.classList.toggle("black");
    });