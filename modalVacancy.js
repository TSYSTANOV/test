let modalItem = document.querySelector('.overlay_vacancy')

function renderModal(item){
let modal = document.createElement('div')
modal.className = 'modal'
modal.innerHTML = `
  <h2 class="modal__title">${item.title}</h2>
  <p class="modal__compensation">${item.compensation}</p>
  <p class="modal__employer">${item.employer}</p>
<p class="modal__address">${item.address}</p>
  <p class="modal__experience">Требуемый опыт работы: ${item.experience}</p>
  <p class="modal__employment">${item.employment.join(', ')}</p>
  <p class="modal__description">${item.description}</p>
  <div class="modal__skills skills">
    <h2 class="skills__title">Подробнее:</h2>
    <ul class="skills__list">
    <li>${item.skills.join(' ')}</li>
    </ul>
  </div>
  <button class="modal__response">Отправить резюме</button>
  `
  let btnClose = document.createElement('button')
  btnClose.className = 'modal__close'
  btnClose.textContent = 'X'
  btnClose.addEventListener('click',()=>{
    document.querySelector('.overlay_active').innerHTML = ''
    document.querySelector('.overlay_active').classList.remove('overlay_active')
  })
  modal.prepend(btnClose)
  modalItem.append(modal)
  modalItem.classList.toggle('overlay_active')

  document.addEventListener('click',()=>{
    if(event.target.classList.contains('overlay_active')){
      document.querySelector('.overlay_active').innerHTML = ''
      document.querySelector('.overlay_active').classList.remove('overlay_active')
    }
  })
}



export default renderModal
