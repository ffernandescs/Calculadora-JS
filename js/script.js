const resultado = document.querySelector('#result span');
const confirmar = document.querySelector('.confirme');

function insert( valor ) {
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = '';
}

function back() {
    if(resultado.textContent){
        let result = document.querySelector('#result span').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}

function enter() {
    if(resultado.textContent != 'Error') {
        document.querySelector('#result span').innerHTML = eval(resultado.innerHTML)
    }
}
