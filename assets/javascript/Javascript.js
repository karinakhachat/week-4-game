
$(document).ready(function ()
//the largest parent function start 
{
    
    var usertotal = 0;
    var wins = 0;
    var losses = 0;
    var numberOptions = [10,5,3,7];
    var targetnumber = 53;
    //logging values into the html elements
    //working thus far
    $("#numberToGuess").text(targetnumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    //this part is working as expected
    function init() {
        var randomnum = Math.floor(Math.random() * 12) + 1;
        
        $("#image1").attr("data-num", randomnum);
        $("#image2").attr("date-num", randomnum);
        $("#image3").attr("data-num", randomnum);
        $("#image4").attr("date-num", randomnum);


        $("#image1").on("click", randomnum);
        $("#image2").on("click", randomnum);
        $("#image3").on("click", randomnum);
        $("#image4").on("click", randomnum);
        //not working not assigning images crystal values

        function NewTotal() {
            usertotal = usertotal + CrysVals[NewTotal];
            console.log("new total" + usertotal);
            $("#YourTotal").text(usertotal);

            if (usertotal === randomnum) {
                wins++;
                $("#wins").text(wins);
            }

            else if (usertotal > randomnum) {
                losses++;
                $("#losses").text(losses);
            }
        }
    }
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

})
