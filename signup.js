var fnm = document.getElementById('input-fnm')
var lnm = document.getElementById('input-lnm')
 var eml = document.getElementById('input-eml')
 var psd = document.getElementById('input-psd')
var btn1 = document.getElementById('btn1')


btn1.addEventListener('click',send)
function send () {
    if(fnm.value === '' || lnm.value === '' || eml.value === ''|| psd.value === ''){
        alert('Enter all Information')
    }
    else{
        localStorage.setItem('firstName',fnm.value)
        localStorage.setItem('lastName',lnm.value)
        localStorage.setItem('Email',eml.value)
        localStorage.setItem('Password',psd.value)


       setTimeout(() => {
        location = 'login.html'
       },10)
    }
}
