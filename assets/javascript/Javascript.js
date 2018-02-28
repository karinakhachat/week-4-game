
$(document).ready(function ()
//the largest parent function start 
{})
    
    var usertotal = 0;
    var wins = 0;
    var losses = 0
    var targetnumber = Math.floor(Math.random()* 120) -1;
  
    //logging values into the html elements
    //working thus far
    $("#numberToGuess").text(targetnumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    //this part is working as expected
    
    function init(){
          function start(){
            var images = [];
            $(".crystals").each(function(){
              images.push($(this).attr('src'))
            })
            console.log(images);
          }
           
        }
      console.log(randomnum);
  
      
        //not working not assigning images crystal values
    function reset() {
        if (wins++)
            usertotal= 0;
        wins= 0;
        losses= 0;

        if (losses++)
            usertotal= 0;
        wins= 0;
        losses= 0;

    }
    //calling the functions
    init();
    onclick();
    reset();


