import { getInfoAboutVacancy } from "./getData.js";

const ROOT_elem = document.querySelector(".result__list");

async function renderVacancies(data) {
  ROOT_elem.innerHTML = "";

  let response = await data;

  response.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <article class="vacancy">
               <h2 class="vacancy__title">
                 <a class="vacancy__open-modal" href="#" data-vacancy="${item.id}">${item.title}</a>
               </h2>
               <p class="vacancy__compensation">${item.compensation}</p>
               <p class="vacancy__work-schedule">${item.workSchedule}</p>
               <div class="vacancy__employer">
                 <p class="vacancy__employer-title">${item.employer}</p>
                 <p class="vacancy__employer-address">${item.address}</p>
               </div>
               <p class="vacancy__description">${item.description}</p>
               <p class="vacancy__date">
                 <time datetime="2022-02-25">${item.date}</time>
               </p>
               <div class="vacancy__wrapper-btn">
                 <button class="vacancy__contacts">Показать контакты</button>
               </div>
             </article>
    `;
    let a = document.createElement("a");
    a.className = "vacancy__response vacancy__open-modal";
    a.dataset.vacancy = item.id;
    a.textContent = "Откликнуться";
    a.href = "#";
    a.addEventListener("click", () => {
      event.preventDefault();
      getInfoAboutVacancy(item.id);
    });
    li.querySelector(".vacancy__wrapper-btn").prepend(a);
    ROOT_elem.append(li);
  });
}

export default renderVacancies;
