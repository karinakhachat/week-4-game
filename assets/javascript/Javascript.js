$(document).ready(function() 
    {
    var Random = Math.floor(Math.random() * 101 + 19)
    //this will select random number to user
    //number is going to be between 19-120

    $('#RandomNumber').text(Random);
    //will insert result of var Random into the randomnumber id in
    //in index.html.

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)
    //setting a random number for each crystal
    //sets a number 1-12 at random to each crystal
    var UserTotal = 0;
    var wins = 0;
    var losses = 0;
    // setting each var value to 0 so we can use them further

    $('#wins').text(wins);
    $('#wins').text(losses);
    //resets the number of losses and wins to 0 again
   
    function reset() {
        Random = Math.floor(Math() * 101 + 19);
        console.log(Random)
        $('#RandomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        var UserTotal = 0
        $('#FinalTotal').text(UserTotal);
    }
    //logs number of wins to the total also alerts user they won
    function YouWon() {
        alert("You Won you awesome person!");
        wins++;
        $('#wins').text(wins) + "wins:1";
        reset();
    }
    //logs the number of losses to the total and also alerts user they lost
    function loser() {
        alert("You lost Sucka!");
        losses++;
        $('#NumerofLosses').text(losses);
        reset();
    }
    // this is what makes the click a crystal work
    $('FirstCrystal').on('click', function () {


        UserTotal = userTotal + num1;
        console.log("New UserTotal= " + UserTotal);
        $('#FinalTotal').text(UserTotal);
        if (userTotal == Random) {
            YouWon();
        }
        else if (userTotal > Random) {

            loser();
        }
    })
        $('SecondCrystal').on('click', function () {
            UserTotal = userTotal + num2;
            console.log("New UserTotal=" + UserTotal);
            $('#FinalTotal').text(UserTotal);
        })

        $('ThreeCrystal').on('click', function () {
            UserTotal = userTotal + num3;
            console.log("New UserTotal= " + UserTotal);
            $('#FinalTotal').text(UserTotal)});
            
        })
   