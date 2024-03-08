


const inputPeriod = document.querySelector('#search_period').value

function sortByOrder(data){
  console.log(data)
  const inputOrder = document.querySelector('#order_by').value
  switch (inputOrder){
    case 'date':
      data.sort((a,b)=>{
        return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1
      })
     return data
    case 'up':
      break
    case 'down':
      break
  }
}

export const sortAndFilter = (data) =>{
  let info = sortByOrder(data)
  return info
}
