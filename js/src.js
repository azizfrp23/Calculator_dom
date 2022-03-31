function plus(){
    const rest = document.querySelector('.res')

    rest.innerHTML = parseInt(document.querySelector('.num1').value) + parseInt(document.querySelector('.num2').value)

}

function minus(){
    const rest = document.querySelector('.res')

    rest.innerHTML = parseInt(document.querySelector('.num1').value) - parseInt(document.querySelector('.num2').value)

}
function mult(){
    const rest = document.querySelector('.res')

    rest.innerHTML = parseInt(document.querySelector('.num1').value) * parseInt(document.querySelector('.num2').value)

}
function del(){
    const rest = document.querySelector('.res')

    rest.innerHTML = parseInt(document.querySelector('.num1').value) / parseInt(document.querySelector('.num2').value)

}

function clean(){
    var num1 = document.querySelector('.num1');
    var num2 = document.querySelector('.num2');
    const rest= document.querySelector('.res');

    num1.value = ' ';

    num2.value = ' ';
    rest.innerHTML = ' ';
}