
  $(document).ready(function() 
  //the largest parent function start 
  {
    var randomnum = Math.floor(Math.random()*102+19);
    var usertotal = 0;
    var wins = 0;
    var losses = 0;
//logging values into the html elements

    $("#numberToGuess").text (randomnum);
    $("#wins").text(wins);
    $("#losses").text(losses);

    function init (){
    var CrysVals ={};
    imageCrystal1[1] = Math.floor(Math.random()*12+1);
    imageCrystal2[2] = Math.floor(Math.random()*12+1);
    imageCrystal3[3] = Math.floor(Math.random()*12+1);
    imageCrystal4[4]= Math.floor(Math.random()*12+1);

    $("#image1").on("click", CrysVals(1));
    $("#image2").on("click", CrysVals(2));
    $("#image3").on("click", CrystalVals(3));
    $("#image4").on("click", CrystalVals(4));

    function NewTotal(crystalKey) {
        usertotal = usertotal + CrysVals[NewTotal];
        console.log ("new total" + usertotal);
        $("#YourTotal").text(usertotal);

        if (usertotal === randomnum) {
            wins++;
            $("#wins").text(wins);
        }

        else if ( usertotal  > randomnum)
        losses++;
        $("#losses").text(losses);
    } 
}
    function reset() 
    {
        if (wins++)
        usertotal.clear();
        wins.clear();
        losses.clear();

        if (losses++)

        usertotal.clear();
        wins.clear();
        losses.clear();
         
    }

init();
reset();

})
