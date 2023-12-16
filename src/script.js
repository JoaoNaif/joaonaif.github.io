let bars = document.querySelector('#bars')
let linguage = document.querySelector('#linguage')
let framework = document.querySelector('#framework')
let outros = document.querySelector('#outros')
let tudo = document.querySelector('#tudo')

document.querySelector('#bars').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `100vh`
    document.querySelector('#header').style.padding = `0`
    document.querySelector('#logo').style.display = 'none'
    bars.style.display = 'none'
    document.querySelector('#card').style.display = 'block'
})

document.querySelector('#out').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `40px`
    document.querySelector('#header').style.padding = `8px`
    document.querySelector('#logo').style.display = 'flex'
    bars.style.display = 'flex'
    document.querySelector('#card').style.display = 'none'
})

function dataTec(p){
    document.querySelectorAll('aside').forEach((att, index)=>{
        let attribute = att.getAttribute('data-def')
        console.log(attribute)
        if(p == attribute){
            console.log('yes')
            att.style.display = 'flex'
        }else{
            att.style.display = 'none'
        }
    })
}

linguage.addEventListener('click', ()=>{
    let html = linguage.innerHTML
    console.log(html)
    dataTec(html)
})

framework.addEventListener('click', ()=>{
    let html = framework.innerHTML
    dataTec(html)
})

outros.addEventListener('click', ()=>{
    let html = outros.innerHTML
    dataTec(html)
})

tudo.addEventListener('click', ()=>{
    document.querySelectorAll('aside').forEach((att, index)=>{
        att.style.display = 'flex'
    })
})

