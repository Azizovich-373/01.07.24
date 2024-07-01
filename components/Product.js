import { todos } from "../index.js"
export function Product(item){
    const product = document.createElement('div')
    const name_prod = document.createElement('h2')
    const time_prod = document.createElement('h3')
    const delete_btn = document.createElement('button')
    const img_delete = document.createElement('img')


    product.classList.add('product')
    name_prod.classList.add('name_prod')
    time_prod.classList.add('time_prod')
    delete_btn.classList.add('delete_btn')
    
    img_delete.src = './svg/delete.svg'
    
    name_prod.innerHTML = item.title
    time_prod.innerHTML = new Date().toLocaleTimeString()


    product.append(name_prod, time_prod, delete_btn)
    delete_btn.append(img_delete)

    const new_prod = document.querySelector('.new_prod')
    const save_prod = document.querySelector('.save_prod')

    save_prod.onclick = () => {
        const val = new_prod.value.toLowerCase();
        todos.push({
            id: Math.floor(Math.random() * 1000),
            title: val,
            isDone: false,
            time: new Date().toLocaleTimeString(),
        })
        console.log(todos);
    }
    

    return product
}