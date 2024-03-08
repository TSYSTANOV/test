


export const localStorGet = () =>{
  return JSON.parse(localStorage.getItem('region'))
}


export const localStorSet = (region) =>{
  localStorage.setItem('region',JSON.stringify(region))
}
