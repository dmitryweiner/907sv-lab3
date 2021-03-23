export function getFilteredList(list, isFilterDone = false) {
  if (isFilterDone === true) {
    let filteredList = [];
    for (let item of list) {
      if (item.isChecked === true) {
        filteredList.push(item);
      }
    }
    return filteredList;
  } else {
    return list;
  }
}
