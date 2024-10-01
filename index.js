var ln1 = document.getElementById('links1')
var ln2 = document.getElementById('links2')
var usrname = document.querySelector('#links2 h2')
var logout = document.getElementById('logout')
var con = document.getElementById('container')
var cart = document.getElementById('cart')
var ic = document.getElementById('cart-icon')
var cartDiv = document.querySelector('#cart div')
var count = document.getElementById('count')

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


var data = [
    {
        id : 1,
        title : 'Dell ',
        text : 'CORE I7 8TH GENERATION, RAM 32 GB , HARD 512GB SSD , GPU GTX 1650 , 90mWH BATTERY',
        image : 'photo/1727783296108.jpg',
        price  : 900
    },
    {
        id : 2,
        title : 'ASUS',
        text : 'CORE I7 8TH GENERATION, RAM 32 GB , HARD 512GB SSD , GPU GTX 1650 , 90mWH BATTERY',
        image : 'photo/1727783296108.jpg',
        price  : 900
    },
    {
        id : 3,
        title : 'HP Zbook',
        text : 'CORE I7 8TH GENERATION, RAM 32 GB , HARD 512GB SSD , GPU GTX 1650 , 90mWH BATTERY',
        image : 'photo/1727783296108.jpg',
        price  : 900
    },
    {
        id : 4,
        title : 'TOSHIBA',
        text : 'CORE I7 8TH GENERATION, RAM 32 GB , HARD 512GB SSD , GPU GTX 1650 , 90mWH BATTERY',
        image : 'photo/1727783296108.jpg',
        price  : 900
    },
    {
        id : 5,
        title : 'MacBOOK',
        text : 'CORE I7 8TH GENERATION, RAM 32 GB , HARD 512GB SSD , GPU GTX 1650 , 90mWH BATTERY',
        image : 'photo/1727783296108.jpg',
        price  : 900
    }
]
function draw () {
    x = data.map((item) => {
        return (

            `
            <div class="box">
            <img src="${item.image}" alt="">
            <div class="info">
                <h2>${item.title}</h2>
                <p>${item.text}</p>
                <p>${item.price}</p>
                <button onclick=ad(${item.id})>Add</button>
            </div>
            </div>
            `

        )
    })
    con.innerHTML = x
}
draw()


ic.addEventListener('click', open)
function open () {
    if(cart.style.display == 'none'){
        cart.style.display = 'block'
    }else if(cart.style.display == 'block'){
        cart.style.display = 'none'
    }
}
if(localStorage.getItem('products')){
    var prod = JSON.parse(localStorage.getItem('products'))
}else{
    var prod = []
}
    count.style.display = 'block'
    count.innerHTML = prod.length
    prod.map((e) => {
        
        cartDiv.innerHTML += `<p>${e.title}</p>`
    })

function ad (id) {
    cartDiv.innerHTML = ''
    var t = data.find((e) => {
        return  e.id === id
    })
    prod = [...prod , t]
    
    prod.map((e) => {
        
         cartDiv.innerHTML += `<p>${e.title}</p>`
    })
    localStorage.setItem('products' , JSON.stringify(prod))

    count.style.display = 'block'
    count.innerHTML = prod.length
    }
