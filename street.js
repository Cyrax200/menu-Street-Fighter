const necro = document.getElementById('p1')
const akuma = document.getElementById('p2')

function person1(){
    document.body.style.backgroundImage = "url('https://c.tenor.com/a1o8Cp-M3gYAAAAd/street-fighter3-street-fighter.gif')";
}

function person2(){
    document.body.style.backgroundImage = "url('https://c.tenor.com/M41JVUqs4FAAAAAC/tekken-akuma.gif')";
}


function person12(){
    document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/EVJJSsPUwAAgdPV.jpg')"; 
}


function person13(){
    document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/EVJJSsPUwAAgdPV.jpg')"; 
}

necro.addEventListener('mouseover',person1)
necro.addEventListener('mouseleave',person12)
akuma.addEventListener('mouseover',person2)
akuma.addEventListener('mouseleave',person13)