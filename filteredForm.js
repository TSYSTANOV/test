import { filterData } from "./sortAndRender.js";

const filterForm = document.querySelector(".filter__form");
const filterOn = document.querySelector(".filter__apply");
const filterReset = document.querySelector(".filter__reset");

function filteredItemsForm() {
  filterForm.addEventListener("click", () => {
    if (event.target.classList.contains("filter__input")) {
      filterOn.style.display = "block";
    }
  });
  filterReset.addEventListener("click", () => {
    event.preventDefault();
    Array.from(filterForm.querySelectorAll("input")).forEach((el) => {
      el.checked = false;
    });
    filterData();
    filterOn.style.display = "none";
  });
  filterOn.addEventListener("click", () => {
    event.preventDefault();
    filterData();
  });
}
export const filterFormValues = () => {
  const salary = Array.from(filterForm.salary).find((el) => el.checked === true)
    ? Array.from(filterForm.salary).find((el) => el.checked === true).value
    : null;
  const region = Array.from(filterForm.region)
    .filter((el) => el.checked === true)
    .map((el) => el.value);
  const experience = Array.from(filterForm.experience).find(
    (el) => el.checked === true
  )
    ? Array.from(filterForm.experience).find((el) => el.checked === true).value
    : null;
  const type = Array.from(filterForm.type)
    .filter((el) => el.checked === true)
    .map((el) => el.value);

  return { salary, region, experience, type };
};

export default filteredItemsForm;
