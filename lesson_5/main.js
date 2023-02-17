const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')

        div.setAttribute('class', 'block_text')

        text.innerHTML = input.value

        div.append(text)
        todoList.append(div)


        const edit = document.createElement('button')
        const Del = document.createElement('button')
        Del.setAttribute('class','buttons')
        edit.setAttribute('class','buttons')
        edit.onclick = () => {
            let de = prompt ()

            if (de.trim()!='') {

                text.innerText = de
            }

        }
        Del.innerText = 'delete'
        edit.innerText = 'edit'

        div.append(edit,Del)

        Del.onclick = () => div.remove()
    }
    input.value = ''
}

createButton.onclick = () => createTodo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? createTodo() : false)















