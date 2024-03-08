import { getSearch } from "./getData.js"

const searchTitle = document.querySelector('.found')
searchTitle.innerHTML = ''
const input = document.querySelector('.bottom__input')
const form = document.querySelector('.bottom__search')



function findVacancy(){
  form.addEventListener('submit', async()=>{
    event.preventDefault()
    let value = input.value
    let countOfVacancies = await getSearch(value)
    searchTitle.innerHTML = `
    ${countOfVacancies ? countOfVacancies : '0'} вакансий &laquo;<span class="found__item">${value}</span>&raquo;`
    input.value = ''
  })
}


export const searchVacancies = () =>{
  findVacancy()
}
