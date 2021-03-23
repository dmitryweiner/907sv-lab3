// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
import { getFilteredList } from './Store';
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

describe(' Тесты Store ', () => {
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
