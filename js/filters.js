import { renderTransactions } from './render.js';
import { filterBtns } from './selectors.js';
import { state } from './state.js';

export function setupFilters() {
  filterBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    const filterValue = e.target.getAttribute('data-type');
    state.currentFilter = filterValue;
    filterBtns.forEach((btn) => btn.classList.remove('filter__btn--active'));
    e.target.classList.add('filter__btn--active');
    renderTransactions();
  }));
}