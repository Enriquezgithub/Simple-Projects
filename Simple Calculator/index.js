const btn = document.querySelectorAll('button')

const input = document.getElementById('input')

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        const value = btn[i].innerHTML;

        if(value === 'C'){
            clearBtn()
        }else if(value === '='){
            evalBtn()
        }else {
            appendValue(value);
        }
    })
}

function clearBtn() {
    input.value = "";
}

function evalBtn() {
    input.value = eval(input.value)
}

function appendValue(value) {
  input.value += value;
}