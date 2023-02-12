var learningspeed = 0;
var learnbarwidth = 10;
var learnbaradd = 10;
var multi = 1.02
var xp = 10;
var xpreq = 100;
var xpadd = 1;
let houseCost = 10;
var gold = 0;
var silver = 0;
var copper = 10;
var jobxp = 10;
var jobxpadd = 1;
var jobxpreq = 100;
var firstjoblevel = 0;
var firstjobmulti = 1;
var moneyxp = 10;
var moneyxpadd = 1;
var moneyxpreq = 100;
var moneylevel = 0;
var moneyskillmulti = 1;
var currentjob = null;
var currentskill = null;
const jobbtn = document.getElementById("jobbar");
const learnspeedbtn = document.getElementById("learnbar");
const moneymultbtn = document.getElementById("moneybar");
const housebtn = document.getElementById("house");
let income = 0;
let expense = 0;
let houseBought = false;
let globalmulti = 1;

jobbtn.addEventListener("click", filljob);
learnspeedbtn.addEventListener("click", filllearn);
moneymultbtn.addEventListener("click", moneyfill);
housebtn.addEventListener("click", buyHouse);

function filllearn(){
       fillint = setInterval(() => {
            xp += xpadd*multi*globalmulti
        }, 10);
        learnspeedbtn.removeEventListener("click", filllearn);
        clearInterval(moneyint);
        moneymultbtn.addEventListener("click", moneyfill);
}

function switchskills(){
    document.querySelector(".jobs").style.display = 'none';
    document.querySelector(".skills").style.display = 'inline';
    document.querySelector(".shop").style.display = 'none';
}

function switchjobs(){
    document.querySelector(".jobs").style.display = 'inline';
    document.querySelector(".skills").style.display = 'none';
    document.querySelector(".shop").style.display = 'none';
}

function switchshop(){
    document.querySelector(".jobs").style.display = 'none';
    document.querySelector(".skills").style.display = 'none';
    document.querySelector(".shop").style.display = 'inline';
}

function filljob(){
    setInterval(() => {
        jobxp += jobxpadd*multi*globalmulti
    }, 10);
    jobbtn.removeEventListener("click", filljob);
}

function moneyfill(){
        moneyint = setInterval(() => {
            moneyxp += moneyxpadd*multi*globalmulti
        }, 10);
        moneymultbtn.removeEventListener("click", moneyfill);
        clearInterval(fillint);
        learnspeedbtn.addEventListener("click", filllearn);
}

function buyHouse(){
    if(copper >= houseCost) {
            houseBought = true;
            expense -= houseCost;
        document.querySelector("#housedot").style.backgroundColor = 'green';
        globalmulti = 1.1;
        housebtn.removeEventListener("click", buyHouse);
        housebtn.addEventListener("click", sellHouse);
    }
}

function sellHouse(){
    document.querySelector("#housedot").style.backgroundColor = 'red';
    houseBought = false;
    expense += 10;
    housebtn.removeEventListener("click", sellHouse);
    housebtn.addEventListener("click", buyHouse);
}

function goBankrupt(){
    if(copper <= 0){
        sellHouse()
    }
}
