// 1-task
let first = document.querySelectorAll('.first-task')
console.log(first); 
let block = document.querySelector('#block')
first[0].addEventListener('input', ()=>{
    block.style.width = first[0].value
})

first[1].addEventListener('input' , ()=>{
    block.style.height = first[1].value
})

first[2].addEventListener('input' , ()=>{
    block.style.backgroundColor = first[2].value
})

first[3].addEventListener('input' , ()=>{
    block.style.borderRadius = first[3].value
})


// 2-task
let inp = document.querySelector('#inp')
let btn = document.querySelector('#btn')
let img = document.querySelector('#img')
btn.addEventListener('click' , ()=>{
    img.src = inp.value
})


// 3-task
let password = document.querySelector('#password')
let pw = document.querySelector('#warn')

password.addEventListener('input' , ()=>{
    if(password.value.length >= 7){
        pw.innerHTML = 'пароль надежный'
        pw.style.color = 'green'
    } else{
        pw.innerHTML = 'пароль не надежный'
        pw.style.color = 'red'
    }
})



//  4-task
let said = document.querySelector('.LastOne') 
let fee = document.querySelector('.payment')
let divs = document.querySelectorAll('.levels')
console.log(divs);
said.addEventListener('input' , ()=>{
    if(said.value == 1){
        divs[9].style.backgroundColor = 'red'
        fee.innerHTML =  '100c'
    } else{
        divs[9].style.backgroundColor =  'white'
    }

    if(said.value == 2){
        divs[8].style.backgroundColor = 'red'
        fee.innerHTML =  '200c'
    } else {
        divs[8].style.backgroundColor = 'white'
    }
    
    if(said.value == 3){
        divs[7].style.backgroundColor = 'red'
        fee.innerHTML =  '300c'
    } else {
        divs[7].style.backgroundColor = 'white'
    }

    if(said.value == 4){
        divs[6].style.backgroundColor = 'red'
        fee.innerHTML =  '400c'
    } else {
        divs[6].style.backgroundColor = 'white'
    }

    if(said.value == 5){
        divs[5].style.backgroundColor = 'red'
        fee.innerHTML =  '500c'
    } else {
        divs[5].style.backgroundColor = 'white'
    }

    if(said.value == 6){
        divs[4].style.backgroundColor = 'red'
        fee.innerHTML =  '600c'
    } else {
        divs[4].style.backgroundColor = 'white'
    }

    if(said.value == 7){
        divs[3].style.backgroundColor = 'red'
        fee.innerHTML =  '700c'
    } else {
        divs[3].style.backgroundColor = 'white'
    }

    if(said.value == 8){
        divs[2].style.backgroundColor = 'red'
        fee.innerHTML =  '800c'
    } else {
        divs[2].style.backgroundColor = 'white'
    }

    if(said.value == 9){
        divs[1].style.backgroundColor = 'red'
        fee.innerHTML =  '900c'
    } else {
        divs[1].style.backgroundColor = 'white'
    }

    if(said.value == 10){
        divs[0].style.backgroundColor = 'red'
        fee.innerHTML =  '1000c'
    } else {
        divs[0].style.backgroundColor = 'white'
    }
})