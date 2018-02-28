$(document).ready(function (){
    //the largest parent function start 
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
              $(".crystals").each(function(image){
              var randomnum = Math.floor(Math.random() * 12) + 1; 
                $(image).val(randomnum);}
        }
           
    //the onclick function should assign a randomnum to each crystal each time a user clicks
        function onclick () {
            $(".crystals").each(function(index, image){
                var randomnum = Math.floor(Math.random() * 12) + 1;
                  $(image).val(randomnum);}
          }
            function logwins (){
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
        reset();      usertotal += crystalval;
            $("#YourTotal").text(usertotal);}
      
    }
}