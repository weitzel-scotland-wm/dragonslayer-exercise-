/**
 * Created by session2 on 9/28/15.
 */
var slaying = true
var youHit = Math.floor(Math.random() *2)
var damageThisRound = Math.floor(Math.random() *5 + 1)
var totalDamage = 0
/*------------------------------------------------------------*/

//ORIGINAL CODE
/*
while(slaying){
    slaying = false
}

if (youHit = 1){
    console.log("Wow...You actually hit it that thing!")
    totalDamage = totalDamage += damageThisRound
    if(totalDamage >= 4){
        console.log("Congratulations, you have ended the tyranny of the rainbow dragon that was protecting its nest. Do you fell good now?")
        slaying = false
    }
}
else {
    console.log("Your sword misses the dragon by an inch: a mistake that will cost you your head. The dragron rears his clawed hand and slashes your head into two.")
}

var totalDamage = totalDamage + damageThisRound
*/
//ORIGINAL CODE


//NEW CODE
while(slaying){


    if (youHit = 1){
        console.log("Wow...You actually hit that thing!")
        totalDamage = totalDamage += damageThisRound
        if(totalDamage >= 20){
            console.log("Congratulations, you have ended the tyranny of the rainbow dragon that was protecting its nest. Do you feel good now?");
            slaying = false
        }
        else if(totalDamage >= 5){
            console.log("You have staggered the dragon! Keep going!")
        }
    }
    else {
        console.log("Your sword misses the dragon by an inch: a mistake that will cost you your head. The dragon rears his clawed hand and slashes your head into two.");
        slaying = false;
    }
}

var totalDamage = totalDamage + damageThisRound
//NEW CODE

//What I did was I changed the structure of the code to constantly go through the slaying process until the player dies, or the dragon dies.


