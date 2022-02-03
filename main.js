const lune = document.getElementById('lune')
let resultat = document.getElementById('result')
let ctnsearch = document.querySelector('.ctn-search')
let stats = document.querySelector('.back')
let input = document.querySelector('input')
let p = document.querySelectorAll('p')
let soleil = document.getElementById('soleil')
let i = document.querySelectorAll('i')
let form = document.getElementById('myForm')

let click = 0

lune.addEventListener('click', function(){
    click++
    if( click % 2 == 1 ){ 
    document.body.style.background = "#141D2F";
    resultat.style.background = "#1E2A47";
    resultat.style.boxShadow = "0px 0px 0px 0px rgba(70, 96, 187, 0)";
    ctnsearch.style.background = "#1E2A47";
    ctnsearch.style.boxShadow = "0px 0px 0px 0px rgba(70, 96, 187, 0)";
    stats.style.background = "#141D2F";
    input.style.background = "#1E2A47";
    document.body.style.color = "#FFFFFF";
    soleil.style.display = "flex";
    lune.style.display = "none";
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
        resultat.style.boxShadow = "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
        ctnsearch.style.background = "#FEFEFE";
        ctnsearch.style.boxShadow = "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
        stats.style.background = "#97979721";
        input.style.background = "#FEFEFE";
        document.body.style.color = "#2B3442";
        soleil.style.display = "none";
        lune.style.display = "flex";
        p.forEach(element => element.style.color = "#4B6A9B");
        i.forEach(element => element.style.color = "#4B6A9B");
        input.style.color = "#222731";  
    }

})

// -----------------------------------------------------------------------------------------------------------------------------------------

form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById('search').value
    let originalName = search.split(' ').join('')

    alert(originalName)

    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById('img').src =`${data.avatar_url}` ;
        document.getElementById('h1').textContent = `${data.name}`;
        document.getElementById('h2').textContent = "@" + `${data.login}`;
        document.getElementById('prof').textContent = `${data.bio}`;
        document.getElementById('join').textContent = `${data.created_at}`;
        document.getElementById('adresse').textContent = `${data.location}`;
        document.getElementById('blog').textContent =`${data.html_url}`
    })
}) 

