const input = document.getElementById('input')
const butt = document.getElementById('button')
let text_t = document.getElementById('text_line')


const todo = () => {
    if (input.value.trim() === '') {
    input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')

        text.innerHTML = input.value
        div.append(text)
        text_t.append(div)
        let arr = []
        arr.push(input.value)
        arr.forEach(i => {
            const b = document.createElement('p')
            b.innerText = i.split('').reverse().join('')
            document.body.append(b)
        })




    }
    input.value = ''
}
butt.onclick = () => todo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? todo() : false)










