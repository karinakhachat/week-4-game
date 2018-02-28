
$(document).ready(function (){
//the largest parent function start 
{
    
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
          $(".crystals").each(function(images)
          {
            for (i = 0; 1 < 4; i++)
            {
          var randomnum = Math.floor(Math.random() * 12) + 1; 
        }
      console.log(randomnum);
    })
        };

    function onclick () {
       $(".crystals").each(images).onclick("click", function(){
        var crystalval = ($(this).randomnum);

        usertotal += crystalval;
        $("#YourTotal").text(usertotal);

        if (usertotal === targetnumber) {
            wins++;
        $("#wins").append(wins++);
        }

        else if (usertotal >= targetnumber) {
            losses++;
        $("#losses").append(losses++);
        }
       })

        
    }

      
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
    reset();

}
})
