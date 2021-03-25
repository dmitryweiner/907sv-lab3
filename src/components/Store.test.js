// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
import { getFilteredList, moveUpHandler, moveDownHandler } from './Store';
const listToFilter = [
  {
    id: 1,
    isChecked: true,
    title: "I'm a deed"
  },
  {
    id: 2,
    isChecked: false,
    title: "I'm a deed"
  }
];

describe(' Тесты Store > getFilteredList ', () => {
  test(' getFilteredList проводит фильтрацию и возвращает список только с выбранными checkbox ', () => {
    const showedDeeds = getFilteredList(listToFilter, true);
    for (let item of showedDeeds) {
      expect(item.isChecked).toBeTruthy();
    }
  });

  test(' getFilteredList проводит фильтрацию и возвращает неизмененный список ', () => {
    let showedDeeds = getFilteredList(listToFilter, false);
    expect(showedDeeds).toEqual(listToFilter);
  });
});

describe(' Тесты Store > moveUp и moveDown ', () => {
  test(' moveUpHandler меняет порядок элементов, возвращает измененный список ', () => {
    const alteredList = moveUpHandler(listToFilter, 2);
    // console.log('received alteredList (after moving up an item)', alteredList);
    expect(alteredList[0]).toHaveProperty('id', 2);
    expect(alteredList[1]).toHaveProperty('id', 1);
  });

  test(' moveUpHandler получает элемент с index = 0, возвращает неизмененный список ', () => {
    const alteredList = moveUpHandler(listToFilter, 1);
    // console.log('received alteredList (after not moving up an item)', alteredList);
    expect(alteredList[0]).toHaveProperty('id', 1);
    expect(alteredList[1]).toHaveProperty('id', 2);
  });

  test(' moveDownHandler меняет порядок элементов, возвращает измененный список ', () => {
    const alteredList = moveDownHandler(listToFilter, 1);
    // console.log('received alteredList (after moving down an item)', alteredList);
    expect(alteredList[0]).toHaveProperty('id', 2);
    expect(alteredList[1]).toHaveProperty('id', 1);
  });

  test(' moveDownHandler получает элемент с index = list.length-1, возвращает не измененный список ', () => {
    const alteredList = moveDownHandler(listToFilter, 2);
    // console.log('received alteredList (after not moving down an item)', alteredList);
    expect(alteredList[0]).toHaveProperty('id', 1);
    expect(alteredList[1]).toHaveProperty('id', 2);
  });
});
