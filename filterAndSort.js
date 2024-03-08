import filteredItemsForm, { filterFormValues } from "./filteredForm.js";
import { filterData } from "./sortAndRender.js";

function sortByOrder(data) {
  return new Promise((resolve) => {
    const inputOrder = document.querySelector("#order_by").value;

    switch (inputOrder) {
      case "date":
        data.sort((a, b) => {
          return new Date(a.date).getTime() > new Date(b.date).getTime()
            ? -1
            : 1;
        });
        resolve(data);
        break;
      case "up":
        data.sort((a, b) => {
          return a.minCompensation > b.minCompensation ? -1 : 1;
        });
        resolve(data);
        break;
      case "down":
        data.sort((a, b) => {
          return a.minCompensation < b.minCompensation ? -1 : 1;
        });
        resolve(data);
        break;
    }
  });
}

function sortByPeriod(data) {
  const inputPeriod = document.querySelector("#search_period").value;
  let dateNow = new Date();
  switch (inputPeriod) {
    case "365":
      dateNow.setDate(dateNow.getDate() - inputPeriod);
      break;
    case "30":
      dateNow.setDate(dateNow.getDate() - inputPeriod);
      break;
    case "7":
      dateNow.setDate(dateNow.getDate() - inputPeriod);
      break;
    case "3":
      dateNow.setDate(dateNow.getDate() - inputPeriod);
      break;
    case "1":
      dateNow.setDate(dateNow.getDate() - inputPeriod);
      break;
  }
  let filteredData = data.filter((el) => {
    if (new Date(el.date).getTime() > dateNow.getTime()) {
      return true;
    }
  });
  // console.log(filteredData);
  return filteredData;
}
function sortByParamsInFilterForm(data) {
  let response = filterFormValues();

  let { salary, region, experience, type } = response;

  let filteredData = data;
  if (salary) {
    filteredData = data.filter((el) => {
      if (el.minCompensation >= +salary) {
        return true;
      }
    });
  }
  if (region.length > 0) {
    let array = [];
    region.forEach((el) => {
      for (let i = 0; i < filteredData.length; i++) {
        if (
          filteredData[i]["address"] === el ||
          filteredData[i]["country"] === el
        ) {
          array.push(filteredData[i]);
        }
      }
    });

    filteredData = [...array];
  }
  if (experience) {
    filteredData = filteredData.filter((el) => {
      if (el.experience === experience) {
        return true;
      }
    });
  }
  if (type.length > 0) {
    let array = [];
    type.forEach((el) => {
      for (let i = 0; i < filteredData.length; i++) {
        if (filteredData[i]["employment"].includes(el.toLowerCase())) {
          array.push(filteredData[i]);
        }
      }
    });

    filteredData = [...array];
  }
  return filteredData;
}

export const sortAndFilter = async (data) => {
  let response = await sortByOrder(data)
    .then((res) => sortByPeriod(res))
    .then((res) => sortByParamsInFilterForm(res));

  return response;
};
