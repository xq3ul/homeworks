//1


const btns = document.querySelectorAll('.counter__btn');

btns.forEach(btn=>{
    btn.addEventListener('click',function (){
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector('.counter__value');
    const currentValue = +inp.value;
    let newValue;


    if(direction === 'plus') {
        newValue = currentValue + 1;
        inp.style.color='green'


    }else {
        newValue = currentValue - 1 > 0 ?
        currentValue - 1 : 0;
        inp.style.color='red'

    }


    inp.value = newValue;

    })

})



//2


const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
const block = document.getElementById('block')

    block.addEventListener('mousemove', event => {
    posX.innerHTML = event.screenX
    posY.innerHTML = event.screenY
})



//3



const color = prompt("введите цвет/красный/желтый/зеленый").toLowerCase().trim()

switch (color) {
    case 'красный':
        document.getElementsByClassName('color__red')[0].style.background = 'red'
        document.getElementsByClassName('color__red')[0].textContent = 'STOP!'
        break
    case 'желтый':
        document.getElementsByClassName('color__yellow')[0].style.background = 'yellow'
        document.getElementsByClassName('color__yellow')[0].textContent = 'Get Ready!'
        break
    case 'зеленый':
        document.getElementsByClassName('color__green')[0].style.background = 'green'
        document.getElementsByClassName('color__green')[0].textContent = 'GO!'
        break
    default:
        document.getElementsByClassName('color__red')[0].textContent = 'try'
        document.getElementsByClassName('color__yellow')[0].textContent = 'again'
        document.getElementsByClassName('color__green')[0].textContent = '!!!'
        document.getElementsByClassName('color__red')[0].style.color = 'white'
        document.getElementsByClassName('color__green')[0].style.color = 'white'
        document.getElementsByClassName('color__yellow')[0].style.color = 'white'
}





