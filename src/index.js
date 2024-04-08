import * as bootstrap from 'bootstrap'

const selectElement = (Element) => document.querySelector(Element) //grabbing a particular element

selectElement(".mobile-menu").addEventListener("click",()=> {
    selectElement("header").classList.toggle('active');
})

