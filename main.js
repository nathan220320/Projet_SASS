const lune = document.getElementById('lune')
let resultat = document.getElementsById('result')
let click = 0

lune.addEventListener('click', function(){
    click++
    if( click %2 == 1 ){ 
    document.body.style.background = "#141D2F";
    
    
    }else{
        document.body.style.background = "#F6F8FF";
    }
})