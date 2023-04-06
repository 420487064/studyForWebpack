// webpack ./src/index.js -o ./build/build.js --mode=development

import './index.less'
import './index.css'
import './common.js'
import _ from 'lodash'
import './asyn.js'


function a(person) {
    return "hello" + person;
}
var user = "jane user";
document.body.innerHTML = a(user);

function hellow(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
          resolve('hellow world!'); 
        },2000)
    })
}

async function hello() {
    let str = await hellow()
    console.log(str);
}

hello()

console.log(_.join(['11','22'],' | '));

const btn = document.createElement('button')
btn.textContent = '点击执行加法运算'
btn.addEventListener('click',() => {
    import('./add.js').then(({add}) => {
        console.log(add(4,5));
    })
})

document.body.appendChild(btn)