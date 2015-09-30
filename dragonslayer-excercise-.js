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
var dragonFight = prompt("Which type of dragon will you face? The ICE dragon, the FIRE dragon, or the DARK dragon?");

switch(dragonFight){
    case 'ice':
        alert("You crawl into the frozen cave to face the massive, white dragon. It rears its head as you get ready to strike.");
        break;
    case 'fire':
        alert("You wipe the beads of sweat off your forehead as you enter the fiery depths of Mt. Flame. The dragon notices you in his lair and stands up tall, ready to roast you into crispy human meat.");
        break;
    case 'dark':
        alert("You can't see anything as you enter the portal to the nether dimension. You hear a sound to your right and you get ready for the hardest fight of your life.");
        break;
    default:
        alert("That is neither 'ice', 'fire', or 'dark'.");
}

while(slaying){


    if (youHit = 1){
        console.log("Wow...You actually hit that thing!")
        totalDamage = totalDamage += damageThisRound
        if(totalDamage >= 20){
            console.log("Congratulations, you have ended the tyranny of the dragon that was protecting its nest. Do you feel good now?");
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


