import { sortAndFilter } from "./filterAndSort.js";

import { filterData } from "./sortAndRender.js";

const btnOrder = document.querySelector(".option__btn_order");
const btnPeriod = document.querySelector(".option__btn_period");
const listOrder = document.querySelector(".option__list_order");
const listPeriod = document.querySelector(".option__list_period");
const inputOrder = document.querySelector("#order_by");
const inputPeriod = document.querySelector("#search_period");

let orderElems = listOrder.querySelectorAll(".option__item");
let periodElems = listPeriod.querySelectorAll(".option__item");

function addListenersOnHeadBtns() {
  btnOrder.addEventListener("click", () => {
    listOrder.style.display = "block";
    listPeriod.style.display = "none";
  });
  btnPeriod.addEventListener("click", () => {
    listPeriod.style.display = "block";
    listOrder.style.display = "none";
  });

  listOrder.addEventListener("click", () => {
    Array.from(orderElems).forEach((el) => {
      el.classList.remove("option__item_active");
    });
    event.target.classList.toggle("option__item_active");
    btnOrder.textContent = event.target.textContent;
    listOrder.style.display = "none";
    inputOrder.value = event.target.dataset.sort;
    filterData();
  });

  listPeriod.addEventListener("click", () => {
    Array.from(periodElems).forEach((el) => {
      el.classList.remove("option__item_active");
    });
    event.target.classList.toggle("option__item_active");
    btnPeriod.textContent = event.target.textContent;
    listPeriod.style.display = "none";
    inputPeriod.value = event.target.dataset.date;
    filterData();
  });

  document.addEventListener("click", () => {
    if (event.target !== btnOrder && event.target !== btnPeriod) {
      listPeriod.style.display = "none";
      listOrder.style.display = "none";
    }
  });
}

export const headBtn = () => {
  addListenersOnHeadBtns();
};
