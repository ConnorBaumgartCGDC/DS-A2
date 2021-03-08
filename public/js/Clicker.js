//Clicker game based off of Ein Siedler
//https://code.sololearn.com/WzhK2lJ9L3Q6/

//number of clicks and click incremental value
var x=0;
var iv=1;

//takes the users clicks and updates the click point count
function oncl(){
   x+=iv;
   pointCount();
}
function pointCount(){
    document.getElementById("p").innerHTML=x+" points";
}

//Upgrades
function upgrade(){
    switch (iv) {
        case 1:
            if (x>=50){
                iv++;
                x-=50;   
                document.getElementById("u").innerHTML= "Buy Upgrade for 200 Clicks";
                document.getElementById("iv").innerHTML="Multiplier "+iv;
            }
        break;

        case 2:
            if (x>=200){
                iv=4;
                x-=200;   
                document.getElementById("u").innerHTML= "Buy Upgrade for 500 Clicks";
                document.getElementById("iv").innerHTML="Multiplier "+iv;
            }
        break;

        case 4:
            if (x>=500){
                iv=8;
                x-=500;   
                document.getElementById("u").innerHTML= "Buy Upgrade for 2000 Clicks";
                document.getElementById("iv").innerHTML="Multiplier "+iv;
            }
        break;

        case 8:
            if (x>=2000){
                iv=16;
                x-=2000;   
                document.getElementById("u").innerHTML= "Fully Upgraded. Congratulations! you win nothing!";
                document.getElementById("iv").innerHTML="Multiplier "+iv;
            }
        break;

    }
 }