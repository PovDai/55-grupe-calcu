const appDOM=document.getElementById('app')



appDOM.innerHTML=`   <div class="kevalas">
        <div class="ekranas">
            <p>0</p>
        </div>
        <div class="mygtuku-kevalas">
            <button type="button">+1</button>
            <button type="button">+2</button>
            <button type="button">+3</button>
            <button type="button">+4</button>
            <button type="button">+5</button>
            <button type="button">+6</button>
            <button type="button">+7</button>
            <button type="button">+8</button>
            <button type="button">+9</button>
            <button  class="func"type="button">C</button>
             <button type="button">-1</button>
            <button type="button">-2</button>
            <button type="button">-3</button>
            <button type="button">-4</button>
            <button type="button">-5</button>
            <button type="button">-6</button>
            <button type="button">-7</button>
            <button type="button">-8</button>
            <button type="button">-9</button>

        </div>
    </div>
    <div class="history">
    <div class="figuros"></div>
  `

const [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btnC,btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18,btn19]=appDOM.querySelectorAll('button')
const ekranasDOM=document.querySelector('.ekranas');
const pDOM=ekranasDOM.querySelector('p')
const historyDOM=document.querySelector('.history');
const figurosDOM=document.querySelector('.figuros');




let result=0;

btn1.addEventListener('click',()=>{
    let skaicius=1;
    result+=1
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius} </p>`)
    historyDOM.insertAdjacentHTML('afterend',` <div class="figuros0"></div>`)
})

btn2.addEventListener('click',()=>{
    let skaicius=2;
    result+=2
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius} </p>    `)
    historyDOM.insertAdjacentHTML('afterend',` <div class="figuros-1"></div>`)
})
btn3.addEventListener('click',()=>{
    let skaicius=3;
    result+=3
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius}  </p> `)
    historyDOM.insertAdjacentHTML('afterend',` <div class="figuros-2"></div>`)
})
btn4.addEventListener('click',()=>{
   let skaicius=4;
    result+=4
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius} </p> `)
     historyDOM.insertAdjacentHTML('afterend',` <div class="figuros-3"></div>`)
})
btn5.addEventListener('click',()=>{
    let skaicius=5;
    result+=5
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius} </p> `)
})
btn6.addEventListener('click',()=>{
    let skaicius=6;
    result+=6
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius} </p> `)
})
btn7.addEventListener('click',()=>{
    let skaicius=7;
    result+=7
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius} </p> `)
})
btn8.addEventListener('click',()=>{
    let skaicius=8;
    result+=8
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius} </p> `)
})
btn9.addEventListener('click',()=>{
    let skaicius=9;
    result+=9
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo prideta ${skaicius} </p> `)
})
btnC.addEventListener('click',()=>{
    result = 0;
    pDOM.textContent = result;
    historyDOM.innerHTML = '';

    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Eilute buvo nunulinta</p></p> `)
    figurosDOM.innerHTML='';
    
});

btn11.addEventListener('click',()=>{

    let skaicius=-1
    result-=1
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})
btn12.addEventListener('click',()=>{

    let skaicius=-2
    result-=2
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})
btn13.addEventListener('click',()=>{

    let skaicius=-3
    result-=3
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})
btn14.addEventListener('click',()=>{

    let skaicius=-4
    result-=4
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})

btn15.addEventListener('click',()=>{

    let skaicius=-5
    result-=5
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})
btn16.addEventListener('click',()=>{

    let skaicius=-6
    result-=6
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})
btn17.addEventListener('click',()=>{

    let skaicius=-7
    result-=7
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})
btn18.addEventListener('click',()=>{

    let skaicius=-8
    result-=8
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})
btn19.addEventListener('click',()=>{

    let skaicius=-9
    result-=9
    pDOM.textContent=result;
    historyDOM.insertAdjacentHTML('afterbegin',`<p style="background-color:green;">Buvo atimta ${skaicius} </p> `)

})