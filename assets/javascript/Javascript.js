
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
        
        imageCrystal1[1] = Math.floor(Math.random() * 12 + 1);
        imageCrystal2[2] = Math.floor(Math.random() * 12 + 1);
        imageCrystal3[3] = Math.floor(Math.random() * 12 + 1);
        imageCrystal4[4] = Math.floor(Math.random() * 12 + 1);

        $("#image1").on("click", CrysVals(1));
        $("#image2").on("click", CrysVals(2));
        $("#image3").on("click", CrystalVals(3));
        $("#image4").on("click", CrystalVals(4));
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
