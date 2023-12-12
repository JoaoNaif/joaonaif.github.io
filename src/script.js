let bars = document.querySelector('#bars')

document.querySelector('#bars').addEventListener('click', ()=>{
    document.querySelector('#header').style.height = `100vh`
    bars.style.display = 'none'
})