let btnhome = document.getElementById('home')
btnhome.addEventListener('click',()=>{
    cardsobre.classList.remove('sobre-open')
    cardprojetos.classList.remove('projetos-open')
    cardskils.classList.remove('skils-open')
})

let cardsobre = document.querySelector('.sobre')
let btnsobre = document.getElementById('sobre')
btnsobre.addEventListener('click',()=>{
    if(cardsobre.classList.contains('sobre-open')){
        cardsobre.classList.remove('sobre-open')
    }else{
        cardsobre.classList.add('sobre-open')
        cardprojetos.classList.remove('projetos-open')
        cardskils.classList.remove('skils-open')
    }
})

let cardprojetos = document.querySelector('.projetos')
let btnprojetos = document.getElementById('projetos')
btnprojetos.addEventListener('click',()=>{
    if(cardprojetos.classList.contains('projetos-open')){
        cardprojetos.classList.remove('projetos-open')
    }else{
        cardprojetos.classList.add('projetos-open')
        cardsobre.classList.remove('sobre-open')
        cardskils.classList.remove('skils-open')
    }
})

let btnskils = document.getElementById('skils')
let cardskils = document.querySelector('.skils')
btnskils.addEventListener('click',()=>{
    if(cardskils.classList.contains('skils-open')){
        cardskils.classList.remove('skils-open')
    }else{
        cardskils.classList.add('skils-open')
        cardprojetos.classList.remove('projetos-open')
        cardsobre.classList.remove('sobre-open')
    }
})
let menumobileabrir = document.getElementById('icon-menu-mobile-abrir')
let menumobilefechar = document.getElementById('icon-menu-mobile-fechar')
let menumobilelista = document.querySelector('.menu-mobile .menu-mobile-lista')
menumobileabrir.addEventListener('click',()=>{
    if(menumobilelista.style.display = 'block'){
        menumobilefechar.style.display =  'block'
        menumobileabrir.style.display = 'none'
    }
})
menumobilefechar.addEventListener('click',()=>{
    if(menumobilelista.style.display = 'none'){
        menumobileabrir.style.display = 'block'
        menumobilefechar.style.display =  'none'
    }
})

let btnmobilehome = document.getElementById('homeM')
let btnmobilesobre = document.getElementById('sobreM')
let btnmobileprojetos = document.getElementById('projetosM')
let btnmobileskils = document.getElementById('skilsM')

btnmobilehome.addEventListener('click',()=>{
    cardsobre.classList.remove('sobre-open')
    cardprojetos.classList.remove('projetos-open')
    cardskils.classList.remove('skils-open')
})
btnmobilesobre.addEventListener('click',()=>{
    if(cardsobre.classList.contains('sobre-open')){
        cardsobre.classList.remove('sobre-open')
    }else{
        cardsobre.classList.add('sobre-open')
        cardprojetos.classList.remove('projetos-open')
        cardskils.classList.remove('skils-open')
    }
})
btnmobileprojetos.addEventListener('click',()=>{
    if(cardprojetos.classList.contains('projetos-open')){
        cardprojetos.classList.remove('projetos-open')
    }else{
        cardprojetos.classList.add('projetos-open')
        cardsobre.classList.remove('sobre-open')
        cardskils.classList.remove('skils-open')
    }
      
})
btnmobileskils.addEventListener('click',()=>{
    if(cardskils.classList.contains('skils-open')){
        cardskils.classList.remove('skils-open')
    }else{
        cardskils.classList.add('skils-open')
        cardprojetos.classList.remove('projetos-open')
        cardsobre.classList.remove('sobre-open')
    }
})