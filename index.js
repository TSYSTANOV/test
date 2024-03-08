import { getData } from "./getData.js"
import { headBtn } from "./headBtn.js"
import { headChooseRegion } from "./headChooseRegion.js"
import { searchVacancies } from "./searchVacancies.js"

let dataVacancies = []


function init(){
  headBtn()
  // headChooseRegion()
  getData()
  searchVacancies()
}
init()

export default dataVacancies
