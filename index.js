import filteredItemsForm from "./filteredForm.js";
import { getData } from "./getData.js";
import { headBtn } from "./headBtn.js";
import { headChooseRegion } from "./headChooseRegion.js";
import { searchVacancies } from "./searchVacancies.js";

function init() {
  headBtn();

  getData();
  searchVacancies();
  filteredItemsForm();
}
init();
