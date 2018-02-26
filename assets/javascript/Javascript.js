
  $(document).ready(function() 
  //the largest parent function start 
  {
    var randomnum = Math.floor(Math.random()*102+19);
    var usertotal = 0;
    var wins = 0;
    var losses = 0;
//logging values into the html elements

    $("#numbertoGuess").text (randomnum);
    $("#wins").text(wins);
    $("#losses").text(losses);


    var CrysVals ={};
    imageCrystal1[1] = Math.floor(Math.random()*12+1);
    imageCrystal2[2] = Math.floor(Math.random()*12+1);
    imageCrystal3[3] = Math.floor(Math.random()*12+1);
    imageCrystal4[4]= Math.floor(Math.random()*12+1);


    function CrystalValue (crystalKey) {
        usertotal = usertotal + CrysVals[crystalKey];
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
 
    $("#image1").on("click", CrystalValue(1));
    $("#image2").on("click", CrystalValue(2));
    $("image3").on("click", CrystalValue(3));
    $("image4").on("click", CrystalValue(4));

})