import { Product } from "./components/Product.js";
import { reload } from "./lib/utils.js";

const main_box = document.querySelector('.main_box')
export const todos = [
    {
        id: Math.floor(Math.random() * 1000),
        title: 'Milk',
        isDone: false,
        time: new Date().toLocaleTimeString(),
    },
]
reload(todos, main_box, Product )
