function g(){
    return import('lodash').then(({ default: _ }) =>{
        const ele = document.createElement('div')
        ele.innerHTML = _.join(['hello','world'],' | ')
        return ele;
    })
}

g().then((ele)=>{
    document.body.appendChild(ele)
})