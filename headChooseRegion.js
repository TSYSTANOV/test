import { getData } from "./getData.js"
import { localStorGet, localStorSet } from "./localStor.js"

const topRegion = document.querySelector('.top__city')
const windowOfRegions = document.querySelector('.city')
const regionClose = document.querySelector('.city__close')
const listOfRegions = document.querySelector('.city__region')
const searchTitle = document.querySelector('.found')


let {href,region} = localStorGet()
topRegion.textContent = region
topRegion.setAttribute('href',href)

topRegion.addEventListener('click',()=>{
  windowOfRegions.classList.toggle('city_active')
})

regionClose.addEventListener('click',()=>{
  windowOfRegions.classList.toggle('city_active')
})

listOfRegions.addEventListener('click',()=>{
  if(event.target.classList.contains('city__link')){
    topRegion.textContent = event.target.textContent
    topRegion.setAttribute('href', event.target.getAttribute('href'))
    getData()
    windowOfRegions.classList.toggle('city_active')
    searchTitle.innerHTML = ''
    localStorSet({href:event.target.getAttribute('href'),
    region:event.target.textContent})
  }
})



export const headChooseRegion = () =>{

}
