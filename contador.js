const decremento = document.querySelector('.decrease-btn')
const reset = document.querySelector('.reset-btn')
const incremento = document.querySelector('.increase-btn')
const numeroDelHtml=document.querySelector('.counter')

let count=0;

function colorizeCounter(n){
    if(n>0){
        numeroDelHtml.style.color="green";
    }
    else if(n<0){
        numeroDelHtml.style.color="red"
    }else{
        numeroDelHtml.style.color="#000"
    }
}


incremento.addEventListener("click",function(){
count++;
colorizeCounter(count);
numeroDelHtml.textContent=count;
})

decremento.addEventListener("click",function(){
    count--;
    colorizeCounter(count);

    numeroDelHtml.textContent=count;
    })

    reset.addEventListener("click",function(){
        count=0;
        colorizeCounter(count);

        numeroDelHtml.textContent=count;
        })
