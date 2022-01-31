const lune = document.getElementById('lune')
let resultat = document.getElementById('result')
let search = document.querySelector('.search')
let stats = document.querySelector('.back')
let input = document.getElementById('input')
let p = document.querySelectorAll('p')
let soleil = document.getElementById('soleil')
let i = document.querySelectorAll('i')

let click = 0

lune.addEventListener('click', function(){
    click++
    if( click % 2 == 1 ){ 
    document.body.style.background = "#141D2F";
    resultat.style.background = "#1E2A47";
    search.style.background = "#1E2A47";
    stats.style.background = "#141D2F";
    input.style.background = "#1E2A47";
    document.body.style.color = "#FFFFFF";
    soleil.style.visibility = "visible";
    lune.style.visibility = "hidden";
    p.forEach(element => element.style.color = "#FFFFFF");
    i.forEach(element => element.style.color = "#FFFFFF");
    input.style.color = "#FFFFFF";
    }

})


soleil.addEventListener('click', function(){
    click++
    if(click % 2 == 0){
        document.body.style.background = "#F6F8FF";
        resultat.style.background = "#FEFEFE";
        search.style.background = "#FEFEFE";
        stats.style.background = "#97979721";
        input.style.background = "#FEFEFE";
        document.body.style.color = "#2B3442";
        soleil.style.visibility = "hidden";
        lune.style.visibility = "visible";
        p.forEach(element => element.style.color = "#4B6A9B");
        i.forEach(element => element.style.color = "#4B6A9B");  
    }

})