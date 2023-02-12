function updateCount(){
    setInterval(() => {
        document.querySelector("#learnspeed").innerHTML = "Learning Speed : "+learningspeed;
        document.querySelector("#firstjob").innerHTML = "Beggar : "+firstjoblevel;
        document.querySelector("#moneymulti").innerHTML = "Money Multiplier : "+moneylevel;
        document.querySelector("#learnfill").style.width = xp / xpreq * 100 + '%';
        document.querySelector("#jobfill").style.width = jobxp / jobxpreq * 100 + '%';
        document.querySelector("#moneyfill").style.width = moneyxp / moneyxpreq * 100 + '%';
        document.querySelector("#xpgain").innerHTML = Math.round(jobxpadd*multi);
        document.querySelector("#xpreq").innerHTML = Math.round(xpreq);
        document.querySelector("#firstjobincome").innerHTML = Math.round(income)+'c';
        document.querySelector(".inv").innerHTML = "Income : "+Math.round(income)+"<br> Expenses : "+expense+"<br> G: "+Math.round(gold)+"<br>S: "+Math.round(silver)+"<br>C: "+Math.round(copper);
        if(xp >= xpreq) {
            xp = 0;
            learningspeed += 1;
            xpreq *= 1.1;
            multi *= 1.05
        }
        if(jobxp >= jobxpreq) {
            jobxp = 0;
            firstjoblevel += 1;
            jobxpreq *= 1.1;
            firstjobmulti *= 1.05;
        }
        if(moneyxp >= moneyxpreq) {
            moneyxp = 0;
            moneylevel += 1;
            moneyxpreq *= 1.1;
            moneyskillmulti *= 1.05;
        }
        if(copper >= 101){
            copper = 0;
            silver += 1;
        }
        if(silver >= 101){
            silver = 0;
            gold += 1;
        }
        if(copper <= 0){
            silver -= 1;
            copper += 100;
        }
        if(learningspeed >= 1){
            document.querySelector(".moneydiv").style.display = 'inline';
        }
        if(houseBought == true) {
            income -= houseCost;
        }
        income = (1*firstjobmulti*moneyskillmulti)+expense;
    }, 10);
    setInterval(() => {
        copper += income;
        if(copper <= 0){
            goBankrupt();
        }
    }, 1000);
    filljob()
    filllearn();
}