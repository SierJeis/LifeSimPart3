var learningspeed = 0;
var learnbarwidth = 10;
var learnbaradd = 10;
var multi = 1.02
var xp = 10;
var xpreq = 100;
var xpadd = 1;
var gold = 0;
var silver = 0;
var copper = 0;
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

jobbtn.addEventListener("click", filljob);
learnspeedbtn.addEventListener("click", filllearn);
moneymultbtn.addEventListener("click", moneyfill);

function filllearn(){
       fillint = setInterval(() => {
            xp += xpadd*multi
        }, 10);
        learnspeedbtn.removeEventListener("click", filllearn);
        clearInterval(moneyint);
        moneymultbtn.addEventListener("click", moneyfill);
}

function switchskills(){
    document.querySelector(".jobs").style.display = 'none';
    document.querySelector(".skills").style.display = 'inline';
}

function switchjobs(){
    document.querySelector(".jobs").style.display = 'inline';
    document.querySelector(".skills").style.display = 'none';
}

function filljob(){
    setInterval(() => {
        jobxp += jobxpadd*multi
    }, 10);
    setInterval(() => {
        copper += 1*multi;
    }, 1000);
    jobbtn.removeEventListener("click", filljob);
}

function moneyfill(){
        moneyint = setInterval(() => {
            moneyxp += moneyxpadd*multi
        }, 10);
        moneymultbtn.removeEventListener("click", moneyfill);
        clearInterval(fillint);
        learnspeedbtn.addEventListener("click", filllearn);
}