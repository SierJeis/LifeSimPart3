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

function filllearn(){
    setInterval(() => {
        xp += xpadd*multi
    }, 10);
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
}