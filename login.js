var eml1 = document.getElementById('eml1')
var psd1 = document.getElementById('psd1')
var btn1 = document.getElementById('btn1')
var emailStorage = localStorage.getItem('Email')
var passStorage = localStorage.getItem('Password')


btn1.addEventListener('click',send)
function send () {
    if(eml1.value === emailStorage && psd1.value === passStorage){
        setTimeout(() => {
            location='index.html'
        },1)
    }else{
        alert('wrong')
    }
}