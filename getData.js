import { sortAndFilter } from "./filterAndSort.js";

import renderModal from "./modalVacancy.js";
import renderVacancies from "./renderVacancies.js";
import { sortAdnRender } from "./sortAndRender.js";

const BASE_URL = "http://localhost:3000";
//
// if(obj){
// if(obj.search){
//   url = `http://localhost:3000/api/vacancy?search=${obj.search}`
//   }
//   if(obj.country){
//     url = `http://localhost:3000/api/vacancy?country=${obj.country}`
//   }
//   if(obj.city){
//     url = `http://localhost:3000/api/vacancy?city=${obj.city}`
//   }
//
export async function getInfoAboutVacancy(id) {
  let data = await fetch(`${BASE_URL}/api/vacancy/${id}`).then((response) =>
    response.json()
  );
  renderModal(data);
}

export async function getSearch(value) {
  let data = await fetch(`${BASE_URL}/api/vacancy?search=${value}`).then(
    (response) => response.json()
  );
  renderVacancies(data);
  return data.length;
}

const topRegion = document.querySelector(".top__city");

async function getAll() {
  sortAdnRender();
}

export const getData = () => {
  getAll();
};
export default BASE_URL;
