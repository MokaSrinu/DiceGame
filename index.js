function rollTheDice() {
    setTimeout(function () {
        document.querySelector("#headcontainer").innerHTML="Let's Play";
        document.querySelector("#member1").style="none";
        document.querySelector("#member2").style="none";
        document.querySelector("#member3").style="none";
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomNumber3 = Math.floor(Math.random() * 6) + 1;
        var player1="player1";
        var player2="player2";
        var player3="player3";

        document.querySelector("#member1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector("#member2").setAttribute("src",
            "dice" + randomNumber2 + ".png");
        document.querySelector("#member3").setAttribute("src",
            "dice" + randomNumber3 + ".png");

        if ((randomNumber1 === randomNumber2)&&(randomNumber2 === randomNumber3)) {
            document.querySelector("#headcontainer").innerHTML = "Draw!";
            document.querySelector("#member1").style="filter: invert(11%) sepia(91%) saturate(6821%) hue-rotate(254deg) brightness(99%) contrast(106%);";
            document.querySelector("#member2").style="filter: invert(11%) sepia(91%) saturate(6821%) hue-rotate(254deg) brightness(99%) contrast(106%);";
            document.querySelector("#member3").style="filter: invert(11%) sepia(91%) saturate(6821%) hue-rotate(254deg) brightness(99%) contrast(106%);";
        }
        else if ((randomNumber1 >= randomNumber2)&&(randomNumber1 >= randomNumber3)) {
            document.querySelector("#headcontainer").innerHTML
                = (player1 + " WINS!");
                document.querySelector("#member1").style="filter: invert(64%) sepia(96%) saturate(1791%) hue-rotate(80deg) brightness(108%) contrast(106%);";
                if(randomNumber2>randomNumber3){
                    document.querySelector("#member2").style="filter: invert(77%) sepia(32%) saturate(960%) hue-rotate(24deg) brightness(124%) contrast(113%);"; 
                    document.querySelector("#member3").style="filter: invert(29%) sepia(63%) saturate(6296%) hue-rotate(345deg) brightness(101%) contrast(107%);";
                }else{
                    document.querySelector("#member3").style="filter: invert(77%) sepia(32%) saturate(960%) hue-rotate(24deg) brightness(124%) contrast(113%);"; 
                    document.querySelector("#member2").style="filter: invert(29%) sepia(63%) saturate(6296%) hue-rotate(345deg) brightness(101%) contrast(107%);";
                }
        }
        else if ((randomNumber2 >= randomNumber1)&&(randomNumber2 >= randomNumber3)) {
            document.querySelector("#headcontainer").innerHTML
                = (player2 + " WINS!");
                document.querySelector("#member2").style="filter: invert(64%) sepia(96%) saturate(1791%) hue-rotate(80deg) brightness(108%) contrast(106%);";
                if(randomNumber1>randomNumber3){
                    document.querySelector("#member1").style="filter: invert(77%) sepia(32%) saturate(960%) hue-rotate(24deg) brightness(124%) contrast(113%);"; 
                    document.querySelector("#member3").style="filter: invert(29%) sepia(63%) saturate(6296%) hue-rotate(345deg) brightness(101%) contrast(107%);";
                }else{
                    document.querySelector("#member3").style="filter: invert(77%) sepia(32%) saturate(960%) hue-rotate(24deg) brightness(124%) contrast(113%);"; 
                    document.querySelector("#member1").style="filter: invert(29%) sepia(63%) saturate(6296%) hue-rotate(345deg) brightness(101%) contrast(107%);";
                }
        }
        else {
            document.querySelector("#headcontainer").innerHTML
                = (player3 + " WINS!");
                document.querySelector("#member3").style="filter: invert(64%) sepia(96%) saturate(1791%) hue-rotate(80deg) brightness(108%) contrast(106%);";
                if(randomNumber1>randomNumber2){
                    document.querySelector("#member1").style="filter: invert(77%) sepia(32%) saturate(960%) hue-rotate(24deg) brightness(124%) contrast(113%);"; 
                    document.querySelector("#member2").style="filter: invert(29%) sepia(63%) saturate(6296%) hue-rotate(345deg) brightness(101%) contrast(107%);";
                }else{
                    document.querySelector("#member2").style="filter: invert(77%) sepia(32%) saturate(960%) hue-rotate(24deg) brightness(124%) contrast(113%);"; 
                    document.querySelector("#member1").style="filter: invert(29%) sepia(63%) saturate(6296%) hue-rotate(345deg) brightness(101%) contrast(107%);";
                }
        }


    }, 250);
}

