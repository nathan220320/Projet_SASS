const lune = document.getElementById('lune')
let resultat = document.getElementById('result')
let search = document.querySelector('.search')
let stats = document.querySelector('.back')

let click = 0

lune.addEventListener('click', function(){
    click++
    if( click %2 == 1 ){ 
    document.body.style.background = "#141D2F";
    resultat.style.background = "#1E2A47";
    search.style.background = "#1E2A47";
    stats.style.background = "#141D2F"
    
    }else{
        document.body.style.background = "#F6F8FF";
        resultat.style.background = "#FEFEFE";
        search.style.background = "#FEFEFE";

    }
})