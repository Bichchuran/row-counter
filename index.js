
let saveEl=document.getElementById('save-el')
let countNow=document.getElementById('count-el')
let count= 0

function increment(){
    count+=1
    countNow.textContent=count
    
}

function save(){
    let countStr=count + ' - '
    saveEl.textContent += countStr
    countNow.textContent=0
    count=0
     
}
