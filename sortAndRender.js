import { sortAndFilter } from "./filterAndSort.js";
import BASE_URL from "./getData.js";
import renderVacancies from "./renderVacancies.js";

let dataArr = [];

const topRegion = document.querySelector(".top__city");

async function getInfo() {
  let atr = topRegion.getAttribute("href").slice(1);
  let region = topRegion.textContent;
  let data = await fetch(`${BASE_URL}/api/vacancy?${atr}=${region}`).then(
    (response) => response.json()
  );
  dataArr = await sortAndFilter(data);
  renderVacancies(dataArr);
}

export const sortAdnRender = () => {
  getInfo();
};

export const filterData = async () => {
  let elems = await sortAndFilter(dataArr);

  renderVacancies(elems);
};
