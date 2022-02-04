const lune = document.getElementById('lune')
let resultat = document.getElementById('result')
let ctnsearch = document.querySelector('.ctn-search')
let stats = document.querySelector('.back')
let input = document.querySelector('input')
let p = document.querySelectorAll('p')
let soleil = document.getElementById('soleil')
let i = document.querySelectorAll('i')
let form = document.getElementById('myForm')
let twitter = document.getElementById('twiter').textContent
const clr = "#4B6A9B"

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
        document.querySelector('.rslt1').style.color = "#2B3442";
        document.querySelector('.rslt2').style.color = "#2B3442";
        document.querySelector('.rslt3').style.color = "#2B3442";
        document.querySelector('.titre').style.color = "#2B3442";
    }

})

// -----------------------------------------------------------------------------------------------------------------------------------------




form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById('search').value
    let originalName = search.split(' ').join('')



    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
    
       

        document.getElementById('img').src =`${data.avatar_url}` ;
        document.getElementById('h1').textContent = `${data.name}`;
        document.getElementById('h2').textContent = "@" + `${data.login}`;

        if(data.bio == null){

            document.getElementById('prof').textContent = "This profile has no bio";
    
        }else{
            document.getElementById('prof').textContent = `${data.bio}`;
        }
        
        
        let date = new Date(data.created_at)
        let jour = date.getDate();
        let mois = date.getMonth();
        let anner = date.getFullYear();
        let moilettre = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        document.getElementById('join').textContent = "Joined" + " " + jour + " " + moilettre[mois]  + " " + anner;
        
        if(data.location == null){
            document.getElementById('adresse').textContent = "Not Avaible";
            document.getElementById('adresse').style.color = "#9A9A9A";
            document.querySelector('.fa-map-marker-alt').style.color = "#9A9A9A";
        }else{
            document.getElementById('adresse').textContent = `${data.location}`;
            document.getElementById('adresse').style.color = clr;
            i.forEach(element => element.style.color = clr);

        }

        document.getElementById('blog').textContent =`${data.html_url}`;
        if(data.company == null){
            document.getElementById('git').textContent = "Not Avaible";
            document.getElementById('git').style.color = "#9A9A9A";
            document.querySelector('.fa-building').style.color = "#9A9A9A";
        }else{
            document.getElementById('git').textContent = `${data.company}`;
            document.getElementById('git').style.color = clr;
            i.forEach(element => element.style.color = clr);

        }
        
        if(data.twitter_username == null){
            document.getElementById('twiter').textContent = "Not Avaible";
            document.getElementById('twiter').style.color = "#9A9A9A";
            document.querySelector('.fa-twitter').style.color = "#9A9A9A";
        }else{
            document.getElementById('twiter').textContent = `${data.twitter_username}`;
            document.getElementById('twiter').style.color = clr;
            i.forEach(element => element.style.color = clr);

        }
            
    

        document.querySelector('.rslt1').textContent = `${data.public_repos}`;
        document.querySelector('.rslt2').textContent = `${data.followers}`;
        document.querySelector('.rslt3').textContent = `${data.following}`;
       
    })
}) 

// avatar_url: "https://avatars.githubusercontent.com/u/10130?v=4"
// bio: null
// blog: ""
// company: null
// created_at: "2008-05-13T04:46:13Z"
// email: null
// events_url: "https://api.github.com/users/anthony/events{/privacy}"
// followers: 29
// followers_url: "https://api.github.com/users/anthony/followers"
// following: 10
// following_url: "https://api.github.com/users/anthony/following{/other_user}"
// gists_url: "https://api.github.com/users/anthony/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/anthony"
// id: 10130
// location: "Melbourne, Australia"
// login: "anthony"
// name: "Anthony Langhorne"
// node_id: "MDQ6VXNlcjEwMTMw"
// organizations_url: "https://api.github.com/users/anthony/orgs"
// public_gists: 1
// public_repos: 1
// received_events_url: "https://api.github.com/users/anthony/received_events"
// repos_url: "https://api.github.com/users/anthony/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/anthony/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/anthony/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2021-11-15T00:57:16Z"
// url: "https://api.github.com/users/anthony