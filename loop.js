function updateCount(){
    setInterval(() => {
        document.querySelector("#learnspeed").innerHTML = "Learning Speed : "+learningspeed;
        document.querySelector("#firstjob").innerHTML = "First Job : "+firstjoblevel
        document.querySelector("#learnfill").style.width = xp / xpreq * 100 + '%';
        document.querySelector("#jobfill").style.width = jobxp / jobxpreq * 100 + '%';
        document.querySelector(".inv").innerHTML = "G: "+Math.round(gold)+"<br>S: "+Math.round(silver)+"<br>C: "+Math.round(copper);
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
        if(copper >= 100){
            copper = 0;
            silver += 1;
        }
        if(silver >= 100){
            silver = 0;
            gold += 1;
        }
    }, 10);
}