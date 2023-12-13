let bars = document.querySelector('#bars')

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