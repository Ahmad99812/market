var ln1 = document.getElementById('links1')
var ln2 = document.getElementById('links2')
var usrname = document.querySelector('#links2 h2')
var logout = document.getElementById('logout')
var con = document.getElementById('container')
var data = JSON.parse(localStorage.getItem('products'))
var totprc = document.getElementById('totprc')
var tot = 0

if(localStorage.getItem('Email')){
    ln1.style.display = 'none'
    ln2.style.display = 'block'
    usrname.innerHTML = localStorage.getItem('firstName')
}
logout.addEventListener('click', out)
function out () {
    localStorage.clear()
    setTimeout(() => {
        location = 'signup.html'
    },1000)
}


function draw () {
  
    x = data.map((item) => {
        return (

            `
            <div class="box">
            <img src="${item.image}" alt="">
            <div class="info">
                <h2>${item.title}</h2>
                <p>${item.text}</p>
                <p>${item.price} $</p>
                <button onclick=del(${item.id})>Delete</button>
            </div>
            </div>
            `

        )
    })
    con.innerHTML = x
    
}
draw()

data.forEach(function(e){
    tot += +(e.price)
})
function show () {
    totprc.innerHTML += "TOTAL PRICE IS  " +tot + '$'
}
show  ()
function del (id){
    var indx = data.map((itm) => {
        return itm.id
    }).indexOf(id)
    data.splice(indx , 1)
    draw(data)
}