const appDOM = document.getElementById('app');

appDOM.innerHTML = `   
    <div class="kevalas">
        <div class="ekranas">
            <div class='p'></div>
        </div>
        <div class="mygtuku-kevalas">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">0</button>
            <button class="func" type="button">C</button>
            <button class="func" type="button">.</button>
            <button class="func" type="button">-</button>
            <button class="func" type="button">+</button>
            <button class="func" type="button">/</button>
            <button class="func" type="button">*</button>
            <button class="func" type="button">(</button>
            <button class="func" type="button">)</button>
            <button class="func" type="button">=</button>
        </div>
    </div>
    <div class="history"></div>
`;

const [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0, 
       btnC, btndot, btnminus, btnplus, btndiv,btndaug,btnkairys,btndesinys,btneg] = appDOM.querySelectorAll('button');
const pDOM = document.querySelector('.p');
const historyDOM = document.querySelector('.history');

let ekranas = '';

// Bendroji funkcija skaičių mygtukams// jeigu veikas kartojasi toks pats tiesiog prilyginam po clicko funcijai ()=> ir ji duoda { kas viduje su paciais skliaustais. }
function paspaudus(number) {
    if (ekranas.length < 12) {
        ekranas += number;
        pDOM.textContent = ekranas;
        historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:green;">Įvestas skaičius: ${number}</p>`);
    } else {
      
        historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:orange;">Pasiekta maksimali įvestis:12 </p>`);
    }
}
// Skaičių mygtukų event listeners
btn1.addEventListener('click', () => paspaudus('1'));
btn2.addEventListener('click', () => paspaudus('2'));
btn3.addEventListener('click', () => paspaudus('3'));
btn4.addEventListener('click', () => paspaudus('4'));
btn5.addEventListener('click', () => paspaudus('5'));
btn6.addEventListener('click', () => paspaudus('6'));
btn7.addEventListener('click', () => paspaudus('7'));
btn8.addEventListener('click', () => paspaudus('8'));
btn9.addEventListener('click', () => paspaudus('9'));
btn0.addEventListener('click', () => paspaudus('0'));



// Funkcinių mygtukų event listeners
btnC.addEventListener('click', () => {
    ekranas = '';
    pDOM.textContent = '0';
    historyDOM.innerHTML = '<p style="background-color:red;">Ekranas išvalytas</p>';
});

btndot.addEventListener('click', () => {
    // Tikriname, ar jau yra taškas skaičiuje
    if (!ekranas.includes('.')) {
        ekranas += '.';
        pDOM.textContent = ekranas;
        historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:green;">Pasirinktas ženklas: Taškas</p>`);
    }
});

btnminus.addEventListener('click', () => {
    ekranas += '-';
    pDOM.textContent = ekranas;
    historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:green;">Pasirinktas ženklas: Minus</p>`);
});

btnplus.addEventListener('click', () => {
    ekranas += '+';
    pDOM.textContent = ekranas;
    historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:green;">Pasirinktas ženklas: Plus</p>`);
});

btndiv.addEventListener('click', () => {
    ekranas += '/';
    pDOM.textContent = ekranas;
    historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:green;">Pasirinktas ženklas: Dalinti</p>`);
});

btndaug.addEventListener('click', () => {
    ekranas += '*';
    pDOM.textContent = ekranas;
    historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:green;">Pasirinktas ženklas: Daugyba</p>`);
});
btnkairys.addEventListener('click',()=>{
ekranas +='('
pDOM.textContent= ekranas;
historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:green;">Pasirinktas ženklas: ( </p>`);

})
btndesinys.addEventListener('click',()=>{
ekranas+=')'
pDOM.textContent=ekranas;
historyDOM.insertAdjacentHTML('afterbegin', `<p style="background-color:green;">Pasirinktas ženklas: ) </p>`);

})

btneg.addEventListener('click', () => {
    try {
        // Pašaliname galutinį "=" jei jis yra su = gali neveiks eval() funkcija. 
        const expression = ekranas.replace(/=$/, ''); // replace /=$/ reiskiasi istrinti paskutini zenkla = nes neveiks eval funkcija. 
        const calculationekranas = eval(expression);
        
        pDOM.textContent = calculationekranas;
        ekranas = calculationekranas.toString();
        
        historyDOM.insertAdjacentHTML('afterbegin', 
            `<p style="background-color:blue;">Rezultatas: ${expression} = ${calculationekranas}</p>`);
    } catch (error) {
        pDOM.textContent = 'Klaida';
        historyDOM.insertAdjacentHTML('afterbegin', 
            `<p style="background-color:red;">Klaida: Neteisinga išraiška</p>`);
    }
});
