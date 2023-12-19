let bars = document.querySelector('#bars')
let linguage = document.querySelector('#linguage')
let framework = document.querySelector('#framework')
let outros = document.querySelector('#outros')
let tudo = document.querySelector('#tudo')
let slide = document.querySelector('#slide')

document.querySelector('#bars').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `100vh`
    document.querySelector('#header').style.padding = `0`
    document.querySelector('#logo').style.display = 'none'
    bars.style.display = 'none'
    document.querySelector('#card').style.display = 'block'
})

document.querySelector('#out').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `40px`
    document.querySelector('#header').style.paddingRight = `20px`
    document.querySelector('#logo').style.display = 'flex'
    bars.style.display = 'flex'
    document.querySelector('#card').style.display = 'none'
})

document.querySelector('#menu-1').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `40px`
    document.querySelector('#header').style.paddingRight = `20px`
    document.querySelector('#logo').style.display = 'flex'
    bars.style.display = 'flex'
    document.querySelector('#card').style.display = 'none'
})

document.querySelector('#menu-2').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `40px`
    document.querySelector('#header').style.paddingRight = `20px`
    document.querySelector('#logo').style.display = 'flex'
    bars.style.display = 'flex'
    document.querySelector('#card').style.display = 'none'
})

document.querySelector('#menu-3').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `40px`
    document.querySelector('#header').style.paddingRight = `20px`
    document.querySelector('#logo').style.display = 'flex'
    bars.style.display = 'flex'
    document.querySelector('#card').style.display = 'none'
})

document.querySelector('#menu-4').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `40px`
    document.querySelector('#header').style.paddingRight = `20px`
    document.querySelector('#logo').style.display = 'flex'
    bars.style.display = 'flex'
    document.querySelector('#card').style.display = 'none'
})

document.querySelector('#menu-5').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `40px`
    document.querySelector('#header').style.paddingRight = `8px`
    document.querySelector('#logo').style.display = 'flex'
    bars.style.display = 'flex'
    document.querySelector('#card').style.display = 'none'
})

function dataTec(p){
    document.querySelectorAll('aside').forEach((att, index)=>{
        let attribute = att.getAttribute('data-def')
        if(p == attribute){
            console.log('yes')
            att.style.display = 'flex'
        }else{
            att.style.display = 'none'
        }
    })
}

function removeActive(){
    let def = document.querySelectorAll('#def li')
    for(let i of def){
        i.classList.remove('ativo')
    }

}



linguage.addEventListener('click', ()=>{
    let html = linguage.innerHTML
    dataTec(html)
    removeActive()
    linguage.classList.add('ativo')
})

framework.addEventListener('click', ()=>{
    let html = framework.innerHTML
    dataTec(html)
    removeActive()
    framework.classList.add('ativo')
})

outros.addEventListener('click', ()=>{
    let html = outros.innerHTML
    dataTec(html)
    removeActive()
    outros.classList.add('ativo')
})

tudo.addEventListener('click', ()=>{
    document.querySelectorAll('aside').forEach((att, index)=>{
        att.style.display = 'flex'
    })
    removeActive()
    tudo.classList.add('ativo')
})

window.onload = function(){
    document.querySelectorAll('aside').forEach((att, index)=>{
        att.style.display = 'flex'
        tudo.classList.add('ativo')
    })
}

document.querySelector('#slide-1').addEventListener('click', ()=>{
    slide.style.marginLeft = `0`
})

document.querySelector('#slide-2').addEventListener('click', ()=>{
    slide.style.marginLeft = `-100vw`
})

document.querySelector('#slide-3').addEventListener('click', ()=>{
    slide.style.marginLeft = `-200vw`
})